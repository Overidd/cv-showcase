import type {
  Field,
  VariantConfig,
} from '@/core/interface';

import type {
  BaseSchema,
  CollectionDefinition,
} from './base.schema';

/**
 * Representa una sección personalizada para perfiles de usuario o currículums.
 */
export interface PersonalizedSchema extends BaseSchema {
  collection?: CollectionDefinition<
    VariantConfig<readonly string[]>,
    {
      /** Título o nombre del elemento personalizado */
      name?: Field;

      /** Período de fechas */
      date?: Field;

      /** Descripción personalizada */
      description?: Field;
    }
  >;
}
