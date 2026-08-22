import type {
  FieldConfig,
  FieldChildrenConfig,
  VariantConfig,
} from '@/core/interface';

//  Profile
export interface ProfilePropsConfig<
  TChildren extends Array<FieldChildrenConfig> = Array<FieldChildrenConfig>
> {
  photo: FieldConfig & {
    variant: VariantConfig<readonly string[]>;
  };

  name: FieldConfig<React.ReactNode> & {
    variant: VariantConfig<readonly string[]>;
  };

  title: FieldConfig<React.ReactNode>;

  contact: FieldConfig & {
    variant?: VariantConfig<readonly string[]>;

    children: TChildren;
  };
}

export function defineVariant<const TOptions extends readonly string[]>(
  variant: VariantConfig<TOptions>
): VariantConfig<TOptions> {
  return variant;
}