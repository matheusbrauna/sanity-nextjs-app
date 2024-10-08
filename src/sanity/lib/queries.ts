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

export const FAQ_QUERY = defineQuery(`*[_type == "faq"][0]{
  'id': _id,
  heading,
  description,
  faqList[]{
    question,
    answer,
    'id': _key
  }
}`)

export const HERO_QUERY = defineQuery(`*[_type == "hero"][0]{
  'id': _id,
  heading,
  description,
  'ctaDescription': ctaInfo.ctaDescription,
  'ctaLink': ctaInfo.ctaLink,
  'image':heroImage.asset->url,
}`)

export const RESOURCE_QUERY = defineQuery(`*[_type == "resource"][0]{
  'id': _id,
  heading,
  description,
  cardList[]{
    title,
    description,
    showCTA,
    'ctaDescription': ctaInfo.ctaDescription,
    'ctaLink': ctaInfo.ctaLink,
    'id': _key,
    'image':image.asset->url,
  }
}`)

export const ABOUT_QUERY = defineQuery(`*[_type == "about"][0]{
  'id': _id,
  heading,
  description,
  'ctaDescription': ctaInfo.ctaDescription,
  'ctaLink': ctaInfo.ctaLink,
  'image':image.asset->url,
}`)

export const PAGEBUILDER_QUERY = defineQuery(`*[_type == "page-builder"][0]{
  title,
    pageBuilder{
    'id': _key,
    'componentName':_type
    }[]
}`)
