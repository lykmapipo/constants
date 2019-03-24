import moment from 'moment-timezone';
import { expect } from 'chai';
import {
  DEFAULT_LOCALE,
  LOCALES,
  DEFAULT_TIMEZONE,
  TIMEZONES,
  DEFAULT_DATE_FORMAT,
  DEFAULT_TIME_FORMAT,
  DEFAULT_CONTINENT_NAME,
  CONTINENT_NAMES,
  DEFAULT_COUNTRY_NAME,
  COUNTRY_NAMES,
  DEFAULT_COUNTRY_CODE,
  COUNTRY_CODES,
  DEFAULT_CALLING_CODE,
  CALLING_CODES,
  MAP_FEATURE_DEFAULT_NATURE,
  MAP_FEATURE_DEFAULT_FAMILY,
  MAP_FEATURE_DEFAULT_TYPE,
  MAP_FEATURE_NATURES,
  MAP_FEATURE_FAMILIES,
  MAP_FEATURE_PLACES,
} from '../src/index';

describe('constants', () => {
  it('shoulde expose default locale', () => {
    expect(DEFAULT_LOCALE).to.exist;
    expect(DEFAULT_LOCALE).to.be.a('string');
    expect(DEFAULT_LOCALE).to.be.equal('en');
  });

  it('shoulde expose locales list', () => {
    expect(LOCALES).to.exist;
    expect(LOCALES).to.be.an('array');
    expect(LOCALES).to.be.to.have.length.at.least(1);
    expect(LOCALES).to.include('en');
  });

  it('shoulde expose default timezone', () => {
    expect(DEFAULT_TIMEZONE).to.exist;
    expect(DEFAULT_TIMEZONE).to.be.a('string');
    expect(DEFAULT_TIMEZONE).to.be.oneOf([moment.tz.guess(), process.env.TZ]);
  });

  it('shoulde expose timezones list', () => {
    expect(TIMEZONES).to.exist;
    expect(TIMEZONES).to.be.an('array');
    expect(TIMEZONES).to.be.to.have.length.at.least(1);
    expect(TIMEZONES).to.include(...moment.tz.names());
  });

  it('shoulde expose default date format', () => {
    expect(DEFAULT_DATE_FORMAT).to.exist;
    expect(DEFAULT_DATE_FORMAT).to.be.a('string');
    expect(DEFAULT_DATE_FORMAT).to.be.equal('YYYY-MM-DD');
  });

  it('shoulde expose default time format', () => {
    expect(DEFAULT_TIME_FORMAT).to.exist;
    expect(DEFAULT_TIME_FORMAT).to.be.a('string');
    expect(DEFAULT_TIME_FORMAT).to.be.equal('HH:mm:ss');
  });

  it('shoulde expose default continent name', () => {
    expect(DEFAULT_CONTINENT_NAME).to.exist;
    expect(DEFAULT_CONTINENT_NAME).to.be.a('string');
    expect(DEFAULT_CONTINENT_NAME).to.be.equal('Africa');
  });

  it('shoulde expose continent names', () => {
    expect(CONTINENT_NAMES).to.exist;
    expect(CONTINENT_NAMES).to.be.an('array');
    expect(CONTINENT_NAMES).to.be.to.have.length.at.least(1);
    expect(CONTINENT_NAMES).to.include('Africa');
  });

  it('shoulde expose default country name', () => {
    expect(DEFAULT_COUNTRY_NAME).to.exist;
    expect(DEFAULT_COUNTRY_NAME).to.be.a('string');
    expect(DEFAULT_COUNTRY_NAME).to.be.equal('Tanzania');
  });

  it('shoulde expose country names', () => {
    expect(COUNTRY_NAMES).to.exist;
    expect(COUNTRY_NAMES).to.be.an('array');
    expect(COUNTRY_NAMES).to.be.to.have.length.at.least(1);
    expect(COUNTRY_NAMES).to.include('Tanzania');
  });

  it('shoulde expose default country code', () => {
    expect(DEFAULT_COUNTRY_CODE).to.exist;
    expect(DEFAULT_COUNTRY_CODE).to.be.a('string');
    expect(DEFAULT_COUNTRY_CODE).to.be.equal('TZ');
  });

  it('shoulde expose country codes', () => {
    expect(COUNTRY_CODES).to.exist;
    expect(COUNTRY_CODES).to.be.an('array');
    expect(COUNTRY_CODES).to.be.to.have.length.at.least(1);
    expect(COUNTRY_CODES).to.include('TZ');
  });

  it('shoulde expose default calling code', () => {
    expect(DEFAULT_CALLING_CODE).to.exist;
    expect(DEFAULT_CALLING_CODE).to.be.a('string');
    expect(DEFAULT_CALLING_CODE).to.be.equal('255');
  });

  it('shoulde expose country calling codes', () => {
    expect(CALLING_CODES).to.exist;
    expect(CALLING_CODES).to.be.an('array');
    expect(CALLING_CODES).to.be.to.have.length.at.least(1);
    expect(CALLING_CODES).to.include('255');
  });

  it('shoulde expose map features default values', () => {
    expect(MAP_FEATURE_DEFAULT_NATURE).to.be.equal('Other');
    expect(MAP_FEATURE_DEFAULT_FAMILY).to.be.equal('Other');
    expect(MAP_FEATURE_DEFAULT_TYPE).to.be.equal('Other');
  });

  it('shoulde expose map features natures', () => {
    expect(MAP_FEATURE_NATURES).to.exist;
    expect(MAP_FEATURE_NATURES).to.be.an('array');
    expect(MAP_FEATURE_NATURES).to.be.to.have.length.at.least(1);
    expect(MAP_FEATURE_NATURES).to.include('Boundary');
  });

  it('shoulde expose map features families', () => {
    expect(MAP_FEATURE_FAMILIES).to.exist;
    expect(MAP_FEATURE_FAMILIES).to.be.an('array');
    expect(MAP_FEATURE_FAMILIES).to.be.to.have.length.at.least(1);
    expect(MAP_FEATURE_FAMILIES).to.include('Administrative');
  });

  it('shoulde expose map feature places tags', () => {
    expect(MAP_FEATURE_PLACES).to.exist;
    expect(MAP_FEATURE_PLACES).to.be.an('array');
    expect(MAP_FEATURE_PLACES).to.be.to.have.length.at.least(1);
    expect(MAP_FEATURE_PLACES).to.include('country');
  });
});
