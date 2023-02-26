import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Homepage
 *
 *
 */
export interface Homepage extends SanityDocument {
  _type: "homepage";

  /**
   * Name of document, DO NOT CHANGE — `string`
   *
   *
   */
  name: string;

  /**
   * Value Proposition — `localeString`
   *
   *
   */
  valueProp: LocaleString;

  /**
   * Core Values — `array`
   *
   *
   */
  coreValues: Array<SanityKeyed<CoreValue>>;

  /**
   * Mission Statement — `localeText`
   *
   *
   */
  missionStatement: LocaleText;
}

export type LocaleString = {
  _type: "localeString";
  /**
   * English — `string`
   *
   *
   */
  en?: string;

  /**
   * French — `string`
   *
   *
   */
  fr?: string;

  /**
   * Chinese Simplified — `string`
   *
   *
   */
  zhs?: string;

  /**
   * Chinese Traditional — `string`
   *
   *
   */
  zht?: string;
};

export type LocaleText = {
  _type: "localeText";
  /**
   * English — `text`
   *
   *
   */
  en?: string;

  /**
   * French — `text`
   *
   *
   */
  fr?: string;

  /**
   * Chinese Simplified — `text`
   *
   *
   */
  zhs?: string;

  /**
   * Chinese Traditional — `text`
   *
   *
   */
  zht?: string;
};

export type CoreValue = {
  _type: "coreValue";
  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Core Value — `localeString`
   *
   *
   */
  coreValue: LocaleString;

  /**
   * Description of your core value — `localeText`
   *
   *
   */
  description: LocaleText;
};

export type Documents = Homepage;
