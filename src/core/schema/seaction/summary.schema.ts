import type {
  BaseSchema
} from './base.schema';

import type {
  FieldParagraph,
} from '@/core/interface';

export interface SummarySchema extends BaseSchema {
  item?: {
    id?: string,
    summary?: FieldParagraph
  }
}