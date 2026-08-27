import type React from 'react';

import type {
  InferFieldSchema, InferVariant,
} from '@/core/interface';

import type {
  VoluntariadoSchema,
} from './voluntariado.schema';

export type InferVoluntariadoItemSchema<
  T extends VoluntariadoSchema
> = {
  id: string;
} & {
    [K in keyof NonNullable<NonNullable<T['collection']>['item']> as K extends 'id' ? never : K]:
    InferFieldSchema<NonNullable<NonNullable<T['collection']>['item']>[K]>;
  };

export type InferVoluntariadoSchema<
  T extends VoluntariadoSchema
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
        items: Array<InferVoluntariadoItemSchema<T>>;
      } & (
        'variant' extends keyof NonNullable<T['collection']>
        ? {
          variant: InferVariant<NonNullable<NonNullable<T['collection']>['variant']>>;
        }
        : unknown
      );
      SectionItem: React.ComponentType<
        InferVoluntariadoItemSchema<T>
      >;
    }
  );
