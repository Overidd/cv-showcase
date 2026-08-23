import type {
  InferCollectionSchema,
  InferFieldHypertextSchema,
  InferFieldSchema,
} from '@/core/interface';

import type {
  WorkExperienceSchema
} from './workExperience.schema';

export type InferWorkExperienceSchema<T extends WorkExperienceSchema> = {
  [K in keyof T]:
  K extends 'sectionName'
  ? InferFieldSchema<T[K]>
  : K extends 'title'
  ? InferFieldSchema<T[K]>
  : K extends 'companyName'
  ? InferFieldSchema<T[K]>
  : K extends 'description'
  ? InferFieldSchema<T[K]>
  : K extends 'achievements'
  ? InferCollectionSchema<T[K]>
  : K extends 'location'
  ? InferFieldSchema<T[K]>
  : K extends 'period'
  ? InferFieldSchema<T[K]>
  : K extends 'link'
  ? InferFieldHypertextSchema<T[K]>
  : never;
};