import { CollectionConfig } from 'payload'

const FormSubmission: CollectionConfig = {
  slug: 'form-submission',
  fields: [
    {
      type: 'text',
      name: 'from',
      label: 'From Email',
      admin: {
        readOnly: true,
      },
    },
    {
      type: 'textarea',
      name: 'message',
      label: 'Message',
      admin: {
        readOnly: true,
      },
    },
    {
      type: 'text',
      name: 'source',
      label: 'Source',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
}

export default FormSubmission
