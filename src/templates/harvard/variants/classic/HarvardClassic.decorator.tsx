import './styles.css';

import { themeConfig } from '@/core/config';
import { defaultTheme } from './harvardClassic.metadata';
import type { Decorator } from '@storybook/react-vite';

export const withHarvardTheme: Decorator = (Story) => {
  return (
    <div
      style={themeConfig(defaultTheme)}
    >
      <Story />
    </div>
  );
};