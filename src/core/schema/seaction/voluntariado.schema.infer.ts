import type React from 'react';

import type {
  InferFieldSchema,
} from '@/core/interface';

import type {
  VoluntariadoSchema,
} from './voluntariado.schema';

export type InferVoluntariadoItemSchema<
  T extends VoluntariadoSchema
> = {
  id: string;
} & {
  [K in keyof NonNullable<T['item']> as K extends 'id' ? never : K]:
  InferFieldSchema<NonNullable<T['item']>[K]>;
};

export type InferVoluntariadoSchema<
  T extends VoluntariadoSchema
> = {
  [K in keyof T as K extends 'item' ? 'items' : K]:
  K extends 'sectionName'
  ? InferFieldSchema<T[K]>
  : K extends 'item'
  ? Array<InferVoluntariadoItemSchema<T>>
  : never;
} & (
  T['item'] extends undefined
  ? Record<string, never>
  : {
    Item: React.ComponentType<
      InferVoluntariadoItemSchema<T>
    >;
  }
);
