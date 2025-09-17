import { backgroundColor } from '@/fields/BackgroundColor'
import { Block } from 'payload'

export const ServiceCase: Block = {
  slug: 'serviceCase',
  labels: {
    singular: 'Service Case',
    plural: 'Service Cases',
  },
  fields: [
    backgroundColor,
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'studies',
      hasMany: true,
      required: true,
    },
  ],
}
