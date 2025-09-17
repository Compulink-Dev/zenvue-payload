import { backgroundColor } from '@/fields/BackgroundColor'
import { Block } from 'payload'

export const StudyCase: Block = {
  slug: 'studyCase',
  labels: {
    singular: 'Study Case',
    plural: 'Study Cases',
  },
  fields: [
    backgroundColor,
    {
      name: 'studies',
      type: 'relationship',
      relationTo: 'studies',
      hasMany: true,
      required: true,
    },
  ],
}
