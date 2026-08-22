import type {
  InferCollectionSchema,
  InferFieldSchema,
} from '@/core/interface';

import type {
  SummarySchema
} from './summarySchema';

export type InferSummarySchema<
  T extends SummarySchema
> = {
  sectionName: InferFieldSchema<T['sectionName']>;

  title: InferFieldSchema<T['title']>;

  contents: InferCollectionSchema<T['contents']>;
};