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
 * Representa la sección de experiencia laboral para perfiles de usuario o currículums.
 */
export interface WorkExperienceSchema extends BaseSchema {
  collection?: CollectionDefinition<
    VariantConfig<readonly string[]>,
    {
      title?: Field;

      companyName?: Field;

      /** Resumen o descripción general del puesto y sus responsabilidades. */
      description?: Field;

      /** Logros clave o tareas destacadas presentadas en una lista de viñetas. */
      paragraph?: FieldParagraph;

      /** Ubicación geográfica o modalidad de trabajo (ej. Remoto, Presencial). */
      location?: Field;

      /** Periodo de tiempo o rango de fechas del empleo. */
      period?: Field;

      /** Enlace externo al sitio web de la empresa o proyecto relacionado. */
      link?: FieldHypertext;
    }
  >;
}