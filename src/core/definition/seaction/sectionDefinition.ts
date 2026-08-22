import type React from 'react';

import type {
  ProfileSchema,
  SummarySchema
} from '@/core/schema';

export interface SectionConfigMap {
  sectionProfile: {
    schema: ProfileSchema;
  };
  sectionSummary: {
    schema: SummarySchema
  }
}

export type SectionKey = keyof SectionConfigMap;

export type SectionSchema = SectionConfigMap[SectionKey]['schema'];

export type SectionKeyFromSchema<TSchema> = {
  [K in SectionKey]:
  TSchema extends SectionConfigMap[K]['schema']
  ? K
  : never;
}[SectionKey];

export type SectionDefinition<
  TSchema extends SectionSchema,
  TProps = unknown,
> = {
  key: SectionKeyFromSchema<TSchema>;

  name: string;

  component: React.ComponentType<TProps>;

  interconnections: SectionKey[];

  config: {
    canDuplicate: boolean;
    canDragAndDrop: boolean;
    canEdit: boolean;
    canDelete: boolean;
  };

  schema: TSchema;
};