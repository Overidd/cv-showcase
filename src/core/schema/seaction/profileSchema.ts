import type React from 'react';

import type {
  Field,
  FieldChildren,
  VariantConfig,
} from '@/core/interface';

//  Profile
export interface ProfileSchema {
  photo: Field & {
    variant: VariantConfig<readonly string[]>;
  };

  name: Field<React.ReactNode> & {
    variant: VariantConfig<readonly string[]>;
  };

  title: Field<React.ReactNode>;

  contact: FieldChildren<React.ReactNode> & {
    variant?: VariantConfig<readonly string[]>;
  };
}