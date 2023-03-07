import { defineField, defineType } from "sanity";

export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string'
        }),
        defineField({
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string',
        }),
        defineField({
            name: 'companyLogo',
            title: 'Company Logo',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'duration',
            title: 'Duration',
            type: 'string',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime'
        }),
        defineField({
            name: 'jobDescription',
            title: 'Job Description',
            type: 'blockContent'
        }),
        defineField({
            name: 'companyUrl',
            title: 'Company URL',
            type: 'url'
        })

    ]
})