import type {
  Field,
  FieldCollection,
  TValueRange,
  VariantConfig
} from '@/core/interface';

import type {
  BaseSchema
} from './base.schema';

export interface SkillSchema extends BaseSchema {
  item?: {
    id?: string,

    name?: Field<React.ReactNode>;

    collection?: FieldCollection<TValueRange<React.ReactNode>> & {
      variant: VariantConfig<readonly string[]>;
    }
  }
}