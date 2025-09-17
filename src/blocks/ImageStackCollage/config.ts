import { Media } from '@/payload-types'
import { Block } from 'payload'

export type Image = {
  image: Media
}

export type Type = {
  image: Image[]
}

export const ImageStackCollage: Block = {
  slug: 'imageStackCollage',
  labels: {
    singular: 'Image Stack Collage',
    plural: 'Images Stack Collages',
  },
  fields: [
    {
      name: 'stats',
      label: 'Statistics',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        // stat
      ],
    },
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
