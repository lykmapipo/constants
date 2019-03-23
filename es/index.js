import moment from 'moment-timezone';
import { continents, countries } from 'countries-list';
import { sortedUniq } from '@lykmapipo/common';
import { getString, getStrings } from '@lykmapipo/env';
import { values, map, keys, toUpper, flattenDeep, startCase } from 'lodash';

const MAP_FEATURE_DEFAULT_NATURE = 'Other';
const MAP_FEATURE_DEFAULT_FAMILY = 'Other';
const MAP_FEATURE_DEFAULT_TYPE = 'Other';

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
 * const { CONTINENT_NAMES } = require('@lykmapipo/common');
 * // => ['Africa', ...]
 */
const CONTINENT_NAMES = sortedUniq([...values(continents)]);

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
 * const { COUNTRY_NAMES } = require('@lykmapipo/common');
 * // => ['Tanzania', ...]
 */
const COUNTRY_NAMES = sortedUniq([...map(countries, 'name')]);

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
 * const { COUNTRY_CODES } = require('@lykmapipo/common');
 * // => ['TZ', ...]
 */
const COUNTRY_CODES = map(sortedUniq(keys(countries)), toUpper);

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
 * const { CALLING_CODES } = require('@lykmapipo/common');
 * // => ['255', ...]
 */
const CALLING_CODES = map(
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
 * const { MAP_FEATURE_NATURES } = require('@lykmapipo/common');
 * // => ['Boundary', ...]
 */
const MAP_FEATURE_NATURES = sortedUniq([
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
 * const { MAP_FEATURE_FAMILIES } = require('@lykmapipo/common');
 * // => ['Administrative', ...]
 */
const MAP_FEATURE_FAMILIES = sortedUniq([
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
 * const { MAP_FEATURE_PLACES } = require('@lykmapipo/common');
 * // => ['country', ...]
 */
const MAP_FEATURE_PLACES = sortedUniq([
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
 * const { MAP_FEATURE_TYPES } = require('@lykmapipo/common');
 * // => ['Country', ...]
 */
const MAP_FEATURE_TYPES = map(
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

/* locales */
const DEFAULT_LOCALE = getString('DEFAULT_LOCALE', 'en');
const LOCALES = getStrings('LOCALES', DEFAULT_LOCALE);

/* timezones */
const DEFAULT_TIMEZONE = getString(
  'DEFAULT_TIMEZONE',
  moment.tz.guess()
);
const TIMEZONES = getStrings('TIMEZONES', moment.tz.names());

/* disaster phases */
const DEFAULT_DISASTER_PHASE = getString(
  'DEFAULT_DISASTER_PHASE',
  'Mitigation'
);
const DISASTER_PHASES = getStrings('DISASTER_PHASES', [
  'Mitigation',
  'Preparedness',
  'Response',
  'Recovery',
]);

export { CALLING_CODES, CONTINENT_NAMES, COUNTRY_CODES, COUNTRY_NAMES, DEFAULT_DISASTER_PHASE, DEFAULT_LOCALE, DEFAULT_TIMEZONE, DISASTER_PHASES, LOCALES, MAP_FEATURE_DEFAULT_FAMILY, MAP_FEATURE_DEFAULT_NATURE, MAP_FEATURE_DEFAULT_TYPE, MAP_FEATURE_FAMILIES, MAP_FEATURE_NATURES, MAP_FEATURE_PLACES, MAP_FEATURE_TYPES, TIMEZONES };
