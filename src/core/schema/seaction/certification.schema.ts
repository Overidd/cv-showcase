import type {
  Field,
} from '@/core/interface';

import type {
  BaseSchema
} from './base.schema';
import type React from 'react';

/**
 * Representa la sección de certificaciones para perfiles de usuario o currículums.
 */
export interface CertificationSchema extends BaseSchema {
  item?: {
    id?: string;

    /** Nombre del certificado o credencial */
    name?: Field<React.ReactNode>;

    /** Institución emisora y/o detalles de la certificación */
    description?: Field<React.ReactNode>;
  };
}
