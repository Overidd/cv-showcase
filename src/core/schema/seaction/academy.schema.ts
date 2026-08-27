import type {
  Field,
  FieldParagraph,
  VariantConfig,
} from '@/core/interface';

import type {
  BaseSchema,
  CollectionDefinition,
} from './base.schema';

export interface AcademySchema extends BaseSchema {
  collection?: CollectionDefinition<
    VariantConfig<readonly string[]>,
    {
      name?: Field;

      title?: Field;

      location?: Field;

      period?: Field;

      paragraph?: FieldParagraph;
    }
  >;
}