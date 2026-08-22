import type {
  FieldChildrenConfig,
  FieldConfig,
  FieldProps,
  VariantConfig,
  VariantFieldConfig,
  VariantFieldProps,
} from '@/core/interface';

export type InferFieldProps<T> =
  T extends FieldConfig
  ? FieldProps<T['value']>
  : never;


export type InferVariant<T> =
  T extends VariantConfig<infer TOptions>
  ? TOptions[number]
  : never;


export type InferVariantFieldProps<T> =
  T extends VariantFieldConfig<infer TOptions>
  ? VariantFieldProps<
    TOptions[number],
    T['value']
  >
  : never;


export type InferProfileProps<
  T extends {
    name: VariantFieldConfig<readonly string[]>;
    title: FieldConfig;

    contact: FieldConfig & {
      variant?: VariantConfig<readonly string[]>;
      children: Array<FieldChildrenConfig>;
    };

    photo: VariantFieldConfig<readonly string[]>;
  }
> = {
  name: InferVariantFieldProps<T['name']>;

  title: InferFieldProps<T['title']>;

  contact: {
    variant: InferVariant<T['contact']['variant']>;

    display: T['contact']['display'];

    children: T['contact']['children'];
  };

  photo: InferVariantFieldProps<T['photo']>;
};