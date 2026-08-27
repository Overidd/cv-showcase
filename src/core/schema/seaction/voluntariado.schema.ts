import type {
  Field,
  VariantConfig,
} from '@/core/interface';

import type {
  BaseSchema,
  CollectionDefinition,
} from './base.schema';

/**
 * Representa la sección de voluntariado para perfiles de usuario o currículums.
 */
export interface VoluntariadoSchema extends BaseSchema {
  collection?: CollectionDefinition<
    VariantConfig<readonly string[]>,
    {
      /** Nombre de la organización */
      name?: Field;

      /** Título, rol o posición en el voluntariado */
      title?: Field;

      /** Período de fechas del voluntariado */
      date?: Field;

      /** Descripción de la organización, responsabilidades o proyecto */
      description?: Field;
    }
  >;
}
