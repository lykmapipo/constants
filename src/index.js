import moment from 'moment-timezone';
import { continents, countries } from 'countries-list';
import { sortedUniq } from '@lykmapipo/common';
import { getString, getStrings } from '@lykmapipo/env';
import { flattenDeep, keys, map, values, startCase, toUpper } from 'lodash';

export const MAP_FEATURE_DEFAULT_NATURE = 'Other';
export const MAP_FEATURE_DEFAULT_FAMILY = 'Other';
export const MAP_FEATURE_DEFAULT_TYPE = 'Other';

/**
 * @constant DEFAULT_LOCALE
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
 * @constant
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
 * @constant
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
 * @constant
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
export const COUNTRY_CODES = map(sortedUniq(keys(countries)), toUpper);

/**
 * @constant
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
export const CALLING_CODES = map(
  sortedUniq(
    flattenDeep(
      map(countries, country => {
        return (country.phone || '').split(',');
      })
    ),
    toUpper
  )
);

/**
 * @constant
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
 * @constant
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
 * @constant
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
 * @constant
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

/* disaster phases */
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
