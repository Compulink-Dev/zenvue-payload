import { Block } from 'payload'

export const StickyContent: Block = {
  slug: 'stickyContent',
  labels: {
    singular: 'Sticky Content',
    plural: 'Sticky Contnets',
  },
  fields: [
    {
      name: 'sections',
      label: 'Sections',
      type: 'array',
      minRows: 2,
      maxRows: 8,
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
