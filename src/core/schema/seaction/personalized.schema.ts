import type {
  Field,
  VariantConfig,
} from '@/core/interface';

import type {
  BaseSchema
} from './base.schema';
import type React from 'react';

/**
 * Representa una sección personalizada para perfiles de usuario o currículums.
 */
export interface PersonalizedSchema extends BaseSchema {
  group?: {
    variant: VariantConfig<readonly string[]>;
  };

  item?: {
    id?: string;

    /** Título o nombre del elemento personalizado */
    name?: Field<React.ReactNode>;

    /** Período de fechas */
    date?: Field<React.ReactNode>;

    /** Descripción personalizada */
    description?: Field<React.ReactNode>;
  };
}
