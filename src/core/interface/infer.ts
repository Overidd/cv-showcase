import type {
  Field,
  FieldCollection,
  FieldProps,
  VariantConfig
} from '@/core/interface';

export type InferFieldSchema<T, FieldValue = React.ReactNode> =
  T extends Field
  ? FieldProps<FieldValue>
  : never;

export type InferCollectionSchema<
  T,
> =
  T extends FieldCollection<infer TValue>
  ? FieldCollection<TValue>
  : never;

export type InferVariant<T> =
  T extends VariantConfig<infer TOptions>
  ? TOptions[number]
  : never;

export type InferVariantFieldSchema<T, FieldValue = React.ReactNode> =
  T extends Field & {
    variant: VariantConfig<infer TOptions>;
  }
  ? FieldProps<FieldValue> & {
    variant: TOptions[number];
  }
  : never;
