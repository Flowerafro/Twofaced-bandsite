import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'vx6m1mnm',
    dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
    useCdn: true,
    apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(client);


export function urlFor(source: any) {
    return builder.image(source);
}
