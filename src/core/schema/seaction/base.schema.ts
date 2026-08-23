import type {
  Field
} from '@/core/interface';

export interface BaseSchema {
  sectionName?: Field<React.ReactNode>

  title?: Field<React.ReactNode>;
}