import { backgroundColor } from '@/fields/BackgroundColor'
import { Media } from '@/payload-types'
import { Block } from 'payload'

export type Image = {
  image: Media
  content?: string
}

export type Type = {
  image: Image[]
  backgroundColor: any
}

export const ImageGrid: Block = {
  slug: 'imageGrid',
  labels: {
    singular: 'Image Grid',
    plural: 'Images Grids',
  },
  fields: [
    backgroundColor,
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      minRows: 3,
      maxRows: 12,
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
