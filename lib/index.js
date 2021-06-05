'use strict';

const moment = require('moment-timezone');
const countriesList = require('countries-list');
const common = require('@lykmapipo/common');
const env = require('@lykmapipo/env');
const lodash = require('lodash');

/**
 * @constant DEFAULT_LOCALE
 * @name DEFAULT_LOCALE
 * @type {string}
 * @description obtain default runtime locale
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.2.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { DEFAULT_LOCALE } from '@lykmapipo/common';
 * // => 'en'
 */
const DEFAULT_LOCALE = env.getString('DEFAULT_LOCALE', 'en');

/**
 * @constant LOCALES
 * @name LOCALES
 * @type {string[]}
 * @description obtain list of allowed runtime locales
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.2.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { LOCALES } from '@lykmapipo/common';
 * // => ['en', ...]
 */
const LOCALES = common.sortedUniq(env.getStrings('LOCALES', DEFAULT_LOCALE));

/**
 * @constant DEFAULT_TIMEZONE
 * @name DEFAULT_TIMEZONE
 * @type {string}
 * @description obtain default runtime timezone
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.2.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { DEFAULT_TIMEZONE } from '@lykmapipo/common';
 * // => 'Africa/Dar_es_Salaam'
 */
const DEFAULT_TIMEZONE =
  env.getString('TZ') || // honour heroku
  env.getString('DEFAULT_TIMEZONE') ||
  moment.tz.guess();

/**
 * @constant TIMEZONES
 * @name TIMEZONES
 * @type {string[]}
 * @description obtain list of allowed runtime timezones
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.2.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { TIMEZONES } from '@lykmapipo/common';
 * // => ['Africa/Dar_es_Salaam', ...]
 */
const TIMEZONES = common.sortedUniq(env.getStrings('TIMEZONES', moment.tz.names()));

/**
 * @constant DEFAULT_DATE_FORMAT
 * @name DEFAULT_DATE_FORMAT
 * @type {string}
 * @description obtain default runtime date format
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.3.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { DEFAULT_DATE_FORMAT } from '@lykmapipo/common';
 * // => 'YYYY-MM-DD'
 */
const DEFAULT_DATE_FORMAT = env.getString(
  'DEFAULT_DATE_FORMAT',
  'YYYY-MM-DD'
);

/**
 * @constant DEFAULT_TIME_FORMAT
 * @name DEFAULT_TIME_FORMAT
 * @type {string}
 * @description obtain default runtime time format
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.3.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { DEFAULT_TIME_FORMAT } from '@lykmapipo/common';
 * // => 'HH:mm:ss'
 */
const DEFAULT_TIME_FORMAT = env.getString('DEFAULT_TIME_FORMAT', 'HH:mm:ss');

/**
 * @constant DEFAULT_DATETIME_FORMAT
 * @name DEFAULT_DATETIME_FORMAT
 * @type {string}
 * @description obtain default runtime datetime format
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.3.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { DEFAULT_DATETIME_FORMAT } from '@lykmapipo/common';
 * // => 'YYYY-MM-DD HH:mm:ss'
 */
const DEFAULT_DATETIME_FORMAT = env.getString(
  'DEFAULT_DATETIME_FORMAT',
  'YYYY-MM-DD HH:mm:ss'
);

/**
 * @constant DEFAULT_CONTINENT_NAME
 * @name DEFAULT_CONTINENT_NAME
 * @type {string}
 * @description obtain default continent name
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.2.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { DEFAULT_CONTINENT_NAME } from '@lykmapipo/common';
 * // => 'Africa'
 */
const DEFAULT_CONTINENT_NAME = env.getString(
  'DEFAULT_CONTINENT_NAME',
  'Africa'
);

/**
 * @constant CONTINENT_NAMES
 * @name CONTINENT_NAMES
 * @type {string[]}
 * @description provide list of continent names
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { CONTINENT_NAMES } from '@lykmapipo/common';
 * // => ['Africa', ...]
 */
const CONTINENT_NAMES = common.sortedUniq([...lodash.values(countriesList.continents)]);

