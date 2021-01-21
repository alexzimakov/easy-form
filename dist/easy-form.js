var EasyForm = (function () {
    'use strict';

    var PREFIX = 'efc';
    var CLASS_NAMES = {
        container: PREFIX + "-container",
        containerTitle: PREFIX + "-container__title",
        containerHeader: PREFIX + "-container__header",
        containerFooter: PREFIX + "-container__footer",
        error: PREFIX + "-error",
        button: PREFIX + "-button",
        buttonSecondary: PREFIX + "-button_secondary",
        buttonLoading: PREFIX + "-button_is-loading",
        form: PREFIX + "-form",
        formField: PREFIX + "-form__field",
        formFootnote: PREFIX + "-form__footnote",
        formSubmitButton: PREFIX + "-form__submit-button",
        formGroup: PREFIX + "-form-group",
        formGroupItem: PREFIX + "-form-group__item",
        formGroupItemsModifier: function (items) {
            return PREFIX + "-form-group_items_" + items;
        },
        formControl: PREFIX + "-form-control",
        formControlField: PREFIX + "-form-control__field",
        formControlHelpText: PREFIX + "-form-control__help-text",
        formControlError: PREFIX + "-form-control__error",
        field: PREFIX + "-field",
        fieldTypeModifier: function (type) {
            return PREFIX + "-field_type_" + type;
        },
        fieldLabel: PREFIX + "-field__label",
        fieldInput: PREFIX + "-field__input",
        input: PREFIX + "-input",
        inputTypeModifier: function (type) {
            return PREFIX + "-input_type_" + type;
        },
        textarea: PREFIX + "-textarea",
        select: PREFIX + "-select",
        checkboxGroup: PREFIX + "-checkbox-group",
        checkboxGroupItems: PREFIX + "-checkbox-group__items",
        checkboxGroupLabel: PREFIX + "-checkbox-group__label",
        checkbox: PREFIX + "-checkbox",
        checkboxLabel: PREFIX + "-checkbox__label",
        checkboxInput: PREFIX + "-checkbox__input",
        radioButtonGroup: PREFIX + "-radio-button-group",
        radioButtonGroupItems: PREFIX + "-radio-button-group__items",
        radioButtonGroupLabel: PREFIX + "-radio-button-group__label",
        radioButton: PREFIX + "-radio-button",
        radioButtonLabel: PREFIX + "-radio-button__label",
        radioButtonInput: PREFIX + "-radio-button__input",
    };

    function getDefaultExportFromCjs (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    var assertString_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = assertString;

    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

    function assertString(input) {
      var isString = typeof input === 'string' || input instanceof String;

      if (!isString) {
        var invalidType = _typeof(input);

        if (input === null) invalidType = 'null';else if (invalidType === 'object') invalidType = input.constructor.name;
        throw new TypeError("Expected a string but received a ".concat(invalidType));
      }
    }

    module.exports = exports.default;
    module.exports.default = exports.default;
    });

    var alpha_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.commaDecimal = exports.dotDecimal = exports.farsiLocales = exports.arabicLocales = exports.englishLocales = exports.decimal = exports.alphanumeric = exports.alpha = void 0;
    var alpha = {
      'en-US': /^[A-Z]+$/i,
      'az-AZ': /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
      'bg-BG': /^[А-Я]+$/i,
      'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
      'da-DK': /^[A-ZÆØÅ]+$/i,
      'de-DE': /^[A-ZÄÖÜß]+$/i,
      'el-GR': /^[Α-ώ]+$/i,
      'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
      'fa-IR': /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
      'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
      'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
      'nb-NO': /^[A-ZÆØÅ]+$/i,
      'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
      'nn-NO': /^[A-ZÆØÅ]+$/i,
      'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
      'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
      'pt-PT': /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
      'ru-RU': /^[А-ЯЁ]+$/i,
      'sl-SI': /^[A-ZČĆĐŠŽ]+$/i,
      'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
      'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
      'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
      'sv-SE': /^[A-ZÅÄÖ]+$/i,
      'th-TH': /^[ก-๐\s]+$/i,
      'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
      'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
      'vi-VN': /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
      'ku-IQ': /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
      ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
      he: /^[א-ת]+$/,
      fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i
    };
    exports.alpha = alpha;
    var alphanumeric = {
      'en-US': /^[0-9A-Z]+$/i,
      'az-AZ': /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
      'bg-BG': /^[0-9А-Я]+$/i,
      'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
      'da-DK': /^[0-9A-ZÆØÅ]+$/i,
      'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
      'el-GR': /^[0-9Α-ω]+$/i,
      'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
      'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
      'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
      'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
      'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
      'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
      'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
      'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
      'pt-PT': /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
      'ru-RU': /^[0-9А-ЯЁ]+$/i,
      'sl-SI': /^[0-9A-ZČĆĐŠŽ]+$/i,
      'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
      'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
      'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
      'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
      'th-TH': /^[ก-๙\s]+$/i,
      'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
      'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
      'ku-IQ': /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
      'vi-VN': /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
      ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
      he: /^[0-9א-ת]+$/,
      fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i
    };
    exports.alphanumeric = alphanumeric;
    var decimal = {
      'en-US': '.',
      ar: '٫'
    };
    exports.decimal = decimal;
    var englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];
    exports.englishLocales = englishLocales;

    for (var locale, i = 0; i < englishLocales.length; i++) {
      locale = "en-".concat(englishLocales[i]);
      alpha[locale] = alpha['en-US'];
      alphanumeric[locale] = alphanumeric['en-US'];
      decimal[locale] = decimal['en-US'];
    } // Source: http://www.localeplanet.com/java/


    var arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];
    exports.arabicLocales = arabicLocales;

    for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
      _locale = "ar-".concat(arabicLocales[_i]);
      alpha[_locale] = alpha.ar;
      alphanumeric[_locale] = alphanumeric.ar;
      decimal[_locale] = decimal.ar;
    }

    var farsiLocales = ['IR', 'AF'];
    exports.farsiLocales = farsiLocales;

    for (var _locale2, _i2 = 0; _i2 < farsiLocales.length; _i2++) {
      _locale2 = "fa-".concat(farsiLocales[_i2]);
      alphanumeric[_locale2] = alphanumeric.fa;
      decimal[_locale2] = decimal.ar;
    } // Source: https://en.wikipedia.org/wiki/Decimal_mark


    var dotDecimal = ['ar-EG', 'ar-LB', 'ar-LY'];
    exports.dotDecimal = dotDecimal;
    var commaDecimal = ['bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-ZM', 'es-ES', 'fr-CA', 'fr-FR', 'id-ID', 'it-IT', 'ku-IQ', 'hu-HU', 'nb-NO', 'nn-NO', 'nl-NL', 'pl-PL', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS@latin', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA', 'vi-VN'];
    exports.commaDecimal = commaDecimal;

    for (var _i3 = 0; _i3 < dotDecimal.length; _i3++) {
      decimal[dotDecimal[_i3]] = decimal['en-US'];
    }

    for (var _i4 = 0; _i4 < commaDecimal.length; _i4++) {
      decimal[commaDecimal[_i4]] = ',';
    }

    alpha['fr-CA'] = alpha['fr-FR'];
    alphanumeric['fr-CA'] = alphanumeric['fr-FR'];
    alpha['pt-BR'] = alpha['pt-PT'];
    alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
    decimal['pt-BR'] = decimal['pt-PT']; // see #862

    alpha['pl-Pl'] = alpha['pl-PL'];
    alphanumeric['pl-Pl'] = alphanumeric['pl-PL'];
    decimal['pl-Pl'] = decimal['pl-PL']; // see #1455

    alpha['fa-AF'] = alpha.fa;
    });

    var isAlphanumeric_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAlphanumeric;
    exports.locales = void 0;

    var _assertString = _interopRequireDefault(assertString_1);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function isAlphanumeric(str) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
      (0, _assertString.default)(str);

      if (locale in alpha_1.alphanumeric) {
        return alpha_1.alphanumeric[locale].test(str);
      }

      throw new Error("Invalid locale '".concat(locale, "'"));
    }

    var locales = Object.keys(alpha_1.alphanumeric);
    exports.locales = locales;
    });

    var isAlphanumeric = /*@__PURE__*/getDefaultExportFromCjs(isAlphanumeric_1);

    var merge_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = merge;

    function merge() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var defaults = arguments.length > 1 ? arguments[1] : undefined;

      for (var key in defaults) {
        if (typeof obj[key] === 'undefined') {
          obj[key] = defaults[key];
        }
      }

      return obj;
    }

    module.exports = exports.default;
    module.exports.default = exports.default;
    });

    var isByteLength_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isByteLength;

    var _assertString = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

    /* eslint-disable prefer-rest-params */
    function isByteLength(str, options) {
      (0, _assertString.default)(str);
      var min;
      var max;

      if (_typeof(options) === 'object') {
        min = options.min || 0;
        max = options.max;
      } else {
        // backwards compatibility: isByteLength(str, min [, max])
        min = arguments[1];
        max = arguments[2];
      }

      var len = encodeURI(str).split(/%..|./).length - 1;
      return len >= min && (typeof max === 'undefined' || len <= max);
    }

    module.exports = exports.default;
    module.exports.default = exports.default;
    });

    var isFQDN_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isFQDN;

    var _assertString = _interopRequireDefault(assertString_1);

    var _merge = _interopRequireDefault(merge_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var default_fqdn_options = {
      require_tld: true,
      allow_underscores: false,
      allow_trailing_dot: false,
      allow_numeric_tld: false
    };

    function isFQDN(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, default_fqdn_options);
      /* Remove the optional trailing dot before checking validity */

      if (options.allow_trailing_dot && str[str.length - 1] === '.') {
        str = str.substring(0, str.length - 1);
      }

      var parts = str.split('.');
      var tld = parts[parts.length - 1];

      if (options.require_tld) {
        // disallow fqdns without tld
        if (parts.length < 2) {
          return false;
        }

        if (!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
          return false;
        } // disallow spaces && special characers


        if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(tld)) {
          return false;
        }
      } // reject numeric TLDs


      if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
        return false;
      }

      return parts.every(function (part) {
        if (part.length > 63) {
          return false;
        }

        if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
          return false;
        } // disallow full-width chars


        if (/[\uff01-\uff5e]/.test(part)) {
          return false;
        } // disallow parts starting or ending with hyphen


        if (/^-|-$/.test(part)) {
          return false;
        }

        if (!options.allow_underscores && /_/.test(part)) {
          return false;
        }

        return true;
      });
    }

    module.exports = exports.default;
    module.exports.default = exports.default;
    });

    var isIP_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIP;

    var _assertString = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
    11.3.  Examples

       The following addresses

                 fe80::1234 (on the 1st link of the node)
                 ff02::5678 (on the 5th link of the node)
                 ff08::9abc (on the 10th organization of the node)

       would be represented as follows:

                 fe80::1234%1
                 ff02::5678%5
                 ff08::9abc%10

       (Here we assume a natural translation from a zone index to the
       <zone_id> part, where the Nth zone of any scope is translated into
       "N".)

       If we use interface names as <zone_id>, those addresses could also be
       represented as follows:

                fe80::1234%ne0
                ff02::5678%pvc1.3
                ff08::9abc%interface10

       where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
       to the 5th link, and "interface10" belongs to the 10th organization.
     * * */
    var ipv4Maybe = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
    var ipv6Block = /^[0-9A-F]{1,4}$/i;

    function isIP(str) {
      var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      (0, _assertString.default)(str);
      version = String(version);

      if (!version) {
        return isIP(str, 4) || isIP(str, 6);
      } else if (version === '4') {
        if (!ipv4Maybe.test(str)) {
          return false;
        }

        var parts = str.split('.').sort(function (a, b) {
          return a - b;
        });
        return parts[3] <= 255;
      } else if (version === '6') {
        var addressAndZone = [str]; // ipv6 addresses could have scoped architecture
        // according to https://tools.ietf.org/html/rfc4007#section-11

        if (str.includes('%')) {
          addressAndZone = str.split('%');

          if (addressAndZone.length !== 2) {
            // it must be just two parts
            return false;
          }

          if (!addressAndZone[0].includes(':')) {
            // the first part must be the address
            return false;
          }

          if (addressAndZone[1] === '') {
            // the second part must not be empty
            return false;
          }
        }

        var blocks = addressAndZone[0].split(':');
        var foundOmissionBlock = false; // marker to indicate ::
        // At least some OS accept the last 32 bits of an IPv6 address
        // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
        // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
        // and '::a.b.c.d' is deprecated, but also valid.

        var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
        var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

        if (blocks.length > expectedNumberOfBlocks) {
          return false;
        } // initial or final ::


        if (str === '::') {
          return true;
        } else if (str.substr(0, 2) === '::') {
          blocks.shift();
          blocks.shift();
          foundOmissionBlock = true;
        } else if (str.substr(str.length - 2) === '::') {
          blocks.pop();
          blocks.pop();
          foundOmissionBlock = true;
        }

        for (var i = 0; i < blocks.length; ++i) {
          // test for a :: which can not be at the string start/end
          // since those cases have been handled above
          if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
            if (foundOmissionBlock) {
              return false; // multiple :: in address
            }

            foundOmissionBlock = true;
          } else if (foundIPv4TransitionBlock && i === blocks.length - 1) ; else if (!ipv6Block.test(blocks[i])) {
            return false;
          }
        }

        if (foundOmissionBlock) {
          return blocks.length >= 1;
        }

        return blocks.length === expectedNumberOfBlocks;
      }

      return false;
    }

    module.exports = exports.default;
    module.exports.default = exports.default;
    });

    var isEmail_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isEmail;

    var _assertString = _interopRequireDefault(assertString_1);

    var _merge = _interopRequireDefault(merge_1);

    var _isByteLength = _interopRequireDefault(isByteLength_1);

    var _isFQDN = _interopRequireDefault(isFQDN_1);

    var _isIP = _interopRequireDefault(isIP_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

    function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

    function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

    function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

    var default_email_options = {
      allow_display_name: false,
      require_display_name: false,
      allow_utf8_local_part: true,
      require_tld: true,
      blacklisted_chars: '',
      ignore_max_length: false
    };
    /* eslint-disable max-len */

    /* eslint-disable no-control-regex */

    var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)<(.+)>$/i;
    var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
    var gmailUserPart = /^[a-z\d]+$/;
    var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
    var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
    var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
    var defaultMaxEmailLength = 254;
    /* eslint-enable max-len */

    /* eslint-enable no-control-regex */

    /**
     * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
     * @param {String} display_name
     */

    function validateDisplayName(display_name) {
      var trim_quotes = display_name.match(/^"(.+)"$/i);
      var display_name_without_quotes = trim_quotes ? trim_quotes[1] : display_name; // display name with only spaces is not valid

      if (!display_name_without_quotes.trim()) {
        return false;
      } // check whether display name contains illegal character


      var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);

      if (contains_illegal) {
        // if contains illegal characters,
        // must to be enclosed in double-quotes, otherwise it's not a valid display name
        if (!trim_quotes) {
          return false;
        } // the quotes in display name must start with character symbol \


        var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;

        if (!all_start_with_back_slash) {
          return false;
        }
      }

      return true;
    }

    function isEmail(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, default_email_options);

      if (options.require_display_name || options.allow_display_name) {
        var display_email = str.match(splitNameAddress);

        if (display_email) {
          var display_name;

          var _display_email = _slicedToArray(display_email, 3);

          display_name = _display_email[1];
          str = _display_email[2];

          // sometimes need to trim the last space to get the display name
          // because there may be a space between display name and email address
          // eg. myname <address@gmail.com>
          // the display name is `myname` instead of `myname `, so need to trim the last space
          if (display_name.endsWith(' ')) {
            display_name = display_name.substr(0, display_name.length - 1);
          }

          if (!validateDisplayName(display_name)) {
            return false;
          }
        } else if (options.require_display_name) {
          return false;
        }
      }

      if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
        return false;
      }

      var parts = str.split('@');
      var domain = parts.pop();
      var user = parts.join('@');
      var lower_domain = domain.toLowerCase();

      if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
        /*
          Previously we removed dots for gmail addresses before validating.
          This was removed because it allows `multiple..dots@gmail.com`
          to be reported as valid, but it is not.
          Gmail only normalizes single dots, removing them from here is pointless,
          should be done in normalizeEmail
        */
        user = user.toLowerCase(); // Removing sub-address from username before gmail validation

        var username = user.split('+')[0]; // Dots are not included in gmail length restriction

        if (!(0, _isByteLength.default)(username.replace('.', ''), {
          min: 6,
          max: 30
        })) {
          return false;
        }

        var _user_parts = username.split('.');

        for (var i = 0; i < _user_parts.length; i++) {
          if (!gmailUserPart.test(_user_parts[i])) {
            return false;
          }
        }
      }

      if (options.ignore_max_length === false && (!(0, _isByteLength.default)(user, {
        max: 64
      }) || !(0, _isByteLength.default)(domain, {
        max: 254
      }))) {
        return false;
      }

      if (!(0, _isFQDN.default)(domain, {
        require_tld: options.require_tld
      })) {
        if (!options.allow_ip_domain) {
          return false;
        }

        if (!(0, _isIP.default)(domain)) {
          if (!domain.startsWith('[') || !domain.endsWith(']')) {
            return false;
          }

          var noBracketdomain = domain.substr(1, domain.length - 2);

          if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
            return false;
          }
        }
      }

      if (user[0] === '"') {
        user = user.slice(1, user.length - 1);
        return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
      }

      var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
      var user_parts = user.split('.');

      for (var _i2 = 0; _i2 < user_parts.length; _i2++) {
        if (!pattern.test(user_parts[_i2])) {
          return false;
        }
      }

      if (options.blacklisted_chars) {
        if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), 'g')) !== -1) return false;
      }

      return true;
    }

    module.exports = exports.default;
    module.exports.default = exports.default;
    });

    var isEmail = /*@__PURE__*/getDefaultExportFromCjs(isEmail_1);

    var isEmpty_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isEmpty;

    var _assertString = _interopRequireDefault(assertString_1);

    var _merge = _interopRequireDefault(merge_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var default_is_empty_options = {
      ignore_whitespace: false
    };

    function isEmpty(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, default_is_empty_options);
      return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
    }

    module.exports = exports.default;
    module.exports.default = exports.default;
    });

    var isEmpty = /*@__PURE__*/getDefaultExportFromCjs(isEmpty_1);

    var isFloat_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isFloat;
    exports.locales = void 0;

    var _assertString = _interopRequireDefault(assertString_1);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function isFloat(str, options) {
      (0, _assertString.default)(str);
      options = options || {};
      var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? alpha_1.decimal[options.locale] : '.', "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));

      if (str === '' || str === '.' || str === '-' || str === '+') {
        return false;
      }

      var value = parseFloat(str.replace(',', '.'));
      return float.test(str) && (!options.hasOwnProperty('min') || value >= options.min) && (!options.hasOwnProperty('max') || value <= options.max) && (!options.hasOwnProperty('lt') || value < options.lt) && (!options.hasOwnProperty('gt') || value > options.gt);
    }

    var locales = Object.keys(alpha_1.decimal);
    exports.locales = locales;
    });

    var isFloat = /*@__PURE__*/getDefaultExportFromCjs(isFloat_1);

    var isMobilePhone_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMobilePhone;
    exports.locales = void 0;

    var _assertString = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /* eslint-disable max-len */
    var phones = {
      'am-AM': /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
      'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
      'ar-BH': /^(\+?973)?(3|6)\d{7}$/,
      'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
      'ar-LB': /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
      'ar-EG': /^((\+?20)|0)?1[0125]\d{8}$/,
      'ar-IQ': /^(\+?964|0)?7[0-9]\d{8}$/,
      'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
      'ar-KW': /^(\+?965)[569]\d{7}$/,
      'ar-LY': /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
      'ar-MA': /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
      'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
      'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
      'ar-TN': /^(\+?216)?[2459]\d{7}$/,
      'az-AZ': /^(\+994|0)(5[015]|7[07]|99)\d{7}$/,
      'bs-BA': /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
      'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
      'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
      'bn-BD': /^(\+?880|0)1[13456789][0-9]{8}$/,
      'ca-AD': /^(\+376)?[346]\d{5}$/,
      'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
      'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
      'de-DE': /^(\+49)?0?[1|3]([0|5][0-45-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,
      'de-AT': /^(\+43|0)\d{1,4}\d{3,12}$/,
      'de-CH': /^(\+41|0)(7[5-9])\d{1,7}$/,
      'de-LU': /^(\+352)?((6\d1)\d{6})$/,
      'el-GR': /^(\+?30|0)?(69\d{8})$/,
      'en-AU': /^(\+?61|0)4\d{8}$/,
      'en-GB': /^(\+?44|0)7\d{9}$/,
      'en-GG': /^(\+?44|0)1481\d{6}$/,
      'en-GH': /^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,
      'en-HK': /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
      'en-MO': /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
      'en-IE': /^(\+?353|0)8[356789]\d{7}$/,
      'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
      'en-KE': /^(\+?254|0)(7|1)\d{8}$/,
      'en-MT': /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
      'en-MU': /^(\+?230|0)?\d{8}$/,
      'en-NG': /^(\+?234|0)?[789]\d{9}$/,
      'en-NZ': /^(\+?64|0)[28]\d{7,9}$/,
      'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
      'en-PH': /^(09|\+639)\d{9}$/,
      'en-RW': /^(\+?250|0)?[7]\d{8}$/,
      'en-SG': /^(\+65)?[689]\d{7}$/,
      'en-SL': /^(?:0|94|\+94)?(7(0|1|2|5|6|7|8)( |-)?\d)\d{6}$/,
      'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
      'en-UG': /^(\+?256|0)?[7]\d{8}$/,
      'en-US': /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
      'en-ZA': /^(\+?27|0)\d{9}$/,
      'en-ZM': /^(\+?26)?09[567]\d{7}$/,
      'en-ZW': /^(\+263)[0-9]{9}$/,
      'es-AR': /^\+?549(11|[2368]\d)\d{8}$/,
      'es-BO': /^(\+?591)?(6|7)\d{7}$/,
      'es-CO': /^(\+?57)?([1-8]{1}|3[0-9]{2})?[2-9]{1}\d{6}$/,
      'es-CL': /^(\+?56|0)[2-9]\d{1}\d{7}$/,
      'es-CR': /^(\+506)?[2-8]\d{7}$/,
      'es-DO': /^(\+?1)?8[024]9\d{7}$/,
      'es-HN': /^(\+?504)?[9|8]\d{7}$/,
      'es-EC': /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
      'es-ES': /^(\+?34)?[6|7]\d{8}$/,
      'es-PE': /^(\+?51)?9\d{8}$/,
      'es-MX': /^(\+?52)?(1|01)?\d{10,11}$/,
      'es-PA': /^(\+?507)\d{7,8}$/,
      'es-PY': /^(\+?595|0)9[9876]\d{7}$/,
      'es-UY': /^(\+598|0)9[1-9][\d]{6}$/,
      'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
      'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
      'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
      'fj-FJ': /^(\+?679)?\s?\d{3}\s?\d{4}$/,
      'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
      'fr-FR': /^(\+?33|0)[67]\d{8}$/,
      'fr-GF': /^(\+?594|0|00594)[67]\d{8}$/,
      'fr-GP': /^(\+?590|0|00590)[67]\d{8}$/,
      'fr-MQ': /^(\+?596|0|00596)[67]\d{8}$/,
      'fr-RE': /^(\+?262|0|00262)[67]\d{8}$/,
      'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
      'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
      'id-ID': /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
      'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
      'it-SM': /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
      'ja-JP': /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
      'ka-GE': /^(\+?995)?(5|79)\d{7}$/,
      'kk-KZ': /^(\+?7|8)?7\d{9}$/,
      'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
      'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
      'lt-LT': /^(\+370|8)\d{8}$/,
      'ms-MY': /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
      'nb-NO': /^(\+?47)?[49]\d{7}$/,
      'ne-NP': /^(\+?977)?9[78]\d{8}$/,
      'nl-BE': /^(\+?32|0)4?\d{8}$/,
      'nl-NL': /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
      'nn-NO': /^(\+?47)?[49]\d{7}$/,
      'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
      'pt-BR': /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[2-9]{1}\d{3}\-?\d{4}))$/,
      'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
      'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
      'ru-RU': /^(\+?7|8)?9\d{9}$/,
      'sl-SI': /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
      'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
      'sq-AL': /^(\+355|0)6[789]\d{6}$/,
      'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
      'sv-SE': /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
      'th-TH': /^(\+66|66|0)\d{9}$/,
      'tr-TR': /^(\+?90|0)?5\d{9}$/,
      'uk-UA': /^(\+?38|8)?0\d{9}$/,
      'uz-UZ': /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
      'vi-VN': /^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-6|89]))|(9([0-9])))([0-9]{7})$/,
      'zh-CN': /^((\+|00)86)?1([3568][0-9]|4[579]|6[67]|7[01235678]|9[012356789])[0-9]{8}$/,
      'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
    };
    /* eslint-enable max-len */
    // aliases

    phones['en-CA'] = phones['en-US'];
    phones['fr-CA'] = phones['en-CA'];
    phones['fr-BE'] = phones['nl-BE'];
    phones['zh-HK'] = phones['en-HK'];
    phones['zh-MO'] = phones['en-MO'];
    phones['ga-IE'] = phones['en-IE'];

    function isMobilePhone(str, locale, options) {
      (0, _assertString.default)(str);

      if (options && options.strictMode && !str.startsWith('+')) {
        return false;
      }

      if (Array.isArray(locale)) {
        return locale.some(function (key) {
          // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
          // istanbul ignore else
          if (phones.hasOwnProperty(key)) {
            var phone = phones[key];

            if (phone.test(str)) {
              return true;
            }
          }

          return false;
        });
      } else if (locale in phones) {
        return phones[locale].test(str); // alias falsey locale as 'any'
      } else if (!locale || locale === 'any') {
        for (var key in phones) {
          // istanbul ignore else
          if (phones.hasOwnProperty(key)) {
            var phone = phones[key];

            if (phone.test(str)) {
              return true;
            }
          }
        }

        return false;
      }

      throw new Error("Invalid locale '".concat(locale, "'"));
    }

    var locales = Object.keys(phones);
    exports.locales = locales;
    });

    var isMobilePhone = /*@__PURE__*/getDefaultExportFromCjs(isMobilePhone_1);

    var toString_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toString;

    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

    function toString(input) {
      if (_typeof(input) === 'object' && input !== null) {
        if (typeof input.toString === 'function') {
          input = input.toString();
        } else {
          input = '[object Object]';
        }
      } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
        input = '';
      }

      return String(input);
    }

    module.exports = exports.default;
    module.exports.default = exports.default;
    });

    var isIn_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIn;

    var _assertString = _interopRequireDefault(assertString_1);

    var _toString = _interopRequireDefault(toString_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

    function isIn(str, options) {
      (0, _assertString.default)(str);
      var i;

      if (Object.prototype.toString.call(options) === '[object Array]') {
        var array = [];

        for (i in options) {
          // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
          // istanbul ignore else
          if ({}.hasOwnProperty.call(options, i)) {
            array[i] = (0, _toString.default)(options[i]);
          }
        }

        return array.indexOf(str) >= 0;
      } else if (_typeof(options) === 'object') {
        return options.hasOwnProperty(str);
      } else if (options && typeof options.indexOf === 'function') {
        return options.indexOf(str) >= 0;
      }

      return false;
    }

    module.exports = exports.default;
    module.exports.default = exports.default;
    });

    var isIn = /*@__PURE__*/getDefaultExportFromCjs(isIn_1);

    var isInt_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isInt;

    var _assertString = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
    var intLeadingZeroes = /^[-+]?[0-9]+$/;

    function isInt(str, options) {
      (0, _assertString.default)(str);
      options = options || {}; // Get the regex to use for testing, based on whether
      // leading zeroes are allowed or not.

      var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes; // Check min/max/lt/gt

      var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
      var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
      var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
      var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;
      return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
    }

    module.exports = exports.default;
    module.exports.default = exports.default;
    });

    var isInt = /*@__PURE__*/getDefaultExportFromCjs(isInt_1);

    var isURL_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isURL;

    var _assertString = _interopRequireDefault(assertString_1);

    var _isFQDN = _interopRequireDefault(isFQDN_1);

    var _isIP = _interopRequireDefault(isIP_1);

    var _merge = _interopRequireDefault(merge_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /*
    options for isURL method

    require_protocol - if set as true isURL will return false if protocol is not present in the URL
    require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
    protocols - valid protocols can be modified with this option
    require_host - if set as false isURL will not check if host is present in the URL
    require_port - if set as true isURL will check if port is present in the URL
    allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed
    validate_length - if set as false isURL will skip string length validation (IE maximum is 2083)

    */
    var default_url_options = {
      protocols: ['http', 'https', 'ftp'],
      require_tld: true,
      require_protocol: false,
      require_host: true,
      require_port: false,
      require_valid_protocol: true,
      allow_underscores: false,
      allow_trailing_dot: false,
      allow_protocol_relative_urls: false,
      validate_length: true
    };
    var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

    function isRegExp(obj) {
      return Object.prototype.toString.call(obj) === '[object RegExp]';
    }

    function checkHost(host, matches) {
      for (var i = 0; i < matches.length; i++) {
        var match = matches[i];

        if (host === match || isRegExp(match) && match.test(host)) {
          return true;
        }
      }

      return false;
    }

    function isURL(url, options) {
      (0, _assertString.default)(url);

      if (!url || /[\s<>]/.test(url)) {
        return false;
      }

      if (url.indexOf('mailto:') === 0) {
        return false;
      }

      options = (0, _merge.default)(options, default_url_options);

      if (options.validate_length && url.length >= 2083) {
        return false;
      }

      var protocol, auth, host, hostname, port, port_str, split, ipv6;
      split = url.split('#');
      url = split.shift();
      split = url.split('?');
      url = split.shift();
      split = url.split('://');

      if (split.length > 1) {
        protocol = split.shift().toLowerCase();

        if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
          return false;
        }
      } else if (options.require_protocol) {
        return false;
      } else if (url.substr(0, 2) === '//') {
        if (!options.allow_protocol_relative_urls) {
          return false;
        }

        split[0] = url.substr(2);
      }

      url = split.join('://');

      if (url === '') {
        return false;
      }

      split = url.split('/');
      url = split.shift();

      if (url === '' && !options.require_host) {
        return true;
      }

      split = url.split('@');

      if (split.length > 1) {
        if (options.disallow_auth) {
          return false;
        }

        auth = split.shift();

        if (auth.indexOf(':') === -1 || auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
          return false;
        }
      }

      hostname = split.join('@');
      port_str = null;
      ipv6 = null;
      var ipv6_match = hostname.match(wrapped_ipv6);

      if (ipv6_match) {
        host = '';
        ipv6 = ipv6_match[1];
        port_str = ipv6_match[2] || null;
      } else {
        split = hostname.split(':');
        host = split.shift();

        if (split.length) {
          port_str = split.join(':');
        }
      }

      if (port_str !== null) {
        port = parseInt(port_str, 10);

        if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
          return false;
        }
      } else if (options.require_port) {
        return false;
      }

      if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
        return false;
      }

      host = host || ipv6;

      if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
        return false;
      }

      if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
        return false;
      }

      return true;
    }

    module.exports = exports.default;
    module.exports.default = exports.default;
    });

    var isURL = /*@__PURE__*/getDefaultExportFromCjs(isURL_1);

    var Validators = /** @class */ (function () {
        function Validators() {
        }
        /**
         * Compose multiple validators into a single function that returns the first
         * validation error in the validators chain.
         */
        Validators.compose = function (validators) {
            if (!Array.isArray(validators) || !validators.length) {
                return;
            }
            return function (value, formValues) {
                for (var _i = 0, validators_1 = validators; _i < validators_1.length; _i++) {
                    var validate = validators_1[_i];
                    var fieldError = typeof validate === 'function'
                        ? validate(value, formValues)
                        : undefined;
                    if (fieldError) {
                        return fieldError;
                    }
                }
            };
        };
        Validators.createValidator = function (validate) {
            return function (value, formValues) {
                // Do not validate empty values to allow optional fields.
                if (isValueEmpty(value)) {
                    return;
                }
                return validate(toString(value), formValues);
            };
        };
        // Wrappers around https://github.com/validatorjs/validator.js
        Validators.isRequired = function (message, options) {
            if (message === void 0) { message = 'The field can not be empty.'; }
            return function (value) {
                if (isValueEmpty(value) || isEmpty(toString(value), options)) {
                    return message;
                }
            };
        };
        Validators.isAlphanumeric = function (message, locale) {
            if (message === void 0) { message = 'Must be a alphanumeric string.'; }
            return Validators.createValidator(function (value) {
                return isAlphanumeric(toString(value), locale) ? undefined : message;
            });
        };
        Validators.isEmail = function (message, options) {
            if (message === void 0) { message = 'Must be a valid email.'; }
            return Validators.createValidator(function (value) {
                return isEmail(toString(value), options) ? undefined : message;
            });
        };
        Validators.isMobilePhone = function (message, options, locale) {
            if (message === void 0) { message = 'Must be a valid phone number.'; }
            return Validators.createValidator(function (value) {
                return isMobilePhone(toString(value), locale, options)
                    ? undefined
                    : message;
            });
        };
        Validators.isFloat = function (message, options) {
            if (message === void 0) { message = 'Must be a valid float number.'; }
            return Validators.createValidator(function (value) {
                return isFloat(toString(value), options) ? undefined : message;
            });
        };
        Validators.isInt = function (message, options) {
            if (message === void 0) { message = 'Must be a valid integer.'; }
            return Validators.createValidator(function (value) {
                return isInt(toString(value), options) ? undefined : message;
            });
        };
        Validators.isIn = function (values, message) {
            if (message === void 0) { message = "Must be one of " + values.join(', '); }
            return Validators.createValidator(function (value) {
                return isIn(toString(value), values) ? undefined : message;
            });
        };
        Validators.isURL = function (message, options) {
            if (message === void 0) { message = 'Must be a valid URL.'; }
            return Validators.createValidator(function (value) {
                return isURL(toString(value), options) ? undefined : message;
            });
        };
        return Validators;
    }());
    function toString(value) {
        return value != null ? '' + value : '';
    }
    function isValueEmpty(value) {
        return (value == null ||
            ((Array.isArray(value) || typeof value === 'string') && !value.length));
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    function uniqueId(size) {
        if (size === void 0) { size = 5; }
        if (size < 1) {
            throw new Error('The size of `uniqueId` must be greater than 0.');
        }
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789';
        var max = chars.length - 1;
        return Array.from({ length: size })
            .map(function () { return chars[getRandomInt(max)]; })
            .join('');
    }
    function setAttributes($element, attributes, excludeAttributes) {
        if (excludeAttributes === void 0) { excludeAttributes = []; }
        Object.keys(attributes)
            .filter(function (name) { return !excludeAttributes.includes(name); })
            .forEach(function (name) {
            var value = attributes[name];
            if (value != null && value !== false) {
                $element.setAttribute(name, '' + value);
            }
        });
    }
    function appendContentToElement($parent, child) {
        if (child instanceof Node) {
            $parent.append(child);
        }
        else {
            $parent.innerHTML = child;
        }
    }

    var EasyFormControl = /** @class */ (function () {
        function EasyFormControl(fieldSchema, onChange, onBlur) {
            this.$inputs = [];
            this._isDisabled = false;
            this._isReadOnly = false;
            this._schema = fieldSchema;
            this.onChange = onChange;
            this.onBlur = onBlur;
            this.$element = this._createElement();
            this._addEventListeners();
        }
        EasyFormControl.normalizeOption = function (option) {
            var value;
            var label;
            if (typeof option === 'object') {
                value = '' + option.value;
                label = option.label;
            }
            else {
                value = '' + option;
            }
            return { value: value, label: label || value };
        };
        Object.defineProperty(EasyFormControl.prototype, "isDisabled", {
            get: function () {
                return this._isDisabled;
            },
            set: function (value) {
                this._isDisabled = value;
                this.$inputs.forEach(function ($input) {
                    if (value) {
                        $input.setAttribute('disabled', 'true');
                    }
                    else {
                        $input.removeAttribute('disabled');
                    }
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EasyFormControl.prototype, "isReadOnly", {
            get: function () {
                return this._isReadOnly;
            },
            set: function (value) {
                this._isReadOnly = value;
                this.$inputs.forEach(function ($input) {
                    if (value) {
                        $input.setAttribute('readonly', 'true');
                    }
                    else {
                        $input.removeAttribute('readonly');
                    }
                });
            },
            enumerable: false,
            configurable: true
        });
        EasyFormControl.prototype._addEventListeners = function () {
            var _this = this;
            var _a = this._schema, name = _a.name, type = _a.type;
            this.$inputs.forEach(function ($input) {
                $input.addEventListener('change', function () {
                    if (type === 'checkboxes') {
                        _this.onChange(name, _this.$inputs
                            .filter(function ($input) { return $input.checked; })
                            .map(function ($input) { return $input.value; }));
                    }
                    else {
                        _this.onChange(name, $input.value);
                    }
                });
                $input.addEventListener('blur', function () {
                    if (typeof _this.onBlur === 'function') {
                        _this.onBlur(name);
                    }
                });
            });
        };
        EasyFormControl.prototype._createElement = function () {
            var _a = this._schema, type = _a.type, helpText = _a.helpText;
            var $field;
            if (type === 'checkboxes') {
                $field = this._createCheckboxes();
            }
            else if (type === 'radio-buttons') {
                $field = this._createRadioButtons();
            }
            else {
                $field = this._createField();
            }
            $field.classList.add(CLASS_NAMES.formControlField);
            var $control = document.createElement('div');
            $control.classList.add(CLASS_NAMES.formControl);
            $control.append($field);
            if (helpText) {
                var $helpText = document.createElement('small');
                $helpText.classList.add(CLASS_NAMES.formControlHelpText);
                appendContentToElement($helpText, helpText);
                $control.append($helpText);
            }
            return $control;
        };
        EasyFormControl.prototype._createField = function () {
            var _a = this._schema, type = _a.type, label = _a.label;
            var $input;
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
            var $field = document.createElement('div');
            $field.classList.add(CLASS_NAMES.field, CLASS_NAMES.fieldTypeModifier(type));
            if (label) {
                var $label = document.createElement('label');
                $label.classList.add(CLASS_NAMES.fieldLabel);
                $label.setAttribute('for', $input.id);
                appendContentToElement($label, label);
                $field.append($label);
            }
            if (type === 'checkbox') {
                $field.prepend($input);
            }
            else {
                $field.append($input);
            }
            return $field;
        };
        EasyFormControl.prototype._createInput = function () {
            var _a = this._schema, name = _a.name, type = _a.type, value = _a.value, checked = _a.checked, inputAttrs = _a.inputAttrs;
            var $input = document.createElement('input');
            setAttributes($input, inputAttrs, ['name', 'type', 'value', 'checked']);
            $input.id = $input.id || "input-" + uniqueId();
            $input.name = name;
            $input.type = type;
            $input.value = '' + value;
            $input.classList.add(CLASS_NAMES.input, CLASS_NAMES.inputTypeModifier(type));
            if (type === 'checkbox') {
                $input.checked = checked;
            }
            this.$inputs.push($input);
            return $input;
        };
        EasyFormControl.prototype._createTextarea = function () {
            var _a = this._schema, name = _a.name, value = _a.value, inputAttrs = _a.inputAttrs;
            var $textarea = document.createElement('textarea');
            setAttributes($textarea, inputAttrs, ['name']);
            $textarea.id = $textarea.id || "textarea-" + uniqueId();
            $textarea.name = name;
            appendContentToElement($textarea, '' + value);
            $textarea.classList.add(CLASS_NAMES.textarea);
            this.$inputs.push($textarea);
            return $textarea;
        };
        EasyFormControl.prototype._createSelect = function () {
            var _a = this._schema, name = _a.name, value = _a.value, options = _a.options, inputAttrs = _a.inputAttrs;
            var selectedValue = '' + value;
            var $select = document.createElement('select');
            setAttributes($select, inputAttrs, ['name']);
            $select.id = $select.id || "select-" + uniqueId();
            $select.name = name;
            $select.classList.add(CLASS_NAMES.select);
            options.forEach(function (option) {
                var $option = document.createElement('option');
                var _a = EasyFormControl.normalizeOption(option), value = _a.value, label = _a.label;
                $option.value = value;
                appendContentToElement($option, label);
                if (value === selectedValue) {
                    $option.selected = true;
                }
                $select.append($option);
            });
            this.$inputs.push($select);
            return $select;
        };
        EasyFormControl.prototype._createCheckboxes = function () {
            var _this = this;
            var _a = this._schema, name = _a.name, options = _a.options, value = _a.value, inputAttrs = _a.inputAttrs, label = _a.label;
            var values = Array.isArray(value) ? value : [];
            var $checkboxGroup = document.createElement('div');
            $checkboxGroup.classList.add(CLASS_NAMES.checkboxGroup);
            var $label = document.createElement('div');
            $label.id = "checkboxes-label-" + uniqueId();
            $label.classList.add(CLASS_NAMES.checkboxGroupLabel);
            appendContentToElement($label, label);
            $checkboxGroup.append($label);
            var $items = document.createElement('div');
            $items.setAttribute('aria-describedby', $label.id);
            $items.classList.add(CLASS_NAMES.checkboxGroupItems);
            $checkboxGroup.append($items);
            options.forEach(function (option) {
                var _a = EasyFormControl.normalizeOption(option), value = _a.value, label = _a.label;
                var $checkbox = document.createElement('div');
                $checkbox.classList.add(CLASS_NAMES.checkbox);
                var $input = document.createElement('input');
                setAttributes($input, inputAttrs, ['name', 'value', 'checked']);
                $input.type = 'checkbox';
                $input.name = name;
                $input.value = value;
                $input.checked = values.includes(value);
                $input.id = $input.id || "checkbox-" + uniqueId();
                $input.classList.add(CLASS_NAMES.checkboxInput);
                $checkbox.append($input);
                var $label = document.createElement('label');
                $label.classList.add(CLASS_NAMES.checkboxLabel);
                $label.setAttribute('for', $input.id);
                appendContentToElement($label, label);
                $checkbox.append($label);
                _this.$inputs.push($input);
                $items.append($checkbox);
            });
            return $checkboxGroup;
        };
        EasyFormControl.prototype._createRadioButtons = function () {
            var _this = this;
            var _a = this._schema, name = _a.name, selectedValue = _a.value, options = _a.options, inputAttrs = _a.inputAttrs, label = _a.label;
            var $radioButtonGroup = document.createElement('div');
            $radioButtonGroup.classList.add(CLASS_NAMES.radioButtonGroup);
            var $label = document.createElement('div');
            $label.id = "radio-buttons-label-" + uniqueId();
            $label.classList.add(CLASS_NAMES.radioButtonGroupLabel);
            appendContentToElement($label, label);
            $radioButtonGroup.append($label);
            var $items = document.createElement('div');
            $items.setAttribute('aria-describedby', $label.id);
            $items.classList.add(CLASS_NAMES.radioButtonGroupItems);
            $radioButtonGroup.append($items);
            options.forEach(function (option) {
                var _a = EasyFormControl.normalizeOption(option), value = _a.value, label = _a.label;
                var $radioButton = document.createElement('div');
                $radioButton.classList.add(CLASS_NAMES.radioButton);
                var $input = document.createElement('input');
                setAttributes($input, inputAttrs, ['name', 'value', 'checked']);
                $input.type = 'radio';
                $input.name = name;
                $input.value = value;
                $input.id = $input.id || "radio-button-" + uniqueId();
                $input.checked = value === selectedValue;
                $input.classList.add(CLASS_NAMES.radioButtonInput);
                $radioButton.append($input);
                var $label = document.createElement('label');
                $label.classList.add(CLASS_NAMES.radioButtonLabel);
                $label.setAttribute('for', $input.id);
                appendContentToElement($label, label);
                $radioButton.append($label);
                _this.$inputs.push($input);
                $items.append($radioButton);
            });
            return $radioButtonGroup;
        };
        EasyFormControl.prototype.displayError = function (error) {
            if (error) {
                if (this.$error) {
                    appendContentToElement(this.$error, '' + error);
                }
                else {
                    this.$error = document.createElement('small');
                    this.$error.classList.add(CLASS_NAMES.formControlError);
                    appendContentToElement(this.$error, '' + error);
                    this.$element.append(this.$error);
                }
            }
            else if (this.$error) {
                this.$error.remove();
                delete this.$error;
            }
        };
        EasyFormControl.prototype.getHTMLElement = function () {
            return this.$element;
        };
        return EasyFormControl;
    }());

    function checkFormSchema(formSchema) {
        checkFormFields(formSchema.fields);
    }
    function checkFormFields(fields) {
        if (!Array.isArray(fields)) {
            throw new Error('EasyForm error: `fields` property of form schema must be a non-empty ' +
                'array of objects.');
        }
        fields.forEach(function (fieldOrFieldsGroup) {
            if (Array.isArray(fieldOrFieldsGroup)) {
                checkFormFields(fieldOrFieldsGroup);
            }
            else {
                checkFieldSchema(fieldOrFieldsGroup);
            }
        });
    }
    function checkFieldSchema(schema) {
        if (!schema || typeof schema !== 'object' || !schema.name) {
            throw new Error('EasyForm error: field schema must be an object with the required ' +
                '`name` property.');
        }
        if (schema.type &&
            ['select', 'checkboxes', 'radio-buttons'].includes(schema.type)) {
            if (schema.options) {
                checkFieldOptions(schema.options);
            }
            else {
                throw new Error("EasyForm error: you'd defined field type as `" + schema.type + "` but " +
                    'have forgotten to pass the `options` property.');
            }
        }
        if (schema.validators != null) {
            checkFieldValidators(schema.validators);
        }
        if (schema.value != null) {
            if (schema.type === 'checkboxes' &&
                (!Array.isArray(schema.value) ||
                    schema.value.some(function (value) { return !isFieldValueValid(value); }))) {
                throw new Error("EasyForm error: field with \"" + schema.name + "\" name has invalid value; " +
                    'it must be an array of strings or numbers.');
            }
            else if (!isFieldValueValid(schema.value)) {
                throw new Error("EasyForm error: field with \"" + schema.name + "\" name has invalid value; " +
                    'it must be a string or number.');
            }
        }
    }
    function checkFieldOptions(options) {
        if (!Array.isArray(options) || !options.length) {
            throw new Error('EasyForm error: `options` property must be a non-empty array.');
        }
        var isOptionValueValid = function (v) {
            return typeof v === 'string' || typeof v === 'number';
        };
        if (!options.every(function (option) {
            return isOptionValueValid(option) || isOptionValueValid(option === null || option === void 0 ? void 0 : option.value);
        })) {
            throw new Error('EasyForm error: every option must be a string or an object with ' +
                'required `value` property.');
        }
    }
    function checkFieldValidators(validators) {
        if (!Array.isArray(validators)) {
            throw new Error('EasyForm error: `validators` property must be an array of functions.');
        }
        if (validators.some(function (validator) { return typeof validator !== 'function'; })) {
            throw new Error('EasyForm error: every validator must be a function that return an ' +
                'Error` or `string` when the field has an invalid value or `null` ' +
                'or `undefined` otherwise.');
        }
    }
    function isFieldValueValid(value) {
        return ['string', 'number'].includes(typeof value);
    }

    var EasyForm = /** @class */ (function () {
        function EasyForm(_schema, _root) {
            this._schema = _schema;
            this._root = _root;
            this._fields = {};
            this._values = {};
            this._errors = {};
            this._validators = {};
            this._isDisabled = false;
            this._isSubmitting = false;
            var rooChild;
            try {
                checkFormSchema(_schema);
                rooChild = this._createForm();
                this._addEventListeners();
            }
            catch (e) {
                rooChild = EasyForm.createError(e);
            }
            this._root.innerHTML = '';
            this._root.append(rooChild);
        }
        EasyForm.normalizeFieldSchema = function (schema) {
            var _a, _b;
            var value;
            if (Array.isArray(schema.value)) {
                value = schema.value.map(String);
            }
            else if (schema.value) {
                value = '' + schema.value;
            }
            else {
                value = schema.type === 'checkboxes' ? [] : '';
            }
            return {
                name: schema.name,
                type: schema.type || 'text',
                value: value,
                label: (_a = schema.label) !== null && _a !== void 0 ? _a : '',
                helpText: (_b = schema.helpText) !== null && _b !== void 0 ? _b : '',
                checked: !!schema.checked,
                inputAttrs: schema.inputAttrs && typeof schema.inputAttrs === 'object'
                    ? schema.inputAttrs
                    : {},
                options: Array.isArray(schema.options) ? schema.options : [],
                validators: Array.isArray(schema.validators) ? schema.validators : [],
            };
        };
        EasyForm.createError = function (error) {
            var $error = document.createElement('small');
            $error.style.color = '#dc2626';
            $error.style.fontFamily = 'Consolas, Menlo, monospace';
            $error.classList.add(CLASS_NAMES.error);
            appendContentToElement($error, error.message);
            return $error;
        };
        Object.defineProperty(EasyForm.prototype, "isDisabled", {
            get: function () {
                return this._isDisabled;
            },
            set: function (value) {
                this._isDisabled = value;
                Object.values(this._fields).forEach(function ($field) { return ($field.isDisabled = value); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EasyForm.prototype, "isSubmitting", {
            get: function () {
                return this._isSubmitting;
            },
            set: function (value) {
                var _a, _b, _c, _d;
                this._isSubmitting = value;
                Object.values(this._fields).forEach(function ($field) { return ($field.isReadOnly = value); });
                if (value) {
                    (_a = this.$submitButton) === null || _a === void 0 ? void 0 : _a.setAttribute('disabled', 'true');
                    (_b = this.$submitButton) === null || _b === void 0 ? void 0 : _b.classList.add(CLASS_NAMES.buttonLoading);
                }
                else {
                    (_c = this.$submitButton) === null || _c === void 0 ? void 0 : _c.removeAttribute('disabled');
                    (_d = this.$submitButton) === null || _d === void 0 ? void 0 : _d.classList.remove(CLASS_NAMES.buttonLoading);
                }
            },
            enumerable: false,
            configurable: true
        });
        EasyForm.prototype.submit = function () {
            return;
        };
        EasyForm.prototype.validateField = function (fieldName) {
            var values = this._values;
            var validate = this._validators[fieldName];
            if (typeof validate === 'function') {
                var fieldError = validate(values[fieldName], values);
                this._errors[fieldName] = fieldError;
                this._fields[fieldName].displayError(fieldError);
            }
        };
        EasyForm.prototype.validate = function () {
            var _this = this;
            Object.keys(this._fields).forEach(function (fieldName) {
                _this.validateField(fieldName);
            });
            return !Object.values(this._errors).some(Boolean);
        };
        EasyForm.prototype._addEventListeners = function () {
            var _this = this;
            var _a;
            (_a = this.$form) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
                var _a = _this._schema, onSubmit = _a.onSubmit, onValidationFailed = _a.onValidationFailed;
                var isFormValid = _this.validate();
                if (isFormValid) {
                    if (typeof onSubmit === 'function') {
                        event.preventDefault();
                        onSubmit(_this._values, _this);
                    }
                }
                else {
                    event.preventDefault();
                    if (typeof onValidationFailed === 'function') {
                        onValidationFailed(_this._errors);
                    }
                }
            });
        };
        EasyForm.prototype._createForm = function () {
            var _a = this._schema, fields = _a.fields, submitButton = _a.submitButton, formAttrs = _a.formAttrs, title = _a.title, header = _a.header, footnote = _a.footnote, footer = _a.footer;
            var $container = document.createElement('section');
            $container.classList.add(CLASS_NAMES.container);
            if (title) {
                var $title = document.createElement('h2');
                $title.classList.add(CLASS_NAMES.containerTitle);
                appendContentToElement($title, title);
                $container.append($title);
            }
            if (header) {
                var $header = document.createElement('header');
                $header.classList.add(CLASS_NAMES.containerHeader);
                appendContentToElement($header, header);
                $container.append($header);
            }
            var $form = document.createElement('form');
            setAttributes($form, formAttrs || {});
            $form.classList.add(CLASS_NAMES.form);
            $container.append($form);
            this.$form = $form;
            var $fields = this._createFields(fields);
            $fields.forEach(function ($field) {
                $field.classList.add(CLASS_NAMES.formField);
                $form.append($field);
            });
            if (footnote) {
                var $footnote = document.createElement('div');
                $footnote.classList.add(CLASS_NAMES.formFootnote);
                appendContentToElement($footnote, footnote);
                $form.append($footnote);
            }
            var $submitButton = document.createElement('button');
            $submitButton.classList.add(CLASS_NAMES.button, CLASS_NAMES.formSubmitButton);
            $submitButton.setAttribute('type', 'submit');
            appendContentToElement($submitButton, submitButton);
            $form.append($submitButton);
            this.$submitButton = $submitButton;
            if (footer) {
                var $footer = document.createElement('footer');
                $footer.classList.add(CLASS_NAMES.containerFooter);
                appendContentToElement($footer, footer);
                $container.append($footer);
            }
            return $container;
        };
        EasyForm.prototype._createFields = function (fields) {
            var _this = this;
            return fields.map(function (unsafeFieldSchema) {
                if (Array.isArray(unsafeFieldSchema)) {
                    return _this._createFieldGroup(_this._createFields(unsafeFieldSchema));
                }
                else {
                    return _this._createField(unsafeFieldSchema);
                }
            });
        };
        EasyForm.prototype._createField = function (schema) {
            var _this = this;
            var fieldSchema = EasyForm.normalizeFieldSchema(schema);
            this._values[fieldSchema.name] =
                fieldSchema.type === 'checkbox' ? fieldSchema.checked : fieldSchema.value;
            this._validators[fieldSchema.name] = Validators.compose(fieldSchema.validators);
            var field = new EasyFormControl(fieldSchema, function (fieldName, value) {
                _this._values[fieldName] = value;
            }, function (fieldName) {
                _this.validateField(fieldName);
            });
            this._fields[fieldSchema.name] = field;
            return field.getHTMLElement();
        };
        EasyForm.prototype._createFieldGroup = function ($fields) {
            var $fieldGroup = document.createElement('div');
            $fieldGroup.classList.add(CLASS_NAMES.formGroup, CLASS_NAMES.formGroupItemsModifier($fields.length));
            $fields.forEach(function ($field) {
                $field.classList.add(CLASS_NAMES.formGroupItem);
                $fieldGroup.appendChild($field);
            });
            return $fieldGroup;
        };
        EasyForm.Validators = Validators;
        EasyForm.EasyFormField = EasyFormControl;
        return EasyForm;
    }());

    return EasyForm;

}());
