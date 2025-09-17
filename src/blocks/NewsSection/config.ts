import { Block } from 'payload'

export const NewsSection: Block = {
  slug: 'newsSection',
  labels: {
    singular: 'News Section',
    plural: 'News Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Latest News & Updates',
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 6,
      admin: {
        description: 'Number of news items to display (0 for all)',
      },
    },
    {
      name: 'showCategoryFilter',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show category filter buttons',
      },
    },
    {
      name: 'categoriesToShow',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Announcement',
          value: 'announcement',
        },
        {
          label: 'Event',
          value: 'event',
        },
        {
          label: 'Update',
          value: 'update',
        },
        {
          label: 'Newsletter',
          value: 'newsletter',
        },
        {
          label: 'Report',
          value: 'report',
        },
      ],
      admin: {
        condition: (data) => data.showCategoryFilter,
      },
    },
    {
      name: 'layout',
      type: 'select',
      options: [
        {
          label: 'Grid',
          value: 'grid',
        },
        {
          label: 'List',
          value: 'list',
        },
        {
          label: 'Carousel',
          value: 'carousel',
        },
      ],
      defaultValue: 'grid',
    },
  ],
}
