import { defineQuery } from 'next-sanity'

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`)

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`)

export const GENERAL_CONFIG_QUERY = defineQuery(`*[_type == "generalConfig"][0]{
  eventName, 
  'logo':logo.asset->url,
  description,
  eventColors,
  roundingOfComponents,
  baseColor,
  textColor
}`)

export const FAQ_QUERY = defineQuery(`*[_type == "page-builder"][0]{
  '':pageBuilder[_type == "faq" && _key == $key][0]{
   'id': _key,
  heading,
  description,
    faqList[]{
      question,
      answer,
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

export const ABOUT_QUERY = defineQuery(`*[_type == "page-builder"][0]{
  '':pageBuilder[_type == "about" && _key == $key][0]{
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
