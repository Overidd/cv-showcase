import type React from 'react';

import type {
  AcademySchema,
  AchievementSchema,
  CertificationSchema,
  LanguageSchema,
  PersonalizedSchema,
  ProfileSchema,
  ProjectSchema,
  SkillSchema,
  SummarySchema,
  VoluntariadoSchema,
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
    schema: AcademySchema;
  };

  sectionSkill: {
    schema: SkillSchema;
  };

  sectionLanguage: {
    schema: LanguageSchema;
  };

  sectionProyect: {
    schema: ProjectSchema;
  };

  sectionAchievement: {
    schema: AchievementSchema;
  };

  sectionCertification: {
    schema: CertificationSchema;
  };

  sectionVoluntariado: {
    schema: VoluntariadoSchema;
  };

  sectionPersonalized: {
    schema: PersonalizedSchema;
  };
}

export type SectionKey = keyof SectionConfigMap;

export type SectionSchema =
  SectionConfigMap[SectionKey]['schema'];

export type SectionKeyFromSchema<TSchema> = {
  [K in SectionKey]:
  TSchema extends SectionConfigMap[K]['schema']
  ? K
  : never;
}[SectionKey];

export interface SectionDefinition<
  TSchema extends SectionSchema,
  TProps,
> {
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
      canAdd: boolean;
      canDelete: boolean;
      canDuplicate: boolean;
      canDragAndDrop: boolean;
      canEdit: boolean;
    };
  };
}

export interface AnySectionDefinition {
  key: SectionKey;

  name: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;

  interconnections: SectionKey[];

  config: {
    canDuplicate: boolean;
    canDragAndDrop: boolean;
    canEdit: boolean;
    canDelete: boolean;
  };

  schema: SectionSchema;

  item?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: React.ComponentType<any>;

    config: {
      canAdd: boolean;
      canDelete: boolean;
      canDuplicate: boolean;
      canDragAndDrop: boolean;
      canEdit: boolean;
    };
  };
}