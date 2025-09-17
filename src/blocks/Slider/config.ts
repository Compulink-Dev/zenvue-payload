import { Media } from '@/payload-types'
import { Block } from 'payload'

export type Image = {
  image: Media
}

export type Type = {
  image: Image[]
}

export const Slider: Block = {
  slug: 'slider',
  labels: {
    singular: 'Slider',
    plural: 'Slider',
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
