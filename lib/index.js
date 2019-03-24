'use strict';

const moment = require('moment-timezone');
const countriesList = require('countries-list');
const common = require('@lykmapipo/common');
const env = require('@lykmapipo/env');
const lodash = require('lodash');

/**
 * @constant DEFAULT_LOCALE
 * @name DEFAULT_LOCALE
 * @type {String}
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
 * @type {String[]}
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
 * @type {String}
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
 * @type {String[]}
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
 * @type {String}
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
 * @type {String}
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
 * @type {String}
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
 * @type {String}
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
 * @type {String[]}
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
 * @type {String}
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
 * @type {String[]}
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
 * @type {String}
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
 * @type {String[]}
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
 * @type {String}
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
 * @type {String[]}
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
      lodash.map(countriesList.countries, country => {
        return (country.phone || '').split(',');
      })
    )
  )
);

const MAP_FEATURE_DEFAULT_NATURE = 'Other';

const MAP_FEATURE_DEFAULT_FAMILY = 'Other';

const MAP_FEATURE_DEFAULT_TYPE = 'Other';

/**
 * @constant MAP_FEATURE_NATURES
 * @name MAP_FEATURE_NATURES
 * @type {String[]}
 * @description provide map feature natures as per OSM primary map
 * features tag key
 * @author lally elias <lallyelias87@mail.com>
 * @see {@link https://wiki.openstreetmap.org/wiki/Map_Features}
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { MAP_FEATURE_NATURES } from '@lykmapipo/common';
 * // => ['Boundary', ...]
 */
const MAP_FEATURE_NATURES = common.sortedUniq([
  'Aerialway',
  'Aeroway',
  'Barrier',
  'Boundary',
  'Building',
  'Emergency',
  'Highway',
  'Man Made',
  'Natural',
  'Office',
  'Power',
  'Public Transport',
  'Railway',
  'Route',
  'Shop',
  'Telecom',
  'Tourism',
  'Waterway',
  MAP_FEATURE_DEFAULT_NATURE,
]);

/**
 * @constant MAP_FEATURE_FAMILIES
 * @name MAP_FEATURE_FAMILIES
 * @type {String[]}
 * @description provide map feature family as per OSM primary map
 * features tag value
 * @author lally elias <lallyelias87@mail.com>
 * @see {@link https://wiki.openstreetmap.org/wiki/Map_Features}
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { MAP_FEATURE_FAMILIES } from '@lykmapipo/common';
 * // => ['Administrative', ...]
 */
const MAP_FEATURE_FAMILIES = common.sortedUniq([
  // 'Aerialway',
  // 'Aeroway',
  // 'Barrier',

  // 'Boundary',
  'Administrative',

  // 'Building',
  'Commercial',
  'Hospital',
  'Industrial',
  'Religious',
  'Residential',
  'School',
  'Stadium',
  'Toilets',
  'Warehouse',

  // 'Emergency',
  'Ambulance Station',
  'Assembly Point',
  'Fire Hydrant',
  'First Aid Kit',
  'Evacuation Centre',

  // 'Highway',
  'Road',
  'Residential',

  // 'Man Made',
  'Bridge',
  'Pipeline',
  'Wastewater Plant',

  // 'Natural',
  'Wetland',

  // 'Office',
  // 'Power',
  'Cable',
  'Generator',
  'Line',
  'Plant',
  'Pole',
  'Transformer',

  // 'Public Transport',
  'Platform',
  'Station',
  'Stop Area',
  'Stop Position',

  // 'Railway',
  'Platform',
  'Rail',
  'Station',

  // 'Route',
  'Evacuation',

  // 'Shop',
  // 'Telecom',
  // 'Tourism',
  // 'Waterway'
  'Ditch',
  'Drain',
  'River',
  'Stream',

  // Other
  MAP_FEATURE_DEFAULT_FAMILY,
]);

