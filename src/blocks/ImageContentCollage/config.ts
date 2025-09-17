import { link } from '@/fields/link'
import { Media } from '@/payload-types'
import { Block } from 'payload'

export type Image = {
  image: Media
}

export type Type = {
  image: Image[]
}

export const ImageContentCollage: Block = {
  slug: 'imageContentCarousel',
  labels: {
    singular: 'Image Content Collage',
    plural: 'Images Content Collages',
  },
  fields: [
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
    },
    {
      name: 'enabledCTA',
      label: 'Enabled Call To Action',
      type: 'checkbox',
    },
    link({
      overrides: {
        admin: {
          condition: (_data, siblingData) => {
            return Boolean(siblingData?.enableLink)
          },
        },
      },
    }),
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
