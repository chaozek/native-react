import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'category name',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'image',
      type: 'image',
    }),
  ],
})
