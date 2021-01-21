export interface FormSchema {
  fields: (FieldSchema | FieldSchema[])[];
  submitButton: string;
  formAttrs?: HtmlAttributes;
  onSubmit?: FormSubmitListener;
  onValidationFailed?: FormValidationFailedListener;
  onFieldChange?: FieldChangeListener;
  title?: string | Node;
  header?: string | Node;
  footer?: string | Node;
  footnote?: string | Node;
}

export interface FieldSchema {
  name: string;
  type?:
    | 'checkbox'
    | 'color'
    | 'date'
    | 'email'
    | 'hidden'
    | 'month'
    | 'number'
    | 'password'
    | 'range'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | 'checkboxes'
    | 'radio-buttons'
    | 'textarea'
    | 'select';
  value?: FieldValue;
  checked?: boolean;
  options?: FieldOption[];
  label?: string;
  helpText?: string;
  inputAttrs?: HtmlAttributes;
  validators?: FieldValidator[];
}

export type NormalizedFieldSchema = {
  [K in keyof FieldSchema]-?: FieldSchema[K];
};

export type FieldOption =
  | string
  | number
  | { value: string | number; label?: string };

export interface NormalizedFieldOption {
  value: string;
  label: string;
}

export interface HtmlAttributes {
  id?: string;
  className?: string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  [attr: string]: string | number | boolean | undefined;
}

export interface FormControl {
  isDisabled: boolean;
  isReadOnly: boolean;
  displayError(error: FieldError): void;
  getHTMLElement(): HTMLElement;
}

export interface Form {
  isDisabled: boolean;
  isSubmitting: boolean;
  submit(): void;
}

export type FormSubmitListener = (
  formValues: Record<string, FieldValue>,
  form: Form
) => void;
export type FormValidationFailedListener = (
  formErrors: Record<string, FieldError>
) => void;

export type FieldValue = boolean | number | string | (number | string)[];
export type FieldChangeListener = (field: string, value: FieldValue) => void;
export type FieldBlurListener = (field: string) => void;

export type FieldError = Error | string | null | undefined;
export type FieldValidator = (
  value: FieldValue,
  formValues: Record<string, FieldValue>
) => FieldError;
