import type { FormSchema, FieldSchema } from './types';

export function checkFormSchema(formSchema: FormSchema): void {
  checkFormFields(formSchema.fields);
}

export function checkFormFields(fields: FormSchema['fields']): void {
  if (!Array.isArray(fields)) {
    throw new Error(
      'EasyForm error: `fields` property of form schema must be a non-empty ' +
        'array of objects.'
    );
  }

  fields.forEach((fieldOrFieldsGroup) => {
    if (Array.isArray(fieldOrFieldsGroup)) {
      checkFormFields(fieldOrFieldsGroup);
    } else {
      checkFieldSchema(fieldOrFieldsGroup);
    }
  });
}

export function checkFieldSchema(schema: FieldSchema): void {
  if (!schema || typeof schema !== 'object' || !schema.name) {
    throw new Error(
      'EasyForm error: field schema must be an object with the required ' +
        '`name` property.'
    );
  }

  if (
    schema.type &&
    ['select', 'checkboxes', 'radio-buttons'].includes(schema.type)
  ) {
    if (schema.options) {
      checkFieldOptions(schema.options);
    } else {
      throw new Error(
        `EasyForm error: you'd defined field type as \`${schema.type}\` but ` +
          'have forgotten to pass the `options` property.'
      );
    }
  }

  if (schema.validators != null) {
    checkFieldValidators(schema.validators);
  }

  if (schema.value != null) {
    if (
      schema.type === 'checkboxes' &&
      (!Array.isArray(schema.value) ||
        schema.value.some((value) => !isFieldValueValid(value)))
    ) {
      throw new Error(
        `EasyForm error: field with "${schema.name}" name has invalid value; ` +
          'it must be an array of strings or numbers.'
      );
    } else if (!isFieldValueValid(schema.value)) {
      throw new Error(
        `EasyForm error: field with "${schema.name}" name has invalid value; ` +
          'it must be a string or number.'
      );
    }
  }
}

export function checkFieldOptions(options: FieldSchema['options']): void {
  if (!Array.isArray(options) || !options.length) {
    throw new Error(
      'EasyForm error: `options` property must be a non-empty array.'
    );
  }

  const isOptionValueValid = (v: unknown): v is string | number => {
    return typeof v === 'string' || typeof v === 'number';
  };
  if (
    !options.every((option) => {
      return isOptionValueValid(option) || isOptionValueValid(option?.value);
    })
  ) {
    throw new Error(
      'EasyForm error: every option must be a string or an object with ' +
        'required `value` property.'
    );
  }
}

export function checkFieldValidators(
  validators: FieldSchema['validators']
): void {
  if (!Array.isArray(validators)) {
    throw new Error(
      'EasyForm error: `validators` property must be an array of functions.'
    );
  }

  if (validators.some((validator) => typeof validator !== 'function')) {
    throw new Error(
      'EasyForm error: every validator must be a function that return an ' +
        'Error` or `string` when the field has an invalid value or `null` ' +
        'or `undefined` otherwise.'
    );
  }
}

function isFieldValueValid(value: FieldSchema['value']): boolean {
  return ['string', 'number'].includes(typeof value);
}
