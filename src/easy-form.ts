import type {
  FormSchema,
  NormalizedFieldSchema,
  FieldSchema,
  FieldValue,
  FieldError,
  FieldValidator,
  FormControl,
  Form,
} from './types';
import { CLASS_NAMES } from './class-names';
import { Validators } from './validators';
import { EasyFormControl } from './easy-form-control';
import { checkFormSchema } from './check-form-schema';
import { appendContentToElement, setAttributes } from './utils';

export class EasyForm implements Form {
  static Validators = Validators;
  static EasyFormField = EasyFormControl;

  private _fields: Record<string, FormControl> = {};
  private _values: Record<string, FieldValue> = {};
  private _errors: Record<string, FieldError> = {};
  private _validators: Record<string, FieldValidator | undefined> = {};
  private _isDisabled = false;
  private _isSubmitting = false;
  private $form?: HTMLFormElement;
  private $submitButton?: HTMLButtonElement;

  constructor(
    private readonly _schema: FormSchema,
    private readonly _root: HTMLElement
  ) {
    let rooChild: HTMLElement;
    try {
      checkFormSchema(_schema);
      rooChild = this._createForm();
      this._addEventListeners();
    } catch (e) {
      rooChild = EasyForm.createError(e);
    }
    this._root.innerHTML = '';
    this._root.append(rooChild);
  }

  static normalizeFieldSchema(schema: FieldSchema): NormalizedFieldSchema {
    let value: string | string[];
    if (Array.isArray(schema.value)) {
      value = schema.value.map(String);
    } else if (schema.value) {
      value = '' + schema.value;
    } else {
      value = schema.type === 'checkboxes' ? [] : '';
    }
    return {
      name: schema.name,
      type: schema.type || 'text',
      value,
      label: schema.label ?? '',
      helpText: schema.helpText ?? '',
      checked: !!schema.checked,
      inputAttrs:
        schema.inputAttrs && typeof schema.inputAttrs === 'object'
          ? schema.inputAttrs
          : {},
      options: Array.isArray(schema.options) ? schema.options : [],
      validators: Array.isArray(schema.validators) ? schema.validators : [],
    };
  }

  static createError(error: Error): HTMLElement {
    const $error = document.createElement('small');
    $error.style.color = '#dc2626';
    $error.style.fontFamily = 'Consolas, Menlo, monospace';
    $error.classList.add(CLASS_NAMES.error);
    appendContentToElement($error, error.message);
    return $error;
  }

  get isDisabled(): boolean {
    return this._isDisabled;
  }
  set isDisabled(value: boolean) {
    this._isDisabled = value;

    Object.values(this._fields).forEach(
      ($field) => ($field.isDisabled = value)
    );
  }

  get isSubmitting(): boolean {
    return this._isSubmitting;
  }
  set isSubmitting(value: boolean) {
    this._isSubmitting = value;

    Object.values(this._fields).forEach(
      ($field) => ($field.isReadOnly = value)
    );

    if (value) {
      this.$submitButton?.setAttribute('disabled', 'true');
      this.$submitButton?.classList.add(CLASS_NAMES.buttonLoading);
    } else {
      this.$submitButton?.removeAttribute('disabled');
      this.$submitButton?.classList.remove(CLASS_NAMES.buttonLoading);
    }
  }

  submit(): void {
    this.$form?.submit();
  }

  validateField(fieldName: string): void {
    const values = this._values;
    const validate = this._validators[fieldName];
    if (typeof validate === 'function') {
      const fieldError = validate(values[fieldName], values);
      this._errors[fieldName] = fieldError;
      this._fields[fieldName].displayError(fieldError);
    }
  }

  validate(): boolean {
    Object.keys(this._fields).forEach((fieldName) => {
      this.validateField(fieldName);
    });
    return !Object.values(this._errors).some(Boolean);
  }

  private _addEventListeners(): void {
    this.$form?.addEventListener('submit', (event) => {
      const { onSubmit, onValidationFailed } = this._schema;
      const isFormValid = this.validate();
      if (isFormValid) {
        if (typeof onSubmit === 'function') {
          event.preventDefault();
          onSubmit(this._values, this);
        }
      } else {
        event.preventDefault();

        if (typeof onValidationFailed === 'function') {
          onValidationFailed(this._errors);
        }
      }
    });
  }

  private _createForm(): HTMLElement {
    const {
      fields,
      submitButton,
      formAttrs,
      title,
      header,
      footnote,
      footer,
    } = this._schema;

    const $container = document.createElement('section');
    $container.classList.add(CLASS_NAMES.container);

    if (title) {
      const $title = document.createElement('h2');
      $title.classList.add(CLASS_NAMES.containerTitle);
      appendContentToElement($title, title);
      $container.append($title);
    }

    if (header) {
      const $header = document.createElement('header');
      $header.classList.add(CLASS_NAMES.containerHeader);
      appendContentToElement($header, header);
      $container.append($header);
    }

    const $form = document.createElement('form');
    setAttributes($form, formAttrs || {});
    $form.classList.add(CLASS_NAMES.form);
    $container.append($form);
    this.$form = $form;

    const $fields = this._createFields(fields);
    $fields.forEach(($field) => {
      $field.classList.add(CLASS_NAMES.formField);
      $form.append($field);
    });

    if (footnote) {
      const $footnote = document.createElement('div');
      $footnote.classList.add(CLASS_NAMES.formFootnote);
      appendContentToElement($footnote, footnote);
      $form.append($footnote);
    }

    const $submitButton = document.createElement('button');
    $submitButton.classList.add(
      CLASS_NAMES.button,
      CLASS_NAMES.formSubmitButton
    );
    $submitButton.setAttribute('type', 'submit');
    appendContentToElement($submitButton, submitButton);
    $form.append($submitButton);
    this.$submitButton = $submitButton;

    if (footer) {
      const $footer = document.createElement('footer');
      $footer.classList.add(CLASS_NAMES.containerFooter);
      appendContentToElement($footer, footer);
      $container.append($footer);
    }

    return $container;
  }

  private _createFields(fields: FormSchema['fields']): HTMLElement[] {
    return fields.map((unsafeFieldSchema) => {
      if (Array.isArray(unsafeFieldSchema)) {
        return this._createFieldGroup(this._createFields(unsafeFieldSchema));
      } else {
        return this._createField(unsafeFieldSchema);
      }
    });
  }

  private _createField(schema: FieldSchema): HTMLElement {
    const fieldSchema = EasyForm.normalizeFieldSchema(schema);
    this._values[fieldSchema.name] =
      fieldSchema.type === 'checkbox' ? fieldSchema.checked : fieldSchema.value;
    this._validators[fieldSchema.name] = Validators.compose(
      fieldSchema.validators
    );

    const field = new EasyFormControl(
      fieldSchema,
      (fieldName, value) => {
        this._values[fieldName] = value;
      },
      (fieldName) => {
        this.validateField(fieldName);
      }
    );
    this._fields[fieldSchema.name] = field;

    return field.getHTMLElement();
  }

  private _createFieldGroup($fields: HTMLElement[]): HTMLElement {
    const $fieldGroup = document.createElement('div');
    $fieldGroup.classList.add(
      CLASS_NAMES.formGroup,
      CLASS_NAMES.formGroupItemsModifier($fields.length)
    );
    $fields.forEach(($field) => {
      $field.classList.add(CLASS_NAMES.formGroupItem);
      $fieldGroup.appendChild($field);
    });

    return $fieldGroup;
  }
}
