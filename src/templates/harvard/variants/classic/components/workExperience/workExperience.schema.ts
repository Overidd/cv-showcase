import type {
  InferWorkExperienceSchema,
  WorkExperienceSchema
} from '@/core/schema';

export const workExperienceSchema = {
  sectionName: {
    display: true,
    isChangeDisplay: false,
    value: 'Experiencia Laboral'
  },
  items: [
    {
      title: {
        display: true,
        isChangeDisplay: true,
      },

      companyName: {
        display: true,
        isChangeDisplay: true,
      },

      description: {
        display: true,
        isChangeDisplay: true,
      },

      paragraph: {
        display: true,
        isChangeDisplay: true,
        marker: 'circle',
      },

      location: {
        display: true,
        isChangeDisplay: true,
      },

      period: {
        display: true,
        isChangeDisplay: true,
      },

      link: {
        display: true,
        isChangeDisplay: true,
      }
    }
  ]
} satisfies WorkExperienceSchema;

export type WorkExperienceProps = InferWorkExperienceSchema<typeof workExperienceSchema>