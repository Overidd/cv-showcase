import type {
  CSSVariables
} from '@/core/type';

import type {
  ThemeConfigCSS
} from './themeConfig.css';

const PAGE_SIZES = {
  A4: {
    width: '210mm',
    height: '297mm',
  },

  LETTER: {
    width: '8.5in',
    height: '11in',
  },
} as const;

export const themeConfig = (
  theme: ThemeConfigCSS
): CSSVariables => {

  const pageSize = PAGE_SIZES[theme.page.size];

  return {
    '--cv-font-family': theme.typography.fontFamily,
    '--cv-font-scale': theme.typography.scale,
    '--cv-heading-scale': theme.typography.headingScale,
    '--cv-line-height': theme.typography.lineHeight,

    '--cv-page-width': pageSize.width,
    '--cv-page-height': pageSize.height,

    '--cv-page-padding-top': theme.page.padding.top,
    '--cv-page-padding-right': theme.page.padding.right,
    '--cv-page-padding-bottom': theme.page.padding.bottom,
    '--cv-page-padding-left': theme.page.padding.left,

    '--cv-color-primary': theme.colors.primary,
    '--cv-color-secondary': theme.colors.secondary,
    '--cv-color-text': theme.colors.text,
    '--cv-color-muted': theme.colors.muted,
    '--cv-color-background': theme.colors.background,
    '--cv-color-border': theme.colors.border,

    '--cv-spacing-section': theme.spacing.section,
    '--cv-spacing-component': theme.spacing.component,
    '--cv-spacing-item': theme.spacing.item,
  };
}