import type {
  Field,
  FieldParagraph
} from '@/core/interface';

import type {
  BaseSchema
} from './base.schema';

export interface AcademySchema extends BaseSchema {

  items: Array<{
    id?: string,

    name?: Field<React.ReactNode>;

    title?: Field<React.ReactNode>;

    location?: Field<React.ReactNode>;

    period?: Field<React.ReactNode>;

    paragraph?: FieldParagraph<React.ReactNode>;
  }>
}