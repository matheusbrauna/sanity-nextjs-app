export type SanityImageQueryResult = {
  asset: { _ref: string }
  crop: {
    _type: 'sanity.imageCrop'
    bottom: number
    left: number
    right: number
    top: number
  }
  hotspot: {
    _type: 'sanity.imageHotspot'
    height: number
    width: number
    x: number
    y: number
  }
}
