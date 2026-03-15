export default {
    name: 'merch',
    title: 'merch',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'title',
            type: 'string',
            description: 'Legg til tittel her'
        },
        {
            name: 'images',
            title: 'Produktbilder',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: (Rule: any) => Rule.required().min(1),
        },
        {
            name: 'description',
            title: 'Beskrivelse',
            type: 'text',
            description: 'Kort info om produktet (f.eks. materiale eller passform).',
        },
        {
            name: 'price',
            title: 'Pris',
            type: 'number',
            description: 'Legg til pris i tallverdi'
        },
        {
            name: 'category',
            title: 'Kategori',
            type: 'string',
            options: {
                list: [
                    { title: 'T-skjorte', value: 't-shirt' },
                    { title: 'Hettegenser', value: 'hoodie' },
                    { title: 'Longsleeve', value: 'longsleeve' },
                    { title: 'Annet', value: 'other' },
                ],
            },
        },
    ]
}