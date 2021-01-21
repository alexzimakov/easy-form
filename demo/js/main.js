(function () {
  var EasyForm = window.EasyForm;
  var Validators = EasyForm.Validators;
  window.easyForm = new EasyForm(
    {
      fields: [
        [
          {
            name: 'firstName',
            label: 'First Name',
            validators: [Validators.isRequired('Enter first name')],
          },
          {
            name: 'lastName',
            label: 'Last Name',
            validators: [Validators.isRequired('Enter last name')],
          },
        ],
        {
          type: 'email',
          name: 'email',
          label: 'Email address',
          validators: [
            Validators.isRequired('Enter email address'),
            Validators.isEmail('Invalid email address'),
          ],
        },
        {
          type: 'tel',
          name: 'phone',
          label: 'Phone number',
          validators: [Validators.isMobilePhone('Invalid phone number')],
        },
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
          value: 'US',
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
      onSubmit: function onSubmit(formValues) {
        alert(JSON.stringify(formValues, null, 4));
      },
      formAttrs: { id: 'easy-form', action: '/', method: 'GET' },
      title: 'Profile',
      header:
        'This information will be displayed publicly so be careful what you ' +
        'share.',
      footnote: 'By clicking Save, you agree to our Terms & Data Policy.',
    },
    document.getElementById('root')
  );
})();
