import type {
  FieldChildrenConfig,
  FieldConfig,
  FieldProps,
  VariantConfig,
} from '@/core/interface';
import type React from 'react';

export type InferFieldProps<T, FieldValue = React.ReactNode> =
  T extends FieldConfig
  ? FieldProps<FieldValue>
  : never;

export type InferVariant<T> =
  T extends VariantConfig<infer TOptions>
  ? TOptions[number]
  : never;

export type InferVariantFieldProps<T, FieldValue = React.ReactNode> =
  T extends FieldConfig & {
    variant: VariantConfig<infer TOptions>;
  }
  ? FieldProps<FieldValue> & {
    variant: TOptions[number];
  }
  : never;

export type InferProfileProps<
  T extends {
    name: FieldConfig & {
      variant: VariantConfig<readonly string[]>;
    };

    title: FieldConfig<React.ReactNode>;

    contact: FieldConfig & {
      variant?: VariantConfig<readonly string[]>;
      children: Array<FieldChildrenConfig>;
    };

    photo: FieldConfig & {
      variant: VariantConfig<readonly string[]>;
    };
  }
> = {
  name: InferVariantFieldProps<T['name'], React.ReactNode>;

  title: InferFieldProps<T['title']>;

  contact: {
    variant: InferVariant<T['contact']['variant']>;

    display: T['contact']['display'];

    children: T['contact']['children'];
  };

  photo: InferVariantFieldProps<T['photo'], string>;
};