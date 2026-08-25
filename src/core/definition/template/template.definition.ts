import type {
  ThemeConfigCSS
} from '@/core/config';

import type {
  AnySectionDefinition,
  SectionKey
} from '../seaction';

export interface TemplateLayout {
  main: boolean;
  sidebar: boolean;
}

export interface TemplateColumnDefinition {
  main: SectionKey[],
  sidebar: SectionKey[],
}

export interface TemplateMetadata {
  /** Estructura de columnas disponible en el template. */
  layout: TemplateLayout;

  /** Configuración de cada columna. */
  column: TemplateColumnDefinition;
}

export interface TemplateSectionDefinition {
  key: SectionKey,
  order: 1,
  row: 1,
  column: 0.
}

export interface TemplateDefinition {
  /** Identificador único del template */
  id: string;

  /** Nombre visible del template */
  name: string;

  /** Descripción del template */
  description?: string;

  /** Versión del template */
  version: string;

  /** Autor o creador */
  author?: string;

  /** Configuración visual soportada */
  theme: ThemeConfigCSS

  /** Secciones soportadas por el template */
  sections: Array<AnySectionDefinition>;

  /** Variantes disponibles para cada sección */
  // variants?: Record<string, Array<string>>;

  /** Componente principal del template */
  component: React.ComponentType;

  /** Metadatos adicionales */
  metadata: TemplateMetadata;

  initialSections: Array<TemplateSectionDefinition>
}


export interface TemplateProps
  extends React.HTMLAttributes<HTMLDivElement> {
  main?: React.ReactNode;
  sidebar?: React.ReactNode;
}