import type {
  Field,
  FieldCollection,
  ValueRange,
  VariantConfig,
} from '@/core/interface';

import type {
  BaseSchema,
  CollectionDefinition,
} from './base.schema';

export interface SkillSchema extends BaseSchema {
  collection?: CollectionDefinition<
    VariantConfig<readonly string[]>,
    {
      name?: Field;

      group?: FieldCollection<ValueRange> & {
        variant: VariantConfig<readonly string[]>;
      };
    }
  >;
}