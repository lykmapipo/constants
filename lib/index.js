'use strict';

const moment = require('moment-timezone');
const countriesList = require('countries-list');
const common = require('@lykmapipo/common');
const env = require('@lykmapipo/env');
const lodash = require('lodash');

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
const CONTINENT_NAMES = common.sortedUniq([...lodash.values(countriesList.continents)]);

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
const COUNTRY_NAMES = common.sortedUniq([...lodash.map(countriesList.countries, 'name')]);

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
const COUNTRY_CODES = lodash.map(common.sortedUniq(lodash.keys(countriesList.countries)), lodash.toUpper);

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
const CALLING_CODES = lodash.map(
  common.sortedUniq(
    lodash.flattenDeep(
      lodash.map(countriesList.countries, country => {
        return (country.phone || '').split(',');
      })
    ),
    lodash.toUpper
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

/* locales */
const DEFAULT_LOCALE = env.getString('DEFAULT_LOCALE', 'en');
const LOCALES = env.getStrings('LOCALES', DEFAULT_LOCALE);

/* timezones */
const DEFAULT_TIMEZONE = env.getString(
  'DEFAULT_TIMEZONE',
  moment.tz.guess()
);
const TIMEZONES = env.getStrings('TIMEZONES', moment.tz.names());

/* disaster phases */
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
exports.DEFAULT_DISASTER_PHASE = DEFAULT_DISASTER_PHASE;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
exports.DEFAULT_TIMEZONE = DEFAULT_TIMEZONE;
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
