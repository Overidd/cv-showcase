import type React from 'react';

import type {
  BaseSchema
} from './base.schema';

import type {
  Field,
  FieldCollections,
} from '@/core/interface';

export interface SummarySchema extends BaseSchema {
  title?: Field<React.ReactNode>;
  contents?: FieldCollections<React.ReactNode>;
}