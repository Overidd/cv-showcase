import type {
  Field,
  ValueRange,
  VariantConfig,
} from '@/core/interface';

import type {
  BaseSchema,
  CollectionDefinition,
} from './base.schema';

export interface LanguageSchema extends BaseSchema {
  collection?: CollectionDefinition<
    VariantConfig<readonly string[]>,
    {
      language?: Field<ValueRange> & {
        variant: VariantConfig<readonly string[]>;
      };
    }
  >;
}