import type {
  Field,
  VariantConfig
} from '@/core/interface';

export interface BaseSchema {
  sectionName?: Field;
}

export interface CollectionDefinition<
  TVariant = VariantConfig<readonly string[]>,
  TItem = Record<string, unknown>
> {
  variant?: TVariant;
  item: TItem;
}