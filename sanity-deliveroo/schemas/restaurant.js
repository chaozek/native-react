import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'image',
      title: 'image',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'lat',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'long',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'address',
      validation: (Rule) => [Rule.required()],
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'rating',
      validation: (Rule) => [
        Rule.required().min(1).max(5).error('please provide a valid 1 - 5 stars'),
      ],
      type: 'number',
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (Rule) => [Rule.required()],
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
      type: 'array',
    }),
  ],
})
