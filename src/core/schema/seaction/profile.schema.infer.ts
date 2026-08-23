import type React from 'react';

import type {
  InferVariant,
  InferFieldSchema,
  InferVariantFieldSchema,
} from '@/core/interface';

import type {
  ProfileSchema
} from './profile.schema';

export type InferProfileSchema<
  T extends ProfileSchema
> = {
  name: InferVariantFieldSchema<T['name'], React.ReactNode>;

  title: InferFieldSchema<T['title']>;

  contact: {
    variant: InferVariant<T['contact']['variant']>;

    display: T['contact']['display'];

    children: T['contact']['children'];
  };

  photo: InferVariantFieldSchema<T['photo'], string>;
};