/**
 * @constant DEFAULT_COUNTRY_NAME
 * @name DEFAULT_COUNTRY_NAME
 * @type {string}
 * @description obtain default country name
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.2.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { DEFAULT_COUNTRY_NAME } from '@lykmapipo/common';
 * // => 'Tanzania'
 */
const DEFAULT_COUNTRY_NAME = env.getString(
  'DEFAULT_COUNTRY_NAME',
  'Tanzania'
);

/**
 * @constant COUNTRY_NAMES
 * @name COUNTRY_NAMES
 * @type {string[]}
 * @description provide list of country names
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { COUNTRY_NAMES } from '@lykmapipo/common';
 * // => ['Tanzania', ...]
 */
const COUNTRY_NAMES = common.sortedUniq([...lodash.map(countriesList.countries, 'name')]);

/**
 * @constant DEFAULT_COUNTRY_CODE
 * @name DEFAULT_COUNTRY_CODE
 * @type {string}
 * @description obtain default country code
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.2.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { DEFAULT_COUNTRY_CODE } from '@lykmapipo/common';
 * // => 'TZ'
 */
const DEFAULT_COUNTRY_CODE = env.getString('DEFAULT_COUNTRY_CODE', 'TZ');

/**
 * @constant COUNTRY_CODES
 * @name COUNTRY_CODES
 * @type {string[]}
 * @description provide list of country codes
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { COUNTRY_CODES } from '@lykmapipo/common';
 * // => ['TZ', ...]
 */
const COUNTRY_CODES = common.mapToUpper(common.sortedUniq(lodash.keys(countriesList.countries)));

/**
 * @constant DEFAULT_CALLING_CODE
 * @name DEFAULT_CALLING_CODE
 * @type {string}
 * @description obtain default country calling code
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.2.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { DEFAULT_CALLING_CODE } from '@lykmapipo/common';
 * // => '255'
 */
const DEFAULT_CALLING_CODE = env.getString('DEFAULT_CALLING_CODE', '255');

/**
 * @constant CALLING_CODES
 * @name CALLING_CODES
 * @type {string[]}
 * @description provide list of country calling codes
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { CALLING_CODES } from '@lykmapipo/common';
 * // => ['255', ...]
 */
const CALLING_CODES = common.mapToUpper(
  common.sortedUniq(
    lodash.flattenDeep(
      lodash.map(countriesList.countries, (country) => {
        return (country.phone || '').split(',');
      })
    )
  )
);

/**
 * @constant DEFAULT_CITY_NAME
 * @name DEFAULT_CITY_NAME
 * @type {string}
 * @description obtain default city name
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.4.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { DEFAULT_CITY_NAME } from '@lykmapipo/common';
 * // => 'Dar es Salaam'
 */
const DEFAULT_CITY_NAME = env.getString(
  'DEFAULT_CITY_NAME',
  'Dar es Salaam'
);

exports.CALLING_CODES = CALLING_CODES;
exports.CONTINENT_NAMES = CONTINENT_NAMES;
exports.COUNTRY_CODES = COUNTRY_CODES;
exports.COUNTRY_NAMES = COUNTRY_NAMES;
exports.DEFAULT_CALLING_CODE = DEFAULT_CALLING_CODE;
exports.DEFAULT_CITY_NAME = DEFAULT_CITY_NAME;
exports.DEFAULT_CONTINENT_NAME = DEFAULT_CONTINENT_NAME;
exports.DEFAULT_COUNTRY_CODE = DEFAULT_COUNTRY_CODE;
exports.DEFAULT_COUNTRY_NAME = DEFAULT_COUNTRY_NAME;
exports.DEFAULT_DATETIME_FORMAT = DEFAULT_DATETIME_FORMAT;
exports.DEFAULT_DATE_FORMAT = DEFAULT_DATE_FORMAT;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
exports.DEFAULT_TIMEZONE = DEFAULT_TIMEZONE;
exports.DEFAULT_TIME_FORMAT = DEFAULT_TIME_FORMAT;
exports.LOCALES = LOCALES;
exports.TIMEZONES = TIMEZONES;
