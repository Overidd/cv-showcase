import type {
  Field,
  FieldCollection,
  VariantConfig
} from '@/core/interface';

import type {
  BaseSchema
} from './base.schema';

export interface SkillSchema extends BaseSchema {
  item?: {
    id?: string,

    name?: Field<React.ReactNode>;

    collection?: FieldCollection<React.ReactNode> & {
      variant: VariantConfig<readonly string[]>;
    }
  }
}