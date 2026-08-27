import type {
  Field,
  FieldHypertext,
  FieldParagraph,
  VariantConfig,
} from '@/core/interface';

import type {
  BaseSchema,
  CollectionDefinition,
} from './base.schema';

/**
 * Representa la sección de proyectos para perfiles de usuario o currículums.
 */
export interface ProjectSchema extends BaseSchema {
  collection?: CollectionDefinition<
    VariantConfig<readonly string[]>,
    {
      /** Nombre del proyecto */
      name?: Field;

      /** Enlace externo al proyecto */
      link?: FieldHypertext;

      /** Ubicación geográfica o contexto del proyecto (ej. Remoto, Lima, Perú) */
      location?: Field;

      /** Período o fecha de realización del proyecto */
      date?: Field;

      /** Resumen o descripción general del proyecto */
      description?: Field;

      /** Logros destacados o detalles presentados en una lista de viñetas */
      paragraph?: FieldParagraph;
    }
  >;
}
