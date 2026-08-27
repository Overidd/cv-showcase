import type React from 'react';

/**
 * Capabilities supported by a value.
 */
export interface ValueCapabilities {
  formatting?: {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
  };

  alignment?: {
    left?: boolean;
    center?: boolean;
    right?: boolean;
    justify?: boolean;
  };

  list?: {
    bullet?: boolean;
    numbered?: boolean;
  };

  link?: boolean;
}

/**
 * Base definition for a field.
 */
export interface Field<TValue = ValueCapabilities | string> {
  value?: TValue;
  display: boolean;
  isChangeDisplay: boolean;
}

/**
 * Collection of field values.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FieldCollection<TValue = ValueCapabilities | string> extends Field<TValue[]> { }

/**
 * Hypertext field.
 */
export interface FieldHypertext<TValue = ValueCapabilities | string>
  extends Field<TValue> {
  href?: string;
}

/**
 * Supported paragraph markers.
 */
export type ParagraphMarker =
  | 'bullet'
  | 'circle'
  | 'square'
  | 'dash'
  | 'arrow'
  | 'check'
  | 'diamond'
  | 'start'
  | 'icon'
  | 'all';

/**
 * Paragraph field.
 */
export interface FieldParagraph<TValue = ValueCapabilities | string>
  extends Field<TValue> {
  marker?: ParagraphMarker;
}

/**
 * Child field.
 */
export interface FieldItemChildren<TValue = ValueCapabilities | string>
  extends Field<TValue> {
  key: string;
}

/**
 * Field containing child fields.
 */
export interface FieldChildren<TValue = ValueCapabilities | string> {
  display: boolean;
  isChangeDisplay: boolean;
  children: Array<FieldItemChildren<TValue>>;
}

/**
 * Range value with an associated controller.
 */
export interface ValueRange<
  TValue = ValueCapabilities,
  TControllerProps = React.PropsWithChildren
> {
  value: TValue;
  range: number;
  label: string;
  Controller: React.ComponentType<TControllerProps>;
}

export type TValueRange<
  TValue = ValueCapabilities,
  TControllerProps = React.PropsWithChildren
> = ValueRange<TValue, TControllerProps>;

/**
 * Variant
 * 
 * Configuración de una variante.
 *
 * TOptions representa las opciones definidas por el template.
 *
 * Ejemplo:
 *
 * TOptions = ['uppercase', 'capitalize']
 *
 * entonces:
 *
 * value = 'uppercase' | 'capitalize'
 */
export type VariantConfig<TOptions extends readonly string[]> = {
  value: TOptions[number];
  options: TOptions;
};

/**
 * Campo que requiere una variante.
 */
// export type VariantFieldConfig<TOptions extends readonly string[], TValue = ValueCapabilities> = FieldConfig<TValue> & {
//   variant: VariantConfig<TOptions>;
// };

export function defineVariant<const TOptions extends readonly string[]>(
  variant: VariantConfig<TOptions>
): VariantConfig<TOptions> {
  return variant;
}