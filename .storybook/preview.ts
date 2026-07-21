import type { Preview } from '@storybook/react'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
import '../src/styles/globals.scss'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Overview', '*'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  },
}

export default preview
