import type React from 'react';

export interface FieldProps<TValue = React.ReactNode> {
  value: TValue;
  display: boolean;
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