/**
 * @constant MAP_FEATURE_PLACES
 * @name MAP_FEATURE_PLACES
 * @type {String[]}
 * @description provide map feature human readable places tags
 * features tag value
 * @author lally elias <lallyelias87@mail.com>
 * @see {@link https://wiki.openstreetmap.org/wiki/Map_Features}
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { MAP_FEATURE_PLACES } from '@lykmapipo/common';
 * // => ['country', ...]
 */
const MAP_FEATURE_PLACES = common.sortedUniq([
  'city',
  'continent',
  'country',
  'county',
  'district',
  'hamlet',
  'municipality',
  'neighbourhood',
  'province',
  'region',
  'state',
  'street',
  'town',
  'village',
  'ward',
]);

/**
 * @constant MAP_FEATURE_TYPES
 * @name MAP_FEATURE_TYPES
 * @type {String[]}
 * @description provide map feature human readable types
 * features tag value
 * @author lally elias <lallyelias87@mail.com>
 * @see {@link https://wiki.openstreetmap.org/wiki/Map_Features}
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * import { MAP_FEATURE_TYPES } from '@lykmapipo/common';
 * // => ['Country', ...]
 */
const MAP_FEATURE_TYPES = lodash.map(
  common.sortedUniq(
    lodash.flattenDeep([
      // 'Aerialway',
      // 'Aeroway',
      // 'Barrier',
      // 'Boundary',
      MAP_FEATURE_PLACES,
      // 'Building',
      // 'Emergency',
      // 'Highway',
      // 'Man Made',
      // 'Natural',
      // 'Office',
      // 'Power',
      // 'Public Transport',
      // 'Railway',
      // 'Route',
      // 'Shop',
      // 'Telecom',
      // 'Tourism',
      // 'Waterway'
      // Other
      MAP_FEATURE_DEFAULT_TYPE,
    ])
  ),
  lodash.startCase
);

const DEFAULT_DISASTER_PHASE = env.getString(
  'DEFAULT_DISASTER_PHASE',
  'Mitigation'
);

const DISASTER_PHASES = env.getStrings('DISASTER_PHASES', [
  'Mitigation',
  'Preparedness',
  'Response',
  'Recovery',
]);

exports.CALLING_CODES = CALLING_CODES;
exports.CONTINENT_NAMES = CONTINENT_NAMES;
exports.COUNTRY_CODES = COUNTRY_CODES;
exports.COUNTRY_NAMES = COUNTRY_NAMES;
exports.DEFAULT_CALLING_CODE = DEFAULT_CALLING_CODE;
exports.DEFAULT_CONTINENT_NAME = DEFAULT_CONTINENT_NAME;
exports.DEFAULT_COUNTRY_CODE = DEFAULT_COUNTRY_CODE;
exports.DEFAULT_COUNTRY_NAME = DEFAULT_COUNTRY_NAME;
exports.DEFAULT_DATETIME_FORMAT = DEFAULT_DATETIME_FORMAT;
exports.DEFAULT_DATE_FORMAT = DEFAULT_DATE_FORMAT;
exports.DEFAULT_DISASTER_PHASE = DEFAULT_DISASTER_PHASE;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
exports.DEFAULT_TIMEZONE = DEFAULT_TIMEZONE;
exports.DEFAULT_TIME_FORMAT = DEFAULT_TIME_FORMAT;
exports.DISASTER_PHASES = DISASTER_PHASES;
exports.LOCALES = LOCALES;
exports.MAP_FEATURE_DEFAULT_FAMILY = MAP_FEATURE_DEFAULT_FAMILY;
exports.MAP_FEATURE_DEFAULT_NATURE = MAP_FEATURE_DEFAULT_NATURE;
exports.MAP_FEATURE_DEFAULT_TYPE = MAP_FEATURE_DEFAULT_TYPE;
exports.MAP_FEATURE_FAMILIES = MAP_FEATURE_FAMILIES;
exports.MAP_FEATURE_NATURES = MAP_FEATURE_NATURES;
exports.MAP_FEATURE_PLACES = MAP_FEATURE_PLACES;
exports.MAP_FEATURE_TYPES = MAP_FEATURE_TYPES;
exports.TIMEZONES = TIMEZONES;
