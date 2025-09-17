import { Block } from 'payload'

export type Sizes = 'none' | 'small' | 'medium' | 'large'

export type Type = {
  topOverlap: Sizes
  bottomOverlap: Sizes
  stats: any
}

export const Statistics: Block = {
  slug: 'statistics',
  labels: {
    singular: 'Statistic',
    plural: 'Statistics',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'topOverlap',
          label: 'Top Overlap',
          type: 'select',
          admin: {
            width: '50%',
          },
          options: [
            {
              label: 'None',
              value: 'none',
            },
            {
              label: 'Small',
              value: 'small',
            },
            {
              label: 'Medium',
              value: 'medium',
            },
            {
              label: 'Large',
              value: 'large',
            },
          ],
        },
        {
          name: 'bottomOverlap',
          label: 'Bottom Overlap',
          type: 'select',
          admin: {
            width: '50%',
          },
          options: [
            {
              label: 'None',
              value: 'none',
            },
            {
              label: 'Small',
              value: 'small',
            },
            {
              label: 'Medium',
              value: 'medium',
            },
            {
              label: 'Large',
              value: 'large',
            },
          ],
        },
      ],
    },
  ],
}
