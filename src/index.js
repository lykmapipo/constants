import moment from 'moment-timezone';
import { continents, countries } from 'countries-list';
import { mapToUpper, sortedUniq } from '@lykmapipo/common';
import { getString, getStrings } from '@lykmapipo/env';
import { flattenDeep, keys, map, values, startCase } from 'lodash';

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
export const DEFAULT_LOCALE = getString('DEFAULT_LOCALE', 'en');

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
export const LOCALES = sortedUniq(getStrings('LOCALES', DEFAULT_LOCALE));

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
export const DEFAULT_TIMEZONE =
  getString('TZ') || // honour heroku
  getString('DEFAULT_TIMEZONE') ||
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
export const TIMEZONES = sortedUniq(getStrings('TIMEZONES', moment.tz.names()));

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
export const DEFAULT_DATE_FORMAT = getString(
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
export const DEFAULT_TIME_FORMAT = getString('DEFAULT_TIME_FORMAT', 'HH:mm:ss');

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
export const DEFAULT_DATETIME_FORMAT = getString(
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
export const DEFAULT_CONTINENT_NAME = getString(
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
export const CONTINENT_NAMES = sortedUniq([...values(continents)]);

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
export const DEFAULT_COUNTRY_NAME = getString(
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
export const COUNTRY_NAMES = sortedUniq([...map(countries, 'name')]);

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
export const DEFAULT_COUNTRY_CODE = getString('DEFAULT_COUNTRY_CODE', 'TZ');

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
export const COUNTRY_CODES = mapToUpper(sortedUniq(keys(countries)));

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
export const DEFAULT_CALLING_CODE = getString('DEFAULT_CALLING_CODE', '255');

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
export const CALLING_CODES = mapToUpper(
  sortedUniq(
    flattenDeep(
      map(countries, country => {
        return (country.phone || '').split(',');
      })
    )
  )
);

/**
 * @constant DEFAULT_CITY_NAME
 * @name DEFAULT_CITY_NAME
 * @type {String}
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
export const DEFAULT_CITY_NAME = getString(
  'DEFAULT_CITY_NAME',
  'Dar es Salaam'
);

export const MAP_FEATURE_DEFAULT_NATURE = 'Other';

export const MAP_FEATURE_DEFAULT_FAMILY = 'Other';

export const MAP_FEATURE_DEFAULT_TYPE = 'Other';

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
export const MAP_FEATURE_NATURES = sortedUniq([
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
export const MAP_FEATURE_FAMILIES = sortedUniq([
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
export const MAP_FEATURE_PLACES = sortedUniq([
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
export const MAP_FEATURE_TYPES = map(
  sortedUniq(
    flattenDeep([
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
  startCase
);

export const DEFAULT_DISASTER_PHASE = getString(
  'DEFAULT_DISASTER_PHASE',
  'Mitigation'
);

export const DISASTER_PHASES = getStrings('DISASTER_PHASES', [
  'Mitigation',
  'Preparedness',
  'Response',
  'Recovery',
]);
