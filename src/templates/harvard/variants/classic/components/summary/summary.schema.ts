import type {
  InferSummarySchema,
  SummarySchema
} from '@/core/schema';

export const sumarySchema = {
  contents: {
    display: true,
    isChangeDisplay: false,
    marker: 'all'
  }
} satisfies SummarySchema;

export type SummaryProps = InferSummarySchema<typeof sumarySchema>