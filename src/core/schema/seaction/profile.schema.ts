import type {
  Field,
  FieldChildren,
  VariantConfig,
} from '@/core/interface';

// Profile
export interface ProfileSchema {
  photo: Field<string> & {
    variant: VariantConfig<readonly string[]>;
  };

  name: Field & {
    variant: VariantConfig<readonly string[]>;
  };

  title: Field;

  contact: FieldChildren & {
    variant?: VariantConfig<readonly string[]>;
  };
}