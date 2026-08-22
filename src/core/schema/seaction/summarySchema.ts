import type React from 'react';

import type {
  Field,
  FieldCollection,
} from '@/core/interface';

export interface SummarySchema {
  sectionName: Field<React.ReactNode>

  title: Field<React.ReactNode>;

  contents: FieldCollection<React.ReactNode>;
}