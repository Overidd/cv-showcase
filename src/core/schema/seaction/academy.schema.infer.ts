import type React from 'react';

import type {
  InferFieldSchema,
  InferParagraphSchema,
} from '@/core/interface';

import type {
  AcademySchema,
} from './academy.schema';


export type InferAcademyItemSchema<
  T extends AcademySchema
> = {
  id: string;
} & {
    [K in keyof NonNullable<T['item']> as K extends 'id' ? never : K]:
    K extends 'paragraph'
    ? InferParagraphSchema<NonNullable<T['item']>[K]>
    : InferFieldSchema<NonNullable<T['item']>[K]>;
  };


export type InferAcademySchema<
  T extends AcademySchema
> = {
  [K in keyof T as K extends 'item' ? 'items' : K]:
  K extends 'sectionName'
  ? InferFieldSchema<T[K]>
  : K extends 'title'
  ? InferFieldSchema<T[K]>
  : K extends 'item'
  ? Array<InferAcademyItemSchema<T>>
  : never;
} & (
    T['item'] extends undefined
    ? Record<string, never>
    : {
      Item: React.ComponentType<
        InferAcademyItemSchema<T>
      >;
    }
  );