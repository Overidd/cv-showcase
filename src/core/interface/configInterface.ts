// Base field
export interface FieldConfig<TValue = string> {
  value: TValue;
  display: boolean;
  isChangeDisplay: boolean;
}

export interface FieldChildrenConfig<TValue = string> {
  key: string;
  value: TValue;
  display: boolean;
  isChangeDisplay: boolean;
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