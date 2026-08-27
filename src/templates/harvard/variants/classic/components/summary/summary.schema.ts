import type {
  InferSummaryItemSchema,
  InferSummarySchema,
  SummarySchema
} from '@/core/schema';

export const sumarySchema = {
  collection: {
    item: {
      summary: {
        display: true,
        isChangeDisplay: false,
        marker: 'all'
      }
    }
  }
} satisfies SummarySchema;

export type SummaryProps = InferSummarySchema<typeof sumarySchema>
export type SummaryItemProps = InferSummaryItemSchema<typeof sumarySchema>