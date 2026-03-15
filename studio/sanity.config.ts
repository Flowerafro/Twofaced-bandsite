import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import tourDate from './schemas/tourDate'
import bandInfo from './schemas/bandInfo'
import merch from './schemas/merch'

export default defineConfig({
    name: 'default',
    title: 'TwofacedBand Studio',

    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'vx6m1mnm',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',

    plugins: [structureTool(), visionTool()],

    schema: {
        types: [tourDate, bandInfo, merch],
    },
})
