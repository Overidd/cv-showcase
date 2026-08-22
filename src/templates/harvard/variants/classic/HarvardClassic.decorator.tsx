import './styles.css';

import { defaultTheme } from './defaultTheme';
import type { Decorator } from '@storybook/react-vite';
import { themeConfig } from '@/core/config';

export const withHarvardTheme: Decorator = (Story) => {
  return (
    <div
      className='cv-harvard-decorator'
      style={themeConfig(defaultTheme)}
    >
      <Story />
    </div>
  );
};