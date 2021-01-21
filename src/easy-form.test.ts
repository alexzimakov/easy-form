import {
  getByLabelText,
  getByTestId,
  getByText,
  fireEvent,
  getByRole,
} from '@testing-library/dom';
import { EasyForm } from './easy-form';

it('render error when schema is invalid', () => {
  const $root = document.createElement('div');
  new EasyForm(
    {
      // @ts-ignore
      fields: { firstName: { name: 'firstName', label: 'First Name' } },
      submitButton: 'Submit',
    },
    $root
  );

  expect($root).toHaveTextContent(
    'EasyForm error: `fields` property of form schema must be a non-empty ' +
      'array of objects.'
  );
});

it('renders without error', () => {
  const $root = document.createElement('div');
  new EasyForm(
    {
      fields: [
        [
          { name: 'text1', label: 'Text Field 1' },
          { name: 'text2', label: 'Text Field 2' },
        ],
        { name: 'text3', label: 'Text Field 3' },
        {
          type: 'select',
          name: 'select',
          options: ['Option 1', 'Option 2'],
          label: 'Select Field',
        },
        { type: 'textarea', name: 'textarea', label: 'Textarea' },
        {
          type: 'checkboxes',
          name: 'checkboxes',
          options: ['Checkbox 1', 'Checkbox 2'],
          label: 'Checkboxes',
        },
        {
          type: 'radio-buttons',
          name: 'radioButtons',
          options: ['Radio Button 1', 'Radio Button 2'],
          label: 'Radio Buttons',
        },
      ],
      submitButton: 'Submit',
      title: 'Test form title',
      header: 'Test form header',
      footer: 'Test form footer',
      footnote: 'Test form footnote',
    },
    $root
  );

  getByLabelText($root, 'Text Field 1');
  getByLabelText($root, 'Text Field 2');
  getByLabelText($root, 'Text Field 3');
  getByLabelText($root, 'Select Field');
  getByLabelText($root, 'Textarea');
  getByLabelText($root, 'Checkbox 1');
  getByLabelText($root, 'Checkbox 2');
  getByLabelText($root, 'Radio Button 1');
  getByLabelText($root, 'Radio Button 2');
  getByText($root, 'Test form title');
  getByText($root, 'Test form header');
  getByText($root, 'Test form footer');
  getByText($root, 'Test form footnote');
  expect(getByRole($root, 'button')).toHaveTextContent('Submit');
});

it('should submit the form with entered values', () => {
  const $root = document.createElement('div');
  const formValues = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@test.local',
    phone: '+18143002211',
    country: 'US',
    about: 'Easy form test',
    emailNotifications: ['Comments', 'Offers'],
    pushNotifications: 'all',
  };
  const onSubmit = jest.fn();
  const easyForm = new EasyForm(
    {
      fields: [
        [
          { name: 'firstName', label: 'First Name' },
          { name: 'lastName', label: 'Last Name' },
        ],
        { type: 'email', name: 'email', label: 'Email address' },
        { type: 'tel', name: 'phone', label: 'Phone number' },
        {
          type: 'select',
          name: 'country',
          options: [
            { value: 'GB', label: 'United Kingdom' },
            { value: 'IT', label: 'Italy' },
            { value: 'JP', label: 'Japan' },
            { value: 'MO', label: 'Macao' },
            { value: 'RU', label: 'Russian Federation' },
            { value: 'SZ', label: 'Swaziland' },
            { value: 'TH', label: 'Thailand' },
            { value: 'UA', label: 'Ukraine' },
            { value: 'US', label: 'United States' },
          ],
          label: 'Country / Region',
        },
        {
          type: 'textarea',
          name: 'about',
          label: 'About',
          helpText: 'Brief description for your profile.',
        },
        {
          type: 'checkboxes',
          name: 'emailNotifications',
          options: ['Comments', 'Candidates', 'Offers'],
          label: 'Email notifications',
        },
        {
          type: 'radio-buttons',
          name: 'pushNotifications',
          options: [
            { value: 'all', label: 'Everything' },
            { value: 'email', label: 'Same as email' },
            { value: 'off', label: 'No push notifications' },
          ],
          value: 'email',
          label: 'Push Notifications',
        },
      ],
      submitButton: 'Save',
      formAttrs: { 'data-testid': 'easy-form' },
      onSubmit,
    },
    $root
  );

  fireEvent.change(getByLabelText($root, 'First Name'), {
    target: { value: formValues.firstName },
  });
  fireEvent.change(getByLabelText($root, 'Last Name'), {
    target: { value: formValues.lastName },
  });
  fireEvent.change(getByLabelText($root, 'Email address'), {
    target: { value: formValues.email },
  });
  fireEvent.change(getByLabelText($root, 'Phone number'), {
    target: { value: formValues.phone },
  });
  fireEvent.change(getByLabelText($root, 'Country / Region'), {
    target: { value: formValues.country },
  });
  fireEvent.change(getByLabelText($root, 'About'), {
    target: { value: formValues.about },
  });
  fireEvent.click(getByLabelText($root, 'Comments'));
  fireEvent.click(getByLabelText($root, 'Offers'));
  fireEvent.click(getByLabelText($root, 'Everything'));
  fireEvent.submit(getByTestId($root, 'easy-form'));

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith(formValues, easyForm);
});

it('should not submit when the form is invalid', () => {
  const Validators = EasyForm.Validators;
  const $root = document.createElement('div');
  const errors = {
    fullName: 'Enter full name',
    username: 'Invalid username',
    email: 'Invalid email address',
    phone: 'Invalid phone number',
  };
  const onSubmit = jest.fn();
  const onValidationFailed = jest.fn();
  new EasyForm(
    {
      fields: [
        {
          name: 'fullName',
          label: 'Full Name',
          validators: [Validators.isRequired(errors.fullName)],
        },
        {
          name: 'username',
          label: 'Username',
          validators: [Validators.isAlphanumeric(errors.username)],
        },
        {
          type: 'email',
          name: 'email',
          label: 'Email address',
          validators: [Validators.isEmail(errors.email)],
        },
        {
          type: 'tel',
          name: 'phone',
          label: 'Phone number',
          validators: [Validators.isMobilePhone(errors.phone)],
        },
      ],
      submitButton: 'Save',
      formAttrs: { 'data-testid': 'easy-form' },
      onSubmit,
      onValidationFailed,
    },
    $root
  );

  fireEvent.change(getByLabelText($root, 'Username'), {
    target: { value: 'John Doe' },
  });
  fireEvent.change(getByLabelText($root, 'Email address'), {
    target: { value: 'john.doe@localtest' },
  });
  fireEvent.change(getByLabelText($root, 'Phone number'), {
    target: { value: '12345' },
  });
  fireEvent.submit(getByTestId($root, 'easy-form'));

  expect(onSubmit).not.toHaveBeenCalled();
  expect(onValidationFailed).toHaveBeenCalledTimes(1);
  expect(onValidationFailed).toHaveBeenCalledWith(errors);
});
