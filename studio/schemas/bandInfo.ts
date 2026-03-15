export default {
    name: 'bandInfo',
    title: 'Band Info',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'title',
            type: 'string',
            description: 'Legg til tittel her'
        },
        {
            name: 'biography',
            title: 'Bio',
            type: 'text',
            rows: 5,
        },
        {
            name: 'image',
            title: 'Bandbilde',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'socials',
            title: 'Sosiale Media Linker',
            type: 'object',
            fields: [
                { name: 'instagram', title: 'Instagram URL', type: 'url' },
                { name: 'youtube', title: 'YouTube URL', type: 'url' },
                { name: 'spotify', title: 'Spotify URL', type: 'url' },
            ],
        },
    ],
}
