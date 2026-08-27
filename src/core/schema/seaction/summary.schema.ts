import type {
  FieldParagraph,
  VariantConfig,
} from '@/core/interface';

import type {
  BaseSchema,
  CollectionDefinition,
} from './base.schema';

export interface SummarySchema extends BaseSchema {
  collection?: CollectionDefinition<
    VariantConfig<readonly string[]>,
    {
      summary?: FieldParagraph;
    }
  >;
}