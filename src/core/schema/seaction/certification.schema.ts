import type {
  Field,
  VariantConfig,
} from '@/core/interface';

import type {
  BaseSchema,
  CollectionDefinition,
} from './base.schema';

/**
 * Representa la sección de certificaciones para perfiles de usuario o currículums.
 */
export interface CertificationSchema extends BaseSchema {
  collection?: CollectionDefinition<
    VariantConfig<readonly string[]>,
    {
      /** Nombre del certificado o credencial */
      name?: Field;

      /** Institución emisora y/o detalles de la certificación */
      description?: Field;
    }
  >;
}
