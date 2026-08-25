import type {
  Field,
} from '@/core/interface';

import type {
  BaseSchema
} from './base.schema';
import type React from 'react';

/**
 * Representa la sección de voluntariado para perfiles de usuario o currículums.
 */
export interface VoluntariadoSchema extends BaseSchema {
  item?: {
    id?: string;

    /** Nombre de la organización */
    name?: Field<React.ReactNode>;

    /** Título, rol o posición en el voluntariado */
    title?: Field<React.ReactNode>;

    /** Período de fechas del voluntariado */
    date?: Field<React.ReactNode>;

    /** Descripción de la organización, responsabilidades o proyecto */
    description?: Field<React.ReactNode>;
  };
}
