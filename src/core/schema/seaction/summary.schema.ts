import type React from 'react';

import type {
  BaseSchema
} from './base.schema';

import type {
  FieldCollection,
} from '@/core/interface';

export interface SummarySchema extends BaseSchema {
  contents?: FieldCollection<React.ReactNode>;
}