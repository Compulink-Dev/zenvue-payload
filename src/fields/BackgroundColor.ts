import { Field } from 'payload'

export type Type = 'none' | 'orange' | 'red' | 'blue'

export const backgroundColor: Field = {
  name: 'backgroundColor',
  label: 'Background Color',
  defaultValue: 'none',
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
}
