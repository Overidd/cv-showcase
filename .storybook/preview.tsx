import type { Preview } from '@storybook/react-vite'
import { Measure } from '../src/shared/components/mock'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
  },

  globalTypes: {
    measureOutline: {
      description: 'Mostrar outline de medición',
      toolbar: {
        title: 'Outline',
        icon: 'outline',
        items: [
          { value: 'true', title: 'ON' },
          { value: 'false', title: 'OFF' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => (
      <Measure outline={context.globals.measureOutline === 'true'}>
        <Story />
      </Measure>
    ),
  ],
};

export default preview;