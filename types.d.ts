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
   * Value Proposition — `string`
   *
   *
   */
  valueProp: string;

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
   * Value Proposition — `localeLines`
   *
   *
   */
  valueProp: LocaleLines;

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
 * Jacklin Page
 *
 *
 */
export interface JacklinPage extends SanityDocument {
  _type: "jacklinPage";

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
   * Background Image — `imageWithAlt`
   *
   *
   */
  backgroundImage: ImageWithAlt;

  /**
   * Jacklin Section 1 — `jacklinSection1`
   *
   *
   */
  jacklinSection1: JacklinSection1;

  /**
   * Jacklin Section 2 — `jacklinSection2`
   *
   *
   */
  jacklinSection2: JacklinSection2;
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

export type FeatureProject = {
  _type: "featureProject";
  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Title — `localeLines`
   *
   *
   */
  title: LocaleLines;

  /**
   * Description — `localeParagraphs`
   *
   *
   */
  desc: LocaleParagraphs;

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

export type AboutSection = {
  _type: "aboutSection";
  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Core Values — `localeLines`
   *
   *
   */
  coreValues: LocaleLines;

  /**
   * Mission Statement — `localeParagraphs`
   *
   *
   */
  missionStatement: LocaleParagraphs;

  /**
   * CTA — `string`
   *
   *
   */
  cta: string;
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

export type JacklinSection1 = {
  _type: "jacklinSection1";
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
   * Caption Line 1 — `string`
   *
   *
   */
  caption1: string;

  /**
   * Caption Line 2 — `string`
   *
   *
   */
  caption2: string;

  /**
   * Description — `string`
   *
   *
   */
  description: string;
};

export type JacklinSection2 = {
  _type: "jacklinSection2";
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
  description: string;

  /**
   * Image Gallery — `array`
   *
   *
   */
  imageGallery: Array<SanityKeyed<ImageWithAlt>>;
};

export type LocaleLines = {
  _type: "localeLines";
  /**
   * Lines — `array`
   *
   *
   */
  lines: Array<
    SanityKeyed<{
      _type: "line";
      /**
       * Name — `string`
       *
       *
       */
      name: string;

      /**
       * Value — `string`
       *
       *
       */
      value: string;
    }>
  >;
};

export type LocaleParagraphs = {
  _type: "localeParagraphs";
  /**
   * Paragraphs — `array`
   *
   *
   */
  paragraphs: Array<
    SanityKeyed<{
      _type: "paragraph";
      /**
       * Name — `string`
       *
       *
       */
      name: string;

      /**
       * Value — `string`
       *
       *
       */
      value: string;
    }>
  >;
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

export type PdfFileLink = {
  _type: "pdfFileLink";
  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Display Name — `string`
   *
   *
   */
  displayName: string;

  /**
   * PDF — `file`
   *
   *
   */
  pdf: { _type: "file"; asset: SanityReference<any> };
};

export type Documents = AboutUsPage | Homepage | JacklinPage | Theme;
