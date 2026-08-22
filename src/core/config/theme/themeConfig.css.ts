export interface ThemeConfigCSS {
  /**
   * Configuración tipográfica global del CV.
   * Afecta a las secciones y componentes que utilicen
   * los tokens tipográficos del template.
   */
  typography: {
    /**
     * Familia tipográfica principal utilizada por el CV.
     *
     * Ejemplo:
     * "Inter", "Arial", "Georgia"
     */
    fontFamily: string;

    /**
     * Escala global del tamaño de texto.
     *
     * Permite aumentar o reducir proporcionalmente
     * los tamaños de texto definidos por el template.
     *
     * 1    → tamaño normal
     * 1.1  → aumenta un 10%
     * 0.9  → reduce un 10%
     */
    scale: number;

    /**
     * Escala adicional aplicada a los encabezados
     * de las secciones.
     *
     * Permite aumentar o reducir proporcionalmente
     * los títulos respecto a su tamaño definido por el template.
     *
     * 1    → tamaño normal
     * 1.1  → aumenta un 10%
     * 0.9  → reduce un 10%
     */
    headingScale: number;

    /**
     * Interlineado global del contenido textual.
     *
     * Se utiliza como valor de line-height.
     *
     * Ejemplo:
     * 1.4 → una línea ocupa 1.4 veces el tamaño de la fuente.
     */
    lineHeight: number;
  };

  /**
   * Configuración física de la página del CV.
   */
  page: {
    /**
     * Formato físico de la página.
     *
     * A4     → 210 × 297 mm
     * LETTER → 8.5 × 11 in
     */
    size: 'A4' | 'LETTER';

    /**
     * Espacio interno entre los bordes de la página
     * y el contenido del CV.
     *
     * Se recomienda utilizar unidades físicas como mm
     * para mantener consistencia al generar/imprimir el PDF.
     */
    padding: {
      /**
       * Espacio interno superior de la página.
       */
      top: string;

      /**
       * Espacio interno derecho de la página.
       */
      right: string;

      /**
       * Espacio interno inferior de la página.
       */
      bottom: string;

      /**
       * Espacio interno izquierdo de la página.
       */
      left: string;
    };
  };

  /**
   * Paleta de colores global del CV.
   *
   * Los componentes y secciones deberían consumir estos
   * colores mediante tokens en lugar de definir colores
   * directamente.
   */
  colors: {
    /**
     * Color principal del template.
     *
     * Puede utilizarse para elementos destacados como:
     * - títulos de secciones
     * - barra lateral
     * - iconos destacados
     * - elementos de énfasis
     */
    primary: string;

    /**
     * Color secundario del template.
     *
     * Puede utilizarse para elementos con menor jerarquía visual como:
     * - subtítulos
     * - descripciones
     * - metadata
     * - información secundaria
     */
    secondary: string;

    /**
     * Color principal del texto del contenido.
     *
     * Se utiliza normalmente para:
     * - descripciones
     * - experiencia
     * - educación
     * - proyectos
     */
    text: string;

    /**
     * Color para contenido de baja prioridad visual.
     *
     * Por ejemplo:
     * - fechas
     * - etiquetas
     * - información auxiliar
     */
    muted: string;

    /**
     * Color de fondo principal del CV.
     *
     * Normalmente será blanco, pero permite que un template
     * utilice otro color de fondo.
     */
    background: string;

    /**
     * Color utilizado para bordes y separadores.
     *
     * Por ejemplo:
     * - líneas divisorias
     * - bordes de elementos
     * - separadores entre contenidos
     */
    border: string;
  };

  /**
   * Espaciado global entre los diferentes niveles
   * de contenido del CV.
   */
  spacing: {
    /**
     * Espacio entre secciones principales del CV.
     *
     * Ejemplo:
     * Experience → Education
     * Education → Skills
     *
     * Puede utilizar unidades físicas como mm.
     */
    section: string;

    /**
     * Espacio entre los componentes que forman una sección.
     *
     * Por ejemplo, dentro de Experience:
     *
     * empresa
     *   ↓
     * cargo
     *   ↓
     * descripción
     */
    component: string;

    /**
     * Espacio entre elementos pequeños relacionados.
     *
     * Por ejemplo:
     * - icono ↔ texto
     * - fecha ↔ ubicación
     * - etiquetas
     * - elementos de contacto
     *
     * Normalmente puede utilizar unidades relativas como rem.
     */
    item: string;
  };
}