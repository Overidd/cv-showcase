import type React from 'react';

import type {
  InferFieldSchema,
} from '@/core/interface';

import type {
  CertificationSchema,
} from './certification.schema';

export type InferCertificationItemSchema<
  T extends CertificationSchema
> = {
  id: string;
} & {
  [K in keyof NonNullable<T['item']> as K extends 'id' ? never : K]:
  InferFieldSchema<NonNullable<T['item']>[K]>;
};

export type InferCertificationSchema<
  T extends CertificationSchema
> = {
  [K in keyof T as K extends 'item' ? 'items' : K]:
  K extends 'sectionName'
  ? InferFieldSchema<T[K]>
  : K extends 'item'
  ? Array<InferCertificationItemSchema<T>>
  : never;
} & (
  T['item'] extends undefined
  ? Record<string, never>
  : {
    Item: React.ComponentType<
      InferCertificationItemSchema<T>
    >;
  }
);
