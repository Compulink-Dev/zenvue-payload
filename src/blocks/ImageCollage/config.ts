import { Media } from '@/payload-types'
import { Block } from 'payload'

export type Image = {
  image: Media
}

export type Type = {
  image: Image[]
}

export const ImageCollage: Block = {
  slug: 'imageCarousel',
  labels: {
    singular: 'Image Collage',
    plural: 'Images Collages',
  },
  fields: [
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          type: 'upload',
          name: 'Image',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
