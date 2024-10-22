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

export type PageBuilder = {
  _id: string;
  _type: "page-builder";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  pageBuilder?: Array<{
    _key: string;
  } & Hero | {
    _key: string;
  } & OffsetSection | {
    _key: string;
  } & Resource | {
    _key: string;
  } & Accordion>;
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
  primaryColor?: Color;
  roundingOfComponents?: "square" | "rounded" | "pill";
};

export type Accordion = {
  _type: "accordion";
  heading?: string;
  description?: string;
  accordionList?: Array<{
    heading?: string;
    body?: string;
    _key: string;
  }>;
};

export type OffsetSection = {
  _type: "offset-section";
  heading?: string;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  cta?: Cta;
};

export type Resource = {
  _type: "resource";
  heading?: string;
  description?: string;
  cardList?: Array<{
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
    title?: string;
    description?: string;
    cta?: Cta;
    _key: string;
  }>;
};

export type Hero = {
  _type: "hero";
  heading?: string;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  cta?: Cta;
};

export type Cta = {
  _type: "cta";
  showCTA?: boolean;
  description?: string;
  link?: string;
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

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Slug | PageBuilder | GeneralConfig | Accordion | OffsetSection | Resource | Hero | Cta | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Color | RgbaColor | HsvaColor | HslaColor;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: POSTS_QUERY
// Query: *[_type == "post" && defined(slug.current)][0...12]{  _id, title, slug}
export type POSTS_QUERYResult = Array<never>;
// Variable: POST_QUERY
// Query: *[_type == "post" && slug.current == $slug][0]{  title, body, mainImage}
export type POST_QUERYResult = null;
// Variable: GENERAL_CONFIG_QUERY
// Query: *[_type == "site"][0]{  eventName,   'logo':logo.asset->url,  description,  eventColors,  roundingOfComponents,  baseColor,  textColor}
export type GENERAL_CONFIG_QUERYResult = null;
// Variable: ACCORDION_QUERY
// Query: *[_type == "page-builder"][0]{  '':pageBuilder[_type == "accordion" && _key == $key][0]{   'id': _key,  heading,  description,    accordionList[]{      heading,      body,      'id': _key    }  },}
export type ACCORDION_QUERYResult = {
  : {
    id: string;
    heading: string | null;
    description: string | null;
    accordionList: Array<{
      heading: string | null;
      body: string | null;
      id: string;
    }> | null;
  } | null;
} | null;
// Variable: HERO_QUERY
// Query: *[_type == "page-builder"][0]{  '':pageBuilder[_type == "hero"  && _key == $key][0]{    'id': _key,    heading,    description,    'ctaDescription': cta.description,    'ctaLink': cta.link,    'image':image.asset->url,    'imageAlt':image.alt  },}
export type HERO_QUERYResult = {
  : {
    id: string;
    heading: string | null;
    description: string | null;
    ctaDescription: string | null;
    ctaLink: string | null;
    image: string | null;
    imageAlt: string | null;
  } | null;
} | null;
// Variable: RESOURCE_QUERY
// Query: *[_type == "page-builder"][0]{  '':pageBuilder[_type == "resource" && _key == $key][0]{   'id': _key,  heading,  description,     cardList[]{       'id': _key,        title,        description,        'ctaDescription': cta.description,        'ctaLink': cta.link,        'image':image.asset->url,        'imageAlt':image.alt     }  },}
export type RESOURCE_QUERYResult = {
  : {
    id: string;
    heading: string | null;
    description: string | null;
    cardList: Array<{
      id: string;
      title: string | null;
      description: string | null;
      ctaDescription: string | null;
      ctaLink: string | null;
      image: string | null;
      imageAlt: string | null;
    }> | null;
  } | null;
} | null;
// Variable: OFFSET_QUERY
// Query: *[_type == "page-builder"][0]{  '':pageBuilder[_type == "offset-section" && _key == $key][0]{    'id': _key,    heading,    description,    'ctaDescription': cta.description,    'ctaLink': cta.link,    'image':image.asset->url,    'imageAlt':image.alt  },}
export type OFFSET_QUERYResult = {
  : {
    id: string;
    heading: string | null;
    description: string | null;
    ctaDescription: string | null;
    ctaLink: string | null;
    image: string | null;
    imageAlt: string | null;
  } | null;
} | null;
// Variable: PAGEBUILDER_QUERY
// Query: *[_type == "page-builder"][0]{  title,    pageBuilder{    'id': _key,    'componentName':_type    }[]}
export type PAGEBUILDER_QUERYResult = {
  title: string | null;
  pageBuilder: Array<{
    id: string;
    componentName: "accordion";
  } | {
    id: string;
    componentName: "hero";
  } | {
    id: string;
    componentName: "offset-section";
  } | {
    id: string;
    componentName: "resource";
  }> | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"post\" && defined(slug.current)][0...12]{\n  _id, title, slug\n}": POSTS_QUERYResult;
    "*[_type == \"post\" && slug.current == $slug][0]{\n  title, body, mainImage\n}": POST_QUERYResult;
    "*[_type == \"site\"][0]{\n  eventName, \n  'logo':logo.asset->url,\n  description,\n  eventColors,\n  roundingOfComponents,\n  baseColor,\n  textColor\n}": GENERAL_CONFIG_QUERYResult;
    "*[_type == \"page-builder\"][0]{\n  '':pageBuilder[_type == \"accordion\" && _key == $key][0]{\n   'id': _key,\n  heading,\n  description,\n    accordionList[]{\n      heading,\n      body,\n      'id': _key\n    }\n  },\n}": ACCORDION_QUERYResult;
    "*[_type == \"page-builder\"][0]{\n  '':pageBuilder[_type == \"hero\"  && _key == $key][0]{\n    'id': _key,\n    heading,\n    description,\n    'ctaDescription': cta.description,\n    'ctaLink': cta.link,\n    'image':image.asset->url,\n    'imageAlt':image.alt\n  },\n}": HERO_QUERYResult;
    "*[_type == \"page-builder\"][0]{\n  '':pageBuilder[_type == \"resource\" && _key == $key][0]{\n   'id': _key,\n  heading,\n  description,\n     cardList[]{\n       'id': _key,\n        title,\n        description,\n        'ctaDescription': cta.description,\n        'ctaLink': cta.link,\n        'image':image.asset->url,\n        'imageAlt':image.alt\n     }\n  },\n}": RESOURCE_QUERYResult;
    "*[_type == \"page-builder\"][0]{\n  '':pageBuilder[_type == \"offset-section\" && _key == $key][0]{\n    'id': _key,\n    heading,\n    description,\n    'ctaDescription': cta.description,\n    'ctaLink': cta.link,\n    'image':image.asset->url,\n    'imageAlt':image.alt\n  },\n}": OFFSET_QUERYResult;
    "*[_type == \"page-builder\"][0]{\n  title,\n    pageBuilder{\n    'id': _key,\n    'componentName':_type\n    }[]\n}": PAGEBUILDER_QUERYResult;
  }
}
