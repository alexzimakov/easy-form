import type {
  FieldError,
  FormControl,
  NormalizedFieldSchema,
  FieldChangeListener,
  FieldBlurListener,
  FieldOption,
  NormalizedFieldOption,
} from './types';
import { CLASS_NAMES } from './class-names';
import { uniqueId, setAttributes, appendContentToElement } from './utils';

export type Input = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export class EasyFormControl implements FormControl {
  onChange: FieldChangeListener;
  onBlur?: FieldBlurListener;
  private readonly _schema: NormalizedFieldSchema;
  private readonly $element: HTMLElement;
  private readonly $inputs: Input[] = [];
  private $error?: HTMLElement;
  private _isDisabled = false;
  private _isReadOnly = false;

  constructor(
    fieldSchema: NormalizedFieldSchema,
    onChange: FieldChangeListener,
    onBlur?: FieldBlurListener
  ) {
    this._schema = fieldSchema;
    this.onChange = onChange;
    this.onBlur = onBlur;
    this.$element = this._createElement();
    this._addEventListeners();
  }

  static normalizeOption(option: FieldOption): NormalizedFieldOption {
    let value: string;
    let label: string | undefined;
    if (typeof option === 'object') {
      value = '' + option.value;
      label = option.label;
    } else {
      value = '' + option;
    }

    return { value, label: label || value };
  }

  get isDisabled(): boolean {
    return this._isDisabled;
  }
  set isDisabled(value: boolean) {
    this._isDisabled = value;
    this.$inputs.forEach(($input) => {
      if (value) {
        $input.setAttribute('disabled', 'true');
      } else {
        $input.removeAttribute('disabled');
      }
    });
  }

  get isReadOnly(): boolean {
    return this._isReadOnly;
  }
  set isReadOnly(value: boolean) {
    this._isReadOnly = value;
    this.$inputs.forEach(($input) => {
      if (value) {
        $input.setAttribute('readonly', 'true');
      } else {
        $input.removeAttribute('readonly');
      }
    });
  }

  private _addEventListeners(): void {
    const { name, type } = this._schema;
    this.$inputs.forEach(($input) => {
      $input.addEventListener('change', () => {
        if (type === 'checkboxes') {
          this.onChange(
            name,
            this.$inputs
              .filter(($input) => ($input as HTMLInputElement).checked)
              .map(($input) => $input.value)
          );
        } else {
          this.onChange(name, $input.value);
        }
      });

      $input.addEventListener('blur', () => {
        if (typeof this.onBlur === 'function') {
          this.onBlur(name);
        }
      });
    });
  }

  private _createElement(): HTMLDivElement {
    const { type, helpText } = this._schema;

    let $field: HTMLElement;
    if (type === 'checkboxes') {
      $field = this._createCheckboxes();
    } else if (type === 'radio-buttons') {
      $field = this._createRadioButtons();
    } else {
      $field = this._createField();
    }
    $field.classList.add(CLASS_NAMES.formControlField);

    const $control = document.createElement('div');
    $control.classList.add(CLASS_NAMES.formControl);
    $control.append($field);

    if (helpText) {
      const $helpText = document.createElement('small');
      $helpText.classList.add(CLASS_NAMES.formControlHelpText);
      appendContentToElement($helpText, helpText);
      $control.append($helpText);
    }

    return $control;
  }

  private _createField(): HTMLDivElement {
    const { type, label } = this._schema;

    let $input: Input;
    switch (type) {
      case 'select':
        $input = this._createSelect();
        break;
      case 'textarea':
        $input = this._createTextarea();
        break;
      default:
        $input = this._createInput();
    }
    $input.classList.add(CLASS_NAMES.fieldInput);

    const $field = document.createElement('div');
    $field.classList.add(
      CLASS_NAMES.field,
      CLASS_NAMES.fieldTypeModifier(type)
    );

    if (label) {
      const $label = document.createElement('label');
      $label.classList.add(CLASS_NAMES.fieldLabel);
      $label.setAttribute('for', $input.id);
      appendContentToElement($label, label);
      $field.append($label);
    }

    if (type === 'checkbox') {
      $field.prepend($input);
    } else {
      $field.append($input);
    }

    return $field;
  }

  private _createInput(): HTMLInputElement {
    const { name, type, value, checked, inputAttrs } = this._schema;
    const $input = document.createElement('input');
    setAttributes($input, inputAttrs, ['name', 'type', 'value', 'checked']);
    $input.id = $input.id || `input-${uniqueId()}`;
    $input.name = name;
    $input.type = type;
    $input.value = '' + value;
    $input.classList.add(
      CLASS_NAMES.input,
      CLASS_NAMES.inputTypeModifier(type)
    );
    if (type === 'checkbox') {
      $input.checked = checked;
    }
    this.$inputs.push($input);
    return $input;
  }

  private _createTextarea(): HTMLTextAreaElement {
    const { name, value, inputAttrs } = this._schema;
    const $textarea = document.createElement('textarea');
    setAttributes($textarea, inputAttrs, ['name']);
    $textarea.id = $textarea.id || `textarea-${uniqueId()}`;
    $textarea.name = name;
    appendContentToElement($textarea, '' + value);
    $textarea.classList.add(CLASS_NAMES.textarea);

    this.$inputs.push($textarea);
    return $textarea;
  }

  private _createSelect(): HTMLSelectElement {
    const { name, value, options, inputAttrs } = this._schema;
    const selectedValue = '' + value;

    const $select = document.createElement('select');
    setAttributes($select, inputAttrs, ['name']);
    $select.id = $select.id || `select-${uniqueId()}`;
    $select.name = name;
    $select.classList.add(CLASS_NAMES.select);

    options.forEach((option) => {
      const $option = document.createElement('option');
      const { value, label } = EasyFormControl.normalizeOption(option);
      $option.value = value;
      appendContentToElement($option, label);
      if (value === selectedValue) {
        $option.selected = true;
      }
      $select.append($option);
    });

    this.$inputs.push($select);
    return $select;
  }

  private _createCheckboxes(): HTMLDivElement {
    const { name, options, value, inputAttrs, label } = this._schema;
    const values = Array.isArray(value) ? value : [];

    const $checkboxGroup = document.createElement('div');
    $checkboxGroup.classList.add(CLASS_NAMES.checkboxGroup);

    const $label = document.createElement('div');
    $label.id = `checkboxes-label-${uniqueId()}`;
    $label.classList.add(CLASS_NAMES.checkboxGroupLabel);
    appendContentToElement($label, label);
    $checkboxGroup.append($label);

    const $items = document.createElement('div');
    $items.setAttribute('aria-describedby', $label.id);
    $items.classList.add(CLASS_NAMES.checkboxGroupItems);
    $checkboxGroup.append($items);

    options.forEach((option) => {
      const { value, label } = EasyFormControl.normalizeOption(option);
      const $checkbox = document.createElement('div');
      $checkbox.classList.add(CLASS_NAMES.checkbox);

      const $input = document.createElement('input');
      setAttributes($input, inputAttrs, ['name', 'value', 'checked']);
      $input.type = 'checkbox';
      $input.name = name;
      $input.value = value;
      $input.checked = values.includes(value);
      $input.id = $input.id || `checkbox-${uniqueId()}`;
      $input.classList.add(CLASS_NAMES.checkboxInput);
      $checkbox.append($input);

      const $label = document.createElement('label');
      $label.classList.add(CLASS_NAMES.checkboxLabel);
      $label.setAttribute('for', $input.id);
      appendContentToElement($label, label);
      $checkbox.append($label);

      this.$inputs.push($input);
      $items.append($checkbox);
    });

    return $checkboxGroup;
  }

  private _createRadioButtons(): HTMLDivElement {
    const {
      name,
      value: selectedValue,
      options,
      inputAttrs,
      label,
    } = this._schema;

    const $radioButtonGroup = document.createElement('div');
    $radioButtonGroup.classList.add(CLASS_NAMES.radioButtonGroup);

    const $label = document.createElement('div');
    $label.id = `radio-buttons-label-${uniqueId()}`;
    $label.classList.add(CLASS_NAMES.radioButtonGroupLabel);
    appendContentToElement($label, label);
    $radioButtonGroup.append($label);

    const $items = document.createElement('div');
    $items.setAttribute('aria-describedby', $label.id);
    $items.classList.add(CLASS_NAMES.radioButtonGroupItems);
    $radioButtonGroup.append($items);

    options.forEach((option) => {
      const { value, label } = EasyFormControl.normalizeOption(option);
      const $radioButton = document.createElement('div');
      $radioButton.classList.add(CLASS_NAMES.radioButton);

      const $input = document.createElement('input');
      setAttributes($input, inputAttrs, ['name', 'value', 'checked']);
      $input.type = 'radio';
      $input.name = name;
      $input.value = value;
      $input.id = $input.id || `radio-button-${uniqueId()}`;
      $input.checked = value === selectedValue;
      $input.classList.add(CLASS_NAMES.radioButtonInput);
      $radioButton.append($input);

      const $label = document.createElement('label');
      $label.classList.add(CLASS_NAMES.radioButtonLabel);
      $label.setAttribute('for', $input.id);
      appendContentToElement($label, label);
      $radioButton.append($label);

      this.$inputs.push($input);
      $items.append($radioButton);
    });

    return $radioButtonGroup;
  }

  displayError(error?: FieldError): void {
    if (error) {
      if (this.$error) {
        appendContentToElement(this.$error, '' + error);
      } else {
        this.$error = document.createElement('small');
        this.$error.classList.add(CLASS_NAMES.formControlError);
        appendContentToElement(this.$error, '' + error);
        this.$element.append(this.$error);
      }
    } else if (this.$error) {
      this.$error.remove();
      delete this.$error;
    }
  }

  getHTMLElement(): HTMLElement {
    return this.$element;
  }
}
