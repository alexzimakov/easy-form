export const PREFIX = 'efc';

export const CLASS_NAMES = {
  container: `${PREFIX}-container`,
  containerTitle: `${PREFIX}-container__title`,
  containerHeader: `${PREFIX}-container__header`,
  containerFooter: `${PREFIX}-container__footer`,
  error: `${PREFIX}-error`,
  button: `${PREFIX}-button`,
  buttonSecondary: `${PREFIX}-button_secondary`,
  buttonLoading: `${PREFIX}-button_is-loading`,
  form: `${PREFIX}-form`,
  formField: `${PREFIX}-form__field`,
  formFootnote: `${PREFIX}-form__footnote`,
  formSubmitButton: `${PREFIX}-form__submit-button`,
  formGroup: `${PREFIX}-form-group`,
  formGroupItem: `${PREFIX}-form-group__item`,
  formGroupItemsModifier: (items: number): string => {
    return `${PREFIX}-form-group_items_${items}`;
  },
  formControl: `${PREFIX}-form-control`,
  formControlField: `${PREFIX}-form-control__field`,
  formControlHelpText: `${PREFIX}-form-control__help-text`,
  formControlError: `${PREFIX}-form-control__error`,
  field: `${PREFIX}-field`,
  fieldTypeModifier: (type: string): string => {
    return `${PREFIX}-field_type_${type}`;
  },
  fieldLabel: `${PREFIX}-field__label`,
  fieldInput: `${PREFIX}-field__input`,
  input: `${PREFIX}-input`,
  inputTypeModifier: (type: string): string => {
    return `${PREFIX}-input_type_${type}`;
  },
  textarea: `${PREFIX}-textarea`,
  select: `${PREFIX}-select`,
  checkboxGroup: `${PREFIX}-checkbox-group`,
  checkboxGroupItems: `${PREFIX}-checkbox-group__items`,
  checkboxGroupLabel: `${PREFIX}-checkbox-group__label`,
  checkbox: `${PREFIX}-checkbox`,
  checkboxLabel: `${PREFIX}-checkbox__label`,
  checkboxInput: `${PREFIX}-checkbox__input`,
  radioButtonGroup: `${PREFIX}-radio-button-group`,
  radioButtonGroupItems: `${PREFIX}-radio-button-group__items`,
  radioButtonGroupLabel: `${PREFIX}-radio-button-group__label`,
  radioButton: `${PREFIX}-radio-button`,
  radioButtonLabel: `${PREFIX}-radio-button__label`,
  radioButtonInput: `${PREFIX}-radio-button__input`,
};
