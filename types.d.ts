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
   * Value Proposition — `string`
   *
   *
   */
  valueProp: string;

  /**
   * Core Values — `array`
   *
   *
   */
  coreValues: Array<SanityKeyed<CoreValue>>;

  /**
   * Mission Statement — `text`
   *
   *
   */
  missionStatement: text;

  /**
   * Featured Project — `featureProject`
   *
   *
   */
  featureProject: FeatureProject;
}

export type string = string
export type text = string

export type CoreValue = {
  _type: "coreValue";
  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Core Value — `string`
   *
   *
   */
  coreValue: string;

  /**
   * Description of your core value — `text`
   *
   *
   */
  description: text;
};

export type FeatureProject = {
  _type: "featureProject";
  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Description — `text`
   *
   *
   */
  desc: text;

  /**
   * Project Images — `array`
   *
   *
   */
  projectImages: Array<SanityKeyed<ImageWithAlt>>;
};

export type ImageWithAlt = {
  _type: "imageWithAlt";
  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Image — `image`
   *
   *
   */
  image: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Alt Text — `string`
   *
   *
   */
  alt?: string;
};

export type Documents = Homepage;
