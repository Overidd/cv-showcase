import type {
  AcademySchema,
  InferAcademyItemSchema,
  InferAcademySchema
} from '@/core/schema';

export const academySchema = {
  sectionName: {
    value: 'Educación',
    display: true,
    isChangeDisplay: false,
  },

  collection: {
    item: {
      name: {
        display: true,
        isChangeDisplay: true,
      },

      title: {
        display: true,
        isChangeDisplay: true,
      },

      location: {
        display: true,
        isChangeDisplay: true,
      },

      period: {
        display: true,
        isChangeDisplay: true
      },

      paragraph: {
        display: true,
        isChangeDisplay: true
      }
    }
  }
} satisfies AcademySchema;

export type AcademyProps = InferAcademySchema<typeof academySchema>

export type AcademyItemProps = InferAcademyItemSchema<typeof academySchema>