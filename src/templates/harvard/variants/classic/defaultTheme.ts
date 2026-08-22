import type { ThemeConfigCSS } from "@/core/config/theme/themeConfig.css";

export const defaultTheme: ThemeConfigCSS = {
  typography: {
    // Harvard clásico suele funcionar muy bien con una serif tradicional.
    fontFamily: 'Calibri',

    // Tamaño general del contenido.
    scale: 1,

    // Los encabezados ligeramente más grandes que su tamaño base.
    headingScale: 1,

    // Interlineado compacto pero cómodo para un CV.
    lineHeight: 1,
  },

  page: {
    size: 'A4',

    padding: {
      top: '14mm',
      right: '16mm',
      bottom: '14mm',
      left: '16mm',
    },
  },

  colors: {
    primary: '#1F2937',

    secondary: '#4B5563',

    text: '#111827',

    muted: '#b9b9b9',

    background: '#FFFFFF',

    border: '#D1D5DB',
  },

  spacing: {
    section: '4.5mm',

    component: '0.65rem',

    item: '0.3rem',
  },
};


export const harvardClassicMetadata = {
  id: "harvard-classic",
  family: "harvard",
  variant: "classic",

  name: "Harvard Classic",

  description:
    "Traditional academic and professional resume",

  atsCompatible: true,

  columns: 1,

  recommendedFor: [
    "academic",
    "professional",
    "corporate"
  ]
};

/**

┌─────────────────────────────┐
│ Harvard Classic             │
│                             │
│ ✓ ATS Compatible            │
│ ✓ 1 Column                  │
│                             │
│ Academic                    │
│ Professional                │
│ Corporate                   │
│                             │
│ [Usar plantilla]            │
└─────────────────────────────┘
Sin tener que renderizar el CV para saber qué plantilla es.

 */