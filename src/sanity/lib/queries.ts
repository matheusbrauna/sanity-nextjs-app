import { defineQuery } from 'next-sanity'

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`)

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`)

export const GENERAL_CONFIG_QUERY = defineQuery(`*[_type == "site"][0]{
  eventName, 
  'logo':logo.asset->url,
  description,
  primaryColor,
  roundingOfComponents,
}`)

export const ACCORDION_QUERY = defineQuery(`*[_type == "page-builder"][0]{
  '':pageBuilder[_type == "accordion" && _key == $key][0]{
   'id': _key,
  heading,
  description,
    accordionList[]{
      heading,
      body,
      'id': _key
    }
  },
}`)

export const HERO_QUERY = defineQuery(`*[_type == "page-builder"][0]{
  '':pageBuilder[_type == "hero"  && _key == $key][0]{
    'id': _key,
    heading,
    description,
    'ctaDescription': cta.description,
    'ctaLink': cta.link,
    'image':image.asset->url,
    'imageAlt':image.alt
  },
}`)

export const RESOURCE_QUERY = defineQuery(`*[_type == "page-builder"][0]{
  '':pageBuilder[_type == "resource" && _key == $key][0]{
   'id': _key,
  heading,
  description,
     cardList[]{
       'id': _key,
        title,
        description,
        'ctaDescription': cta.description,
        'ctaLink': cta.link,
        'image':image.asset->url,
        'imageAlt':image.alt
     }
  },
}`)

export const OFFSET_QUERY = defineQuery(`*[_type == "page-builder"][0]{
  '':pageBuilder[_type == "offset-section" && _key == $key][0]{
    'id': _key,
    heading,
    description,
    'ctaDescription': cta.description,
    'ctaLink': cta.link,
    'image':image.asset->url,
    'imageAlt':image.alt
  },
}`)

export const PAGEBUILDER_QUERY = defineQuery(`*[_type == "page-builder"][0]{
  title,
    pageBuilder{
    'id': _key,
    'componentName':_type
    }[]
}`)
