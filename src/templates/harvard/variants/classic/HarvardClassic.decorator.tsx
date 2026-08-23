import './styles.css';

import { HarvardClassicTheme } from './HarvardClassicTheme';
import type { Decorator } from '@storybook/react-vite';
import { themeConfig } from '@/core/config';

export const withHarvardTheme: Decorator = (Story) => {
  return (
    <div
      className='cv-var'
      style={themeConfig(HarvardClassicTheme)}
    >
      <Story />
    </div>
  );
};