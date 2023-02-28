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
 * About Us Page
 *
 *
 */
export interface AboutUsPage extends SanityDocument {
  _type: "aboutUsPage";

  /**
   * Name of document, DO NOT CHANGE — `string`
   *
   *
   */
  name: string;

  /**
   * Company Description — `string`
   *
   *
   */
  companyDescription: string;

  /**
   * Founders — `array`
   *
   *
   */
  partnerDetails: Array<SanityKeyed<PartnerDetail>>;
}

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
   * About Section — `aboutSection`
   *
   *
   */
  aboutSection: AboutSection;

  /**
   * Featured Project — `featureProject`
   *
   *
   */
  featureProject: FeatureProject;

  /**
   * Partner Overviews — `array`
   *
   *
   */
  partnerOverviews: Array<SanityKeyed<PartnerOverview>>;
}

/**
 * Theme
 *
 *
 */
export interface Theme extends SanityDocument {
  _type: "theme";

  /**
   * Name of document, DO NOT CHANGE — `string`
   *
   *
   */
  name: string;

  /**
   * Background Video — `file`
   *
   *
   */
  backgroundVideo: { _type: "file"; asset: SanityReference<any> };
}

export type AdditionalContentBlock = {
  _type: "additionalContentBlock";
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
   * Additional Description — `block`
   *
   *
   */
  additionalDescription?: block;
};

export type AdditionalContentImage = {
  _type: "additionalContentImage";
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
   * Additional Content Image — `imageWithAlt`
   *
   *
   */
  additionalContentImage: ImageWithAlt;

  /**
   * Description — `string`
   *
   *
   */
  description: string;
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
   * Core Value — `string`
   *
   *
   */
  coreValue: string;

  /**
   * Description of your core value — `string`
   *
   *
   */
  description: string;
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
   * Description — `string`
   *
   *
   */
  desc: string;

  /**
   * CTA — `string`
   *
   *
   */
  cta: string;

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

export type AboutSection = {
  _type: "aboutSection";
  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Core Values — `array`
   *
   *
   */
  coreValues: Array<SanityKeyed<CoreValue>>;

  /**
   * Mission Statement — `string`
   *
   *
   */
  missionStatement: string;

  /**
   * CTA — `string`
   *
   *
   */
  cta: string;
};

export type PartnerDetail = {
  _type: "partnerDetail";
  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Profile Picture — `imageWithAlt`
   *
   *
   */
  profilePicture: ImageWithAlt;

  /**
   * Founder Name — `string`
   *
   *
   */
  founderName: string;

  /**
   * Founder Title — `string`
   *
   *
   */
  founderTitle: string;

  /**
   * Founder Subtitle — `string`
   *
   *
   */
  founderSubtitle: string;

  /**
   * Founder Description — `block`
   *
   *
   */
  founderDescription: block;

  /**
   * Additional Contents — `array`
   *
   *
   */
  additionalContents?: Array<
    SanityKeyed<AdditionalContentBlock> | SanityKeyed<AdditionalContentImage>
  >;
};

export type PartnerOverview = {
  _type: "partnerOverview";
  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Profile Picture — `imageWithAlt`
   *
   *
   */
  profilePicture: ImageWithAlt;

  /**
   * Founder Name — `string`
   *
   *
   */
  founderName: string;

  /**
   * Founder Title — `string`
   *
   *
   */
  founderTitle: string;

  /**
   * Founder Summary — `string`
   *
   *
   */
  founderSummary: string;

  /**
   * CTA — `string`
   *
   *
   */
  cta: string;
};

export type Documents = AboutUsPage | Homepage | Theme;
