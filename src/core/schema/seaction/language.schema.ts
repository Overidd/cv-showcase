import type {
  Field,
  TValueRange,
  VariantConfig
} from '@/core/interface';

import type {
  BaseSchema
} from './base.schema';

export interface LanguageSchema extends BaseSchema {
  item?: {
    id?: string,

    language: Field<TValueRange<React.ReactNode>> & {
      variant: VariantConfig<readonly string[]>;
    }
  }
}