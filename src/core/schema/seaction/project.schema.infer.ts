import type React from 'react';

import type {
  InferFieldHypertextSchema,
  InferFieldSchema,
  InferParagraphSchema,
  InferVariant,
} from '@/core/interface';

import type {
  ProjectSchema,
} from './project.schema';

export type InferProjectItemSchema<
  T extends ProjectSchema
> = {
  id: string;
} & {
    [K in keyof NonNullable<NonNullable<T['collection']>['item']> as K extends 'id' ? never : K]:
    K extends 'paragraph'
    ? InferParagraphSchema<NonNullable<NonNullable<T['collection']>['item']>[K]>
    : K extends 'link'
    ? InferFieldHypertextSchema<NonNullable<NonNullable<T['collection']>['item']>[K]>
    : InferFieldSchema<NonNullable<NonNullable<T['collection']>['item']>[K]>;
  };

export type InferProjectSchema<
  T extends ProjectSchema
> = {
  [K in keyof T as K extends 'collection' ? never : K]:
  K extends 'sectionName'
  ? InferFieldSchema<T[K]>
  : never;
} & (
    NonNullable<T['collection']> extends never | undefined
    ? unknown
    : {
      collection: {
        items: Array<InferProjectItemSchema<T>>;
      } & (
        'variant' extends keyof NonNullable<T['collection']>
        ? {
          variant: InferVariant<NonNullable<NonNullable<T['collection']>['variant']>>;
        }
        : unknown
      );
      SectionItem: React.ComponentType<
        InferProjectItemSchema<T>
      >;
    }
  );
