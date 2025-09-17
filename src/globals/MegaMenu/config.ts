import { GlobalConfig } from 'payload'
import { link } from '@/fields/link' // Import your link utility

export const MegaMenu: GlobalConfig = {
  slug: 'mega-menu',
  fields: [
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      fields: [
        // Use the link utility instead of custom fields
        link({
          // Customize the link utility for your mega menu needs
          appearances: false, // Remove appearance options for mega menu
          overrides: {
            // You can customize the admin appearance if needed
            admin: {
              // Optional: adjust the admin layout
              description: 'Select what you need only',
            },
          },
        }),
        // You can add additional mega menu specific fields here
        {
          name: 'description',
          type: 'text',
          label: 'Description (Optional)',
          admin: {
            description: 'Optional description for the menu item',
          },
        },
        {
          name: 'featuredImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Featured Image (Optional)',
          admin: {
            description: 'Optional image for mega menu items',
          },
        },
      ],
    },
  ],
}
