import type {
  InferVoluntariadoItemSchema,
  InferVoluntariadoSchema,
  VoluntariadoSchema,
} from '@/core/schema';

export const voluntariadoSchema = {
  sectionName: {
    value: 'Voluntariado',
    display: true,
    isChangeDisplay: false,
  },

  item: {
    name: {
      display: true,
      isChangeDisplay: true,
    },

    title: {
      display: true,
      isChangeDisplay: true,
    },

    date: {
      display: true,
      isChangeDisplay: true,
    },

    description: {
      display: true,
      isChangeDisplay: true,
    },
  },
} satisfies VoluntariadoSchema;

export type VoluntariadoProps = InferVoluntariadoSchema<typeof voluntariadoSchema>;

export type VoluntariadoItemProps = InferVoluntariadoItemSchema<typeof voluntariadoSchema>;
