import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'secondaryImage',
      title: 'Secondary Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'isRelease',
      title: 'Is Release?',
      type: 'boolean',
    }),
    defineField({
      name: 'repo',
      title: 'Repo',
      type: 'url'
    }),
    defineField({
      name: 'web',
      title: 'Web Link',
      type: 'url'
    }),
    defineField({
      name: 'android',
      title: 'Android Link',
      type: 'url'
    }),
    defineField({
      name: 'ios',
      title: 'iOS Link',
      type: 'url'
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      company: 'company',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
