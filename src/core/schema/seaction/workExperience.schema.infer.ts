import type {
  InferFieldHypertextSchema,
  InferFieldSchema,
  InferParagraphSchema,
} from '@/core/interface';

import type {
  WorkExperienceSchema,
} from './workExperience.schema';

type InferWorkExperienceHistory<T> =
  T extends Array<infer TItem>
  ? Array<
    {
      id: string;
    } & {
      [K in keyof TItem as K extends 'id' ? never : K]:
      K extends 'achievement'
      ? InferParagraphSchema<TItem[K]>
      : K extends 'link'
      ? InferFieldHypertextSchema<TItem[K]>
      : InferFieldSchema<TItem[K]>;
    }
  >
  : never;

export type InferWorkExperienceSchema<
  T extends WorkExperienceSchema
> = {
    [K in keyof T]:
    K extends 'history'
    ? InferWorkExperienceHistory<T[K]>
    : K extends 'sectionName'
    ? InferFieldSchema<T[K]>
    : K extends 'title'
    ? InferFieldSchema<T[K]>
    : never;
  };