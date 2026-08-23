import type React from 'react';

import type {
  Field,
  FieldCollections,
  FieldParagraph
} from './schemaInterface';

export interface FieldProps<TValue = React.ReactNode>
  extends Omit<Field<TValue>, 'isChangeDisplay' | 'value'> {
  value: TValue;
}

export interface FieldHyperTextProps<TValue = React.ReactNode>
  extends Omit<Field<TValue>, 'isChangeDisplay' | 'value' | 'href'> {
  value: TValue;
  href: string
}

export interface FieldParagraphProps<TValue = React.ReactNode>
  extends Omit<FieldParagraph<TValue>, 'isChangeDisplay' | 'marker' | 'value'> {
  marker: NonNullable<FieldParagraph<TValue>['marker']>;
  value: NonNullable<FieldParagraph<TValue>['value']>;
}

export interface FieldCollectionProps<TValue = React.ReactNode>
  extends Omit<FieldCollections<TValue>, 'isChangeDisplay' | 'marker' | 'data'> {
  marker: NonNullable<FieldCollections<TValue>['marker']>;
  data: NonNullable<FieldCollections<TValue>['data']>;
}

/**
 * Props de un campo que utiliza una variante.
 */
export type VariantFieldProps<
  TVariant extends string,
  TValue = React.ReactNode,
> = FieldProps<TValue> & {
  variant: TVariant;
};