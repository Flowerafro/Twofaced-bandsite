export default {
    name: 'tourDate',
    title: 'Tour Date',
    type: 'document',
    fields: [
        {
            name: 'date',
            title: 'Dato',
            type: 'datetime',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'venue',
            title: 'Venue',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'city',
            title: 'By',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'ticketUrl',
            title: 'Billettlink',
            type: 'url',
        },
        {
            name: 'soldOut',
            title: 'Utsolgt',
            type: 'boolean',
            initialValue: false,
        },
    ],
    preview: {
        select: {
            title: 'venue',
            subtitle: 'date',
        },
    },
}
