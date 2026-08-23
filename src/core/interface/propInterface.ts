import type React from 'react';

import type {
  Field,
  FieldCollection
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

export interface FieldCollectionProps<TValue = React.ReactNode>
  extends Omit<FieldCollection<TValue>, 'isChangeDisplay' | 'marker' | 'data'> {
  marker: NonNullable<FieldCollection<TValue>['marker']>;
  data: NonNullable<FieldCollection<TValue>['data']>;
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