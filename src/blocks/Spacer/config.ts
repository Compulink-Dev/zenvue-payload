import { Block } from 'payload'

export const Spacer: Block = {
  slug: 'spacer',
  fields: [
    {
      name: 'size',
      label: 'Size',
      type: 'select',
      defaultValue: 'medium',
      options: [
        {
          label: 'Extra Small (16px)',
          value: 'xs',
        },
        {
          label: 'Small (32px)',
          value: 'small',
        },
        {
          label: 'Medium (64px)',
          value: 'medium',
        },
        {
          label: 'Large (96px)',
          value: 'large',
        },
        {
          label: 'Extra Large (128px)',
          value: 'xl',
        },
        {
          label: 'Custom',
          value: 'custom',
        },
      ],
    },
    {
      name: 'customHeight',
      label: 'Custom Height',
      type: 'number',
      admin: {
        condition: (data) => data.size === 'custom',
      },
    },
    {
      name: 'unit',
      label: 'Unit',
      type: 'select',
      defaultValue: 'px',
      options: [
        {
          label: 'Pixels (px)',
          value: 'px',
        },
        {
          label: 'Rems (rem)',
          value: 'rem',
        },
        {
          label: 'Viewport Height (vh)',
          value: 'vh',
        },
      ],
      admin: {
        condition: (data) => data.size === 'custom',
      },
    },
  ],
}
