import type {
  Field,
  VariantConfig
} from '@/core/interface';

import type {
  BaseSchema
} from './base.schema';
import type React from 'react';

/**
 * Representa la sección de logros para perfiles de usuario o currículums.
 */
export interface AchievementSchema extends BaseSchema {
  group?: {
    variant: VariantConfig<readonly string[]>;
  };

  item?: {
    id?: string;

    /** Título o nombre del logro */
    name?: Field<React.ReactNode>;

    /** Descripción o detalle del logro y su impacto */
    description?: Field<React.ReactNode>;
  };
}
