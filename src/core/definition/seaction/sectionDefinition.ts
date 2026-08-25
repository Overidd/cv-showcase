import type React from 'react';

import type {
  AcademySchema,
  ProfileSchema,
  SkillSchema,
  SummarySchema,
  WorkExperienceSchema
} from '@/core/schema';

export interface SectionConfigMap {
  sectionProfile: {
    schema: ProfileSchema;
  };
  sectionSummary: {
    schema: SummarySchema;
  };
  sectionWorkExperience: {
    schema: WorkExperienceSchema;
  };
  sectionAcademy: {
    schema: AcademySchema
  },
  sectionSkill: {
    schema: SkillSchema
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

  item?: {
    component: React.ComponentType<
      TProps extends {
        item: {
          component: React.ComponentType<infer TItem>;
        };
      }
      ? TItem
      : never
    >;

    config: {
      canAdd: boolean,
      canDelete: boolean,
      canDuplicate: boolean,
      canDragAndDrop: boolean,
      canEdit: boolean,
    },
  },
};