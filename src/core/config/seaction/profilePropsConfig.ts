import type {
  FieldConfig,
  FieldChildrenConfig,
  VariantConfig,
  VariantFieldConfig
} from '@/core/interface';

//  Profile
export interface ProfilePropsConfig<
  TChildren extends Array<FieldChildrenConfig> = Array<FieldChildrenConfig>
> {
  photo: VariantFieldConfig<readonly string[]>;

  name: VariantFieldConfig<readonly string[]>;

  title: FieldConfig;

  contact: FieldConfig & {
    variant?: VariantConfig<readonly string[]>;

    children: TChildren;
  };
}
// type ProfileProps = InferProfileProps<typeof profileConfig.props>;

export function defineVariant<const TOptions extends readonly string[]>(
  variant: VariantConfig<TOptions>
): VariantConfig<TOptions> {
  return variant;
}