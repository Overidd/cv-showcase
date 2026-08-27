import type {
  Field,
  FieldHypertext,
  FieldHyperTextProps,
  FieldProps,
  VariantConfig,
  FieldParagraph,
  FieldParagraphProps,
  FieldCollectionProps,
  FieldCollection
} from '@/core/interface';

export type InferFieldCollectionSchema<
  T,
  TValue = React.ReactNode[]
> =
  T extends FieldCollection<unknown>
  ? FieldCollectionProps<TValue>
  : never;

/*
export type InferFieldCollectionSchema<
  T,
  TValue = React.ReactNode[]
> =
  T extends FieldCollection
    ? FieldCollectionProps<TValue> &
      ('variant' extends keyof T
        ? {
            variant: InferVariant<T['variant']>;
          }
        : {})
    : never;
*/

export type InferFieldSchema<T, FieldValue = React.ReactNode> =
  T extends Field<unknown>
  ? FieldProps<FieldValue>
  : never;

export type InferFieldHypertextSchema<T, FieldValue = React.ReactNode> =
  T extends FieldHypertext<unknown>
  ? FieldHyperTextProps<FieldValue>
  : never;

export type InferParagraphSchema<
  T,
> =
  T extends FieldParagraph<unknown>
  ? FieldParagraphProps
  : never;

// export type InferCollectionSchema<
//   T,
// > =
//   T extends FieldCollectionProps
//   ? FieldCollectionProps
//   : never;

export type InferVariant<T> =
  T extends VariantConfig<infer TOptions>
  ? TOptions[number]
  : never;

export type InferVariantFieldSchema<T, FieldValue = React.ReactNode> =
  T extends Field<unknown> & {
    variant: VariantConfig<infer TOptions>;
  }
  ? FieldProps<FieldValue> & {
    variant: TOptions[number];
  }
  : never;