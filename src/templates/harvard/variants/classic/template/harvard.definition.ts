import type {
  TemplateDefinition
} from '@/core/definition';

import {
  academyDefinition,
  achievementDefinition,
  certificationDefinition,
  languageDefinition,
  personalizedDefinition,
  profileDefinition,
  projectDefinition,
  skillDefinition,
  summaryDefinition,
  voluntariadoDefinition,
  workExperienceDefinition
} from '../components'

import {
  HarvardClassicTheme,
  HarvardClassic
} from '.';

export const harvardDefinition = {
  id: 'harvard-classic',

  name: 'Harvard Classic',

  description: 'Plantilla clásica de currículum académico de una sola columna, inspirada en el formato tradicional de currículum de Harvard.',

  version: '1.0.0',

  author: 'CV Templates',

  theme: HarvardClassicTheme,

  component: HarvardClassic,

  sections: [
    academyDefinition,
    achievementDefinition,
    certificationDefinition,
    languageDefinition,
    personalizedDefinition,
    profileDefinition,
    projectDefinition,
    skillDefinition,
    summaryDefinition,
    voluntariadoDefinition,
    workExperienceDefinition
  ],

  metadata: {
    layout: {
      main: true,
      sidebar: false
    },

    placement: {
      main: [
        'sectionAcademy',
        'sectionAchievement',
        'sectionCertification',
        'sectionLanguage',
        'sectionPersonalized',
        'sectionProfile',
        'sectionProyect',
        'sectionSkill',
        'sectionSummary',
        'sectionVoluntariado',
        'sectionWorkExperience',
      ],
      sidebar: []
    },

    initialSections: [
      {
        key: 'sectionProfile',
        order: 1,
        row: 1,
        column: 0,
      },
    ],
  }

} satisfies TemplateDefinition;