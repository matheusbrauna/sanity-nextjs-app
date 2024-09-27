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
  baseColor
}`)
