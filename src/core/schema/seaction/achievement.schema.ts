import type {
  Field,
  VariantConfig,
} from '@/core/interface';

import type {
  BaseSchema,
  CollectionDefinition,
} from './base.schema';

/**
 * Representa la sección de logros para perfiles de usuario o currículums.
 */
export interface AchievementSchema extends BaseSchema {
  collection?: CollectionDefinition<
    VariantConfig<readonly string[]>,
    {
      /** Título o nombre del logro */
      name?: Field;

      /** Descripción o detalle del logro y su impacto */
      description?: Field;
    }
  >;
}
