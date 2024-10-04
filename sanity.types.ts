/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type GeneralConfig = {
  _id: string;
  _type: "generalConfig";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  eventName?: string;
  logo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  description?: string;
  eventColors?: {
    primaryColor?: Color;
    secondaryColor?: Color;
  };
  baseColor?: "#ffffff" | "#fafafa" | "#f3f2f1" | "#000000" | "#0c0d0d" | "#0f0f10";
  textColor?: "#ffffff" | "#fafafa" | "#f3f2f1" | "#000000" | "#0c0d0d" | "#0f0f10";
  roundingOfComponents?: "square" | "rounded" | "pill";
};

export type Faq = {
  _id: string;
  _type: "faq";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  question?: string;
  answer?: string;
};

export type Hero = {
  _id: string;
  _type: "hero";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  cta?: string;
  heroImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Color = {
  _type: "color";
  hex?: string;
  alpha?: number;
  hsl?: HslaColor;
  hsv?: HsvaColor;
  rgb?: RgbaColor;
};

export type RgbaColor = {
  _type: "rgbaColor";
  r?: number;
  g?: number;
  b?: number;
  a?: number;
};

export type HsvaColor = {
  _type: "hsvaColor";
  h?: number;
  s?: number;
  v?: number;
  a?: number;
};

export type HslaColor = {
  _type: "hslaColor";
  h?: number;
  s?: number;
  l?: number;
  a?: number;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Slug | GeneralConfig | Faq | Hero | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Color | RgbaColor | HsvaColor | HslaColor;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: POSTS_QUERY
// Query: *[_type == "post" && defined(slug.current)][0...12]{  _id, title, slug}
export type POSTS_QUERYResult = Array<never>;
// Variable: POST_QUERY
// Query: *[_type == "post" && slug.current == $slug][0]{  title, body, mainImage}
export type POST_QUERYResult = null;
// Variable: GENERAL_CONFIG_QUERY
// Query: *[_type == "generalConfig"][0]{  eventName,   'logo':logo.asset->url,  description,  eventColors,  roundingOfComponents,  baseColor,  textColor}
export type GENERAL_CONFIG_QUERYResult = {
  eventName: string | null;
  logo: string | null;
  description: string | null;
  eventColors: {
    primaryColor?: Color;
    secondaryColor?: Color;
  } | null;
  roundingOfComponents: "pill" | "rounded" | "square" | null;
  baseColor: "#000000" | "#0c0d0d" | "#0f0f10" | "#f3f2f1" | "#fafafa" | "#ffffff" | null;
  textColor: "#000000" | "#0c0d0d" | "#0f0f10" | "#f3f2f1" | "#fafafa" | "#ffffff" | null;
} | null;
// Variable: FAQ_QUERY
// Query: *[_type == "faq"][0]{  'id': _id,  heading,  description,  faqList[]{    question,    answer,    'id': _key  }}
export type FAQ_QUERYResult = {
  id: string;
  heading: null;
  description: null;
  faqList: null;
} | null;
// Variable: HERO_QUERY
// Query: *[_type == "hero"][0]{  'id': _id,  heading,  description,  'ctaDescription': ctaInfo.ctaDescription,  'ctaLink': ctaInfo.ctaLink,  'image':heroImage.asset->url,}
export type HERO_QUERYResult = {
  id: string;
  heading: null;
  description: string | null;
  ctaDescription: null;
  ctaLink: null;
  image: string | null;
} | null;
// Variable: RESOURCE_QUERY
// Query: *[_type == "resource"][0]{  'id': _id,  heading,  description,  cardList[]{    title,    description,    showCTA,    'ctaDescription': ctaInfo.ctaDescription,    'ctaLink': ctaInfo.ctaLink,    'id': _key,    'image':image.asset->url,  }}
export type RESOURCE_QUERYResult = null;
// Variable: ABOUT_QUERY
// Query: *[_type == "about"][0]{  'id': _id,  heading,  description,  'ctaDescription': ctaInfo.ctaDescription,  'ctaLink': ctaInfo.ctaLink,  'image':image.asset->url,}
export type ABOUT_QUERYResult = null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"post\" && defined(slug.current)][0...12]{\n  _id, title, slug\n}": POSTS_QUERYResult;
    "*[_type == \"post\" && slug.current == $slug][0]{\n  title, body, mainImage\n}": POST_QUERYResult;
    "*[_type == \"generalConfig\"][0]{\n  eventName, \n  'logo':logo.asset->url,\n  description,\n  eventColors,\n  roundingOfComponents,\n  baseColor,\n  textColor\n}": GENERAL_CONFIG_QUERYResult;
    "*[_type == \"faq\"][0]{\n  'id': _id,\n  heading,\n  description,\n  faqList[]{\n    question,\n    answer,\n    'id': _key\n  }\n}": FAQ_QUERYResult;
    "*[_type == \"hero\"][0]{\n  'id': _id,\n  heading,\n  description,\n  'ctaDescription': ctaInfo.ctaDescription,\n  'ctaLink': ctaInfo.ctaLink,\n  'image':heroImage.asset->url,\n}": HERO_QUERYResult;
    "*[_type == \"resource\"][0]{\n  'id': _id,\n  heading,\n  description,\n  cardList[]{\n    title,\n    description,\n    showCTA,\n    'ctaDescription': ctaInfo.ctaDescription,\n    'ctaLink': ctaInfo.ctaLink,\n    'id': _key,\n    'image':image.asset->url,\n  }\n}": RESOURCE_QUERYResult;
    "*[_type == \"about\"][0]{\n  'id': _id,\n  heading,\n  description,\n  'ctaDescription': ctaInfo.ctaDescription,\n  'ctaLink': ctaInfo.ctaLink,\n  'image':image.asset->url,\n}": ABOUT_QUERYResult;
  }
}
