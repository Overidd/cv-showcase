
export interface TValueRange<TValue = string> {
  value: TValue,
  range: number,
  label: string,
  // type: 'react-node' | 'date' | 'range',
}

//---------------------- Base field
export interface Field<TValue = string> {
  value?: TValue;
  display: boolean;
  isChangeDisplay: boolean;
}

export interface FieldCollection<TValue = string> {
  values?: TValue[];
  display: boolean;
  isChangeDisplay: boolean;
}

export interface FieldHypertext<TValue = string> {
  value?: TValue;
  href?: string;
  display: boolean;
  isChangeDisplay: boolean;
}

// CollectionConfig
export interface FieldParagraph<TValue = string> {
  value?: TValue,
  display: boolean;
  isChangeDisplay: boolean;
  marker?: 'bullet' | 'circle' | 'square' | 'dash' | 'arrow' | 'check' | 'diamond' | 'start' | 'icon' | 'all'
}

export interface FieldItemChildren<TValue = string> {
  key: string;
  value: TValue;
  display: boolean;
  isChangeDisplay: boolean;
}

export interface FieldChildren<TValue = string> {
  display: boolean;
  isChangeDisplay: boolean;

  children: Array<FieldItemChildren<TValue>>
}


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
// export type VariantFieldConfig<TOptions extends readonly string[], TValue = string> = FieldConfig<TValue> & {
//   variant: VariantConfig<TOptions>;
// };

export function defineVariant<const TOptions extends readonly string[]>(
  variant: VariantConfig<TOptions>
): VariantConfig<TOptions> {
  return variant;
}