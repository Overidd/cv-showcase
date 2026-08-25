import type React from 'react';

import type {
  Field,
  FieldHypertext,
  FieldParagraph,
} from '@/core/interface';

import type {
  BaseSchema
} from './base.schema';

/**
 * Representa la sección de proyectos para perfiles de usuario o currículums.
 */
export interface ProjectSchema extends BaseSchema {
  item?: {
    id?: string;

    /** Nombre del proyecto */
    name?: Field<React.ReactNode>;

    /** Enlace externo al proyecto */
    link?: FieldHypertext<React.ReactNode>;

    /** Ubicación geográfica o contexto del proyecto (ej. Remoto, Lima, Perú) */
    location?: Field<React.ReactNode>;

    /** Período o fecha de realización del proyecto */
    date?: Field<React.ReactNode>;

    /** Resumen o descripción general del proyecto */
    description?: Field<React.ReactNode>;

    /** Logros destacados o detalles presentados en una lista de viñetas */
    paragraph?: FieldParagraph<React.ReactNode>;
  };
}
