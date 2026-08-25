import type React from 'react';

import type {
  InferFieldHypertextSchema,
  InferFieldSchema,
  InferParagraphSchema,
} from '@/core/interface';

import type {
  ProjectSchema,
} from './project.schema';

export type InferProjectItemSchema<
  T extends ProjectSchema
> = {
  id: string;
} & {
    [K in keyof NonNullable<T['item']> as K extends 'id' ? never : K]:
    K extends 'paragraph'
    ? InferParagraphSchema<NonNullable<T['item']>[K]>
    : K extends 'link'
    ? InferFieldHypertextSchema<NonNullable<T['item']>[K]>
    : InferFieldSchema<NonNullable<T['item']>[K]>;
  };

export type InferProjectSchema<
  T extends ProjectSchema
> = {
  [K in keyof T as K extends 'item' ? 'items' : K]:
  K extends 'sectionName'
  ? InferFieldSchema<T[K]>
  : K extends 'item'
  ? Array<InferProjectItemSchema<T>>
  : never;
} & (
    T['item'] extends undefined
    ? Record<string, never>
    : {
      Item: React.ComponentType<
        InferProjectItemSchema<T>
      >;
    }
  );
