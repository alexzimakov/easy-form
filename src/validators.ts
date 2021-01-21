import type { FieldValidator, FieldValue } from './types';
import type validator from 'validator';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import isFloat from 'validator/lib/isFloat';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isIn from 'validator/lib/isIn';
import isInt from 'validator/lib/isInt';
import isURL from 'validator/lib/isURL';

export class Validators {
  /**
   * Compose multiple validators into a single function that returns the first
   * validation error in the validators chain.
   */
  static compose(
    validators?: (FieldValidator | null | undefined)[] | null
  ): FieldValidator | undefined {
    if (!Array.isArray(validators) || !validators.length) {
      return;
    }

    return (value, formValues) => {
      for (const validate of validators) {
        const fieldError =
          typeof validate === 'function'
            ? validate(value, formValues)
            : undefined;

        if (fieldError) {
          return fieldError;
        }
      }
    };
  }

  static createValidator(validate: FieldValidator): FieldValidator {
    return (value, formValues) => {
      // Do not validate empty values to allow optional fields.
      if (isValueEmpty(value)) {
        return;
      }
      return validate(toString(value), formValues);
    };
  }

  // Wrappers around https://github.com/validatorjs/validator.js

  static isRequired(
    message = 'The field can not be empty.',
    options?: validator.IsEmptyOptions
  ): FieldValidator {
    return (value) => {
      if (isValueEmpty(value) || isEmpty(toString(value), options)) {
        return message;
      }
    };
  }

  static isAlphanumeric(
    message = 'Must be a alphanumeric string.',
    locale?: validator.AlphanumericLocale
  ): FieldValidator {
    return Validators.createValidator((value) => {
      return isAlphanumeric(toString(value), locale) ? undefined : message;
    });
  }

  static isEmail(
    message = 'Must be a valid email.',
    options?: validator.IsEmailOptions
  ): FieldValidator {
    return Validators.createValidator((value) => {
      return isEmail(toString(value), options) ? undefined : message;
    });
  }

  static isMobilePhone(
    message = 'Must be a valid phone number.',
    options?: validator.IsMobilePhoneOptions,
    locale?: validator.MobilePhoneLocale
  ): FieldValidator {
    return Validators.createValidator((value) => {
      return isMobilePhone(toString(value), locale, options)
        ? undefined
        : message;
    });
  }

  static isFloat(
    message = 'Must be a valid float number.',
    options?: validator.IsFloatOptions
  ): FieldValidator {
    return Validators.createValidator((value) => {
      return isFloat(toString(value), options) ? undefined : message;
    });
  }

  static isInt(
    message = 'Must be a valid integer.',
    options?: validator.IsIntOptions
  ): FieldValidator {
    return Validators.createValidator((value) => {
      return isInt(toString(value), options) ? undefined : message;
    });
  }

  static isIn(
    values: string[],
    message = `Must be one of ${values.join(', ')}`
  ): FieldValidator {
    return Validators.createValidator((value) => {
      return isIn(toString(value), values) ? undefined : message;
    });
  }

  static isURL(
    message = 'Must be a valid URL.',
    options?: validator.IsURLOptions
  ): FieldValidator {
    return Validators.createValidator((value) => {
      return isURL(toString(value), options) ? undefined : message;
    });
  }
}

function toString(value: FieldValue): string {
  return value != null ? '' + value : '';
}

function isValueEmpty(value: FieldValue): boolean {
  return (
    value == null ||
    ((Array.isArray(value) || typeof value === 'string') && !value.length)
  );
}
