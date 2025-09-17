import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const Grid: Block = {
  slug: 'grid',
  labels: {
    singular: 'Grid',
    plural: 'Grid Blocks',
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
          label: false,
        },
        {
          type: 'row',
          fields: [
            {
              name: 'width',
              label: 'Column Width',
              type: 'select',
              defaultValue: 'full',
              required: true,
              options: [
                {
                  label: 'One Third',
                  value: 'third',
                },
                {
                  label: 'Half',
                  value: 'half',
                },
                {
                  label: 'Two Thirds',
                  value: 'twoThirds',
                },
                {
                  label: 'Full Width',
                  value: 'full',
                },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'alignment',
              label: 'Alignment',
              type: 'select',
              defaultValue: 'left',
              required: true,
              options: [
                {
                  label: 'Left',
                  value: 'left',
                },
                {
                  label: 'Center',
                  value: 'center',
                },
                {
                  label: 'Right',
                  value: 'right',
                },
              ],
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'accentLine',
          label: 'Accent line',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'accentLineAlignment',
          label: 'Accent Line Alignment',
          type: 'radio',
          defaultValue: 'left',
          options: [
            {
              label: 'Left',
              value: 'left',
            },
            {
              label: 'Right',
              value: 'right',
            },
          ],
          admin: {
            condition: (_, getSiblingData) => getSiblingData.accentLine,
            layout: 'horizontal',
          },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'paddingTop',
              label: 'Padding Top',
              type: 'select',
              defaultValue: 'medium',
              options: [
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
              name: 'paddingBottom',
              label: 'Padding Bottom',
              type: 'select',
              defaultValue: 'medium',
              options: [
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
        {
          name: 'backgroundColor',
          label: 'Background Color',
          type: 'radio',
          admin: {
            layout: 'horizontal',
          },
          options: [
            {
              label: 'None',
              value: 'none',
            },
            {
              label: 'Red',
              value: 'red',
            },
            {
              label: 'Blue',
              value: 'blue',
            },
            {
              label: 'Orange',
              value: 'orange',
            },
          ],
        },
      ],
    },
  ],
}
