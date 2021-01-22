# [EasyForm](https://alexzimakov.github.io/easy-form/)

EasyForm - простой JS скрипт для создания форм на основе декларативной схемы.

## Начало работы

Добавьте пустой тег `div` в месте, где вы хотите отобразить форму. Назначьте ему
уникальный `id`, чтобы потом легко найти его из JavaScript.

```html
<!-- ... остальной HTML ... -->

<div id="easy-form-container"></div>

<!-- ... остальной HTML ... -->
```

Подключите скомпилированные файлы из [/easy-form/dist/](https://github.com/alexzimakov/easy-form/tree/master/dist)
на сайт и создайте форму с помощью JavaScript класса EasyForm:

```html
  <!-- ... остальной HTML ... -->

  <!-- Загружаем EasyForm -->
  <script src="js/easy-form.min.js"></script>

  <!-- Создаём форму -->
  <script>
    const subscriptionForm = new EasyForm(
      {
        fields: [
          [
            { name: 'firstName', label: 'Имя' },
            { name: 'lastName', label: 'Фамилия' },
          ]
          {
            type: 'email',
            name: 'email',
            label: 'Email адрес',
            inputAttrs: { placeholder: 'e.g. john.doe@example.com' },
            validators: [EasyForm.Validators.isEmail('Введите правильный email')]
          }
        ],
        submitButton: 'Подписаться',
        onSubmit: (formValues, form) => {
          form.isSubmitting = true;
          // Отправляем данные на сервер
          form.isSubmitting = false;
        },
      },
      document.getElementById('easy-form-container')
    );
  </script>

</body>
```

Приведённый выше код создаст форму внутри тега `<div id="easy-form-container"></div>`.
**Перед созданием формы содержимое тега очищается, поэтому в качестве контейнера
лучше использовать пустой тег.**

Для стилизации формы можно использовать стили из [/easy-form/docs/css/](https://github.com/alexzimakov/easy-form/tree/master/docs/css)
или добавить свои собственные - [список используемых CSS классов](https://github.com/alexzimakov/easy-form/blob/master/src/class-names.ts).

## API

```js
const formObject = new EasyForm(
  {
    fields,
    submitButton,
    formAttrs,
    onSubmit,
    onValidationFailed,
    onFieldChange,
    title,
    header,
    footer,
    footnote,
  },
  root
);
```

### EasyForm

#### Свойства

- `fields: FieldSchema | FieldSchema[]` - описание полей формы.
  - **Обязательное свойство**
- `submitButton: string` - текст кнопки отправки формы.
- `formAttrs: object` - HTML-атрибуты для тега `<form></form>`.
- `onSubmit: (formValues: object, formObject: EasyForm) => void` - колбэк, который будет вызван при отправке формы. Обычно в этом методе находится логика обратки формы, например отправка данных на сервер.
  - `formValues` - значения полей формы.
  - `formObject` - объект EasyForm.
- `onValidationFailed: (formErrors: object) => void` - колбэк, который будет вызван, когда форма не прошла валидацию.
  - `formErrors` - объект, где ключи - это названия полей, а значения - связанные с ними ошибки.
- `onFieldChange: (name: string, value: string | string[]) => void` - колбэк-функция, которая вызывается при изменении значения поля.
  - `name` - название поля.
  - `value` - значение поля.
- `title: string | Node` - заголовок формы.
- `header: string | Node` - текст, который отображается перед формой.
- `footnote: string | Node` - текст, который отображается перед кнопкой отправки формы.
- `footer: string | Node` - текст, который отображается после кнопкой отправки формы.
- `root: HTMLElement` - HTML-элемент, в котором будет отображаться форма.
  - **Обязательный аргумент**

#### `formObject`

- `isDisabled: boolean` - флаг, который обозначает, что форма заблокирована.
- `isSubmitting: boolean` - флаг, который обозначает, что происходит отправка формы. Когда значение `true`:
  - Форму нельзя отправить.
  - Нельзя изменить значения полей формы.
- `submit: () => void` - метод, который позволяет отправить форму программно.

### FieldSchema

Объект, для описания поля формы.

```js
const field = {
  name,
  type,
  value,
  checked,
  options,
  label,
  helpText,
  inputAttrs,
  validators,
};
```

#### Свойства

- `name: string` - название поля. Используется как ключ в объекте значений формы.
  - **Обязательное свойство**
- `type: 'checkbox' | 'color' | 'date' | 'email' | 'hidden' | 'month' | 'number' | 'password' | 'range' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week' | 'checkboxes' | 'radio-buttons' | 'textarea' | 'select'` - тип поля.
  - `select` - HTML `<select />` элемент.
  - `textarea` - HTML `<textarea />` элемент.
  - `checkboxes` и `radio-buttons` - Группа из `<input type="checkbox" />` и `<input type="radio" />` соответственно.
- `value: number | string | (number | string)[]` - значение поля по умолчанию.
- `checked: boolean` - значение по умолчанию для поля с типом `checkbox`.
- `options: (string | { value: string, label: string })[]` - список опций для полей, которые имеют тип `select`, `checkboxes` или `radio-buttons`.
- `label: string` - Метка поля, которую видит пользователь.
- `helpText: string` - Вспомогательный текст, который отображается под полем.
- `inputAttrs: object` - HTML-атрибуты для тега `<input />`, `<select />` и `<textarea />`.
- `validators: ((value: string | string[], formValues: object) => Error | string | null | undefined)[]` - Массив валидаторов для поля.
  - Валидатор - это функция, которая первым аргументом принимает значение поля, а втором - значения формы, и возвращает ошибку, если поле имеет неверное значение.

### `EasyForm.Validators`

Большинство валидаторв это обёртки над [validator.js](https://github.com/validatorjs/validator.js/)

- `isRequired` - проверяет, заполнено ли поле.
- `isAlphanumeric` - значение поля должно содержать только буквы латинского алфавита и цифры.
- `isEmail` - значение поля должно быть корректным email адресом.
- `isMobilePhone` - значение поля должно быть корректным номером телефона.
- `isFloat` - значение поля должно быть корректным числом.
- `isInt` - значение поля должно быть корректным целым числом.
- `isIn` - значение поля может быть одним из перечисленных значений.
- `isURL` - значение поля должно быть корректным URL.
