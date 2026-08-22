import type {
  SectionDefinition
} from '@/core/definition';

import type {
  InferSummarySchema,
  SummarySchema
} from '@/core/schema';

import {
  Summary
} from './Summary';

const sumarySchema = {
  sectionName: {
    display: true,
    isChangeDisplay: false
  },

  title: {
    display: true,
    isChangeDisplay: false,
  },

  contents: {
    display: true,
    isChangeDisplay: false,
  }
} satisfies SummarySchema;

export type SummaryProps = InferSummarySchema<typeof sumarySchema>

export const summaryDefinition = {
  key: 'sectionSummary',
  name: 'Resumen de CV',

  component: Summary,

  interconnections: [],

  config: {
    canDelete: false,
    canDragAndDrop: false,
    canDuplicate: false,
    canEdit: true
  },

  schema: sumarySchema

} satisfies SectionDefinition<SummarySchema, SummaryProps>