import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';
import { getDefaultDocumentNode } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'Paul_Buscano_Portfolio_Studio',
  title: 'Paul Buscano Portfolio Studio',
  projectId,
  dataset,
  plugins: [deskTool({defaultDocumentNode: getDefaultDocumentNode}), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
