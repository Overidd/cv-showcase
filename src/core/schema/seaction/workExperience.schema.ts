import type {
  Field,
  FieldCollection,
  FieldHypertext
} from '@/core/interface';

import type {
  BaseSchema
} from './base.schema';

/**
 * Representa la sección de experiencia laboral para perfiles de usuario o currículums.
 */
export interface WorkExperienceSchema extends BaseSchema {
  /** Nombre de la empresa u organización. */
  companyName?: Field<React.ReactNode>;

  /** Resumen o descripción general del puesto y sus responsabilidades. */
  description?: Field<React.ReactNode>;

  /** Logros clave o tareas destacadas presentadas en una lista de viñetas. */
  achievements?: FieldCollection<React.ReactNode>;

  /** Ubicación geográfica o modalidad de trabajo (ej. Remoto, Presencial). */
  location?: Field<React.ReactNode>;

  /** Periodo de tiempo o rango de fechas del empleo. */
  period?: Field<React.ReactNode>;

  /** Enlace externo al sitio web de la empresa o proyecto relacionado. */
  link?: FieldHypertext<React.ReactNode>;
}