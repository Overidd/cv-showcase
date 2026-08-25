import type {
  SectionDefinition
} from '@/core/definition';

import type {
  CertificationSchema
} from '@/core/schema';

import {
  Certification,
  CertificationItem,
  certificationSchema,
} from '.';

import type {
  CertificationProps
} from '.';

export const certificationDefinition = {
  key: 'sectionCertification',

  name: 'Certificaciones',

  config: {
    canDelete: true,
    canDragAndDrop: true,
    canDuplicate: true,
    canEdit: true,
  },

  interconnections: [],

  component: Certification,

  item: {
    component: CertificationItem,

    config: {
      canAdd: true,
      canDelete: true,
      canDragAndDrop: true,
      canDuplicate: true,
      canEdit: true,
    },
  },

  schema: certificationSchema,

} satisfies SectionDefinition<CertificationSchema, CertificationProps>;
