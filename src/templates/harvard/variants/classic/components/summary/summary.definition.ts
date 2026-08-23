import type {
  SectionDefinition
} from '@/core/definition';

import type {
  SummarySchema
} from '@/core/schema';

import {
  Summary
} from './Summary';

import type {
  SummaryProps
} from './summary.schema';

import {
  sumarySchema,
} from './summary.schema';

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