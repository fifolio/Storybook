import type { Preview } from '@storybook/react-vite'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

export const preview: Preview = {
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
      test: 'todo',
    }
  },
};

export const decorators = [
  (Story: React.FC) => (
    <ChakraProvider value={defaultSystem}>
      <Story />
    </ChakraProvider>
  ),
];