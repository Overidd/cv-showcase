import type {
  CertificationSchema,
  InferCertificationItemSchema,
  InferCertificationSchema,
} from '@/core/schema';

export const certificationSchema = {
  sectionName: {
    value: 'Certificaciones',
    display: true,
    isChangeDisplay: false,
  },

  collection: {
    item: {
      name: {
        display: true,
        isChangeDisplay: true,
      },

      description: {
        display: true,
        isChangeDisplay: true,
      },
    },
  },
} satisfies CertificationSchema;

export type CertificationProps = InferCertificationSchema<typeof certificationSchema>;

export type CertificationItemProps = InferCertificationItemSchema<typeof certificationSchema>;
