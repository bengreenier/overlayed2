import { configure, addParameters, addDecorator } from '@storybook/react'
import { themes } from '@storybook/theming'
import { withKnobs } from '@storybook/addon-knobs'
import { withGrommet } from '../stories/grommet'

// Option defaults.
addParameters({
  options: {
    theme: themes.dark,
  },
})

addDecorator(withGrommet)
addDecorator(withKnobs)

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.jsx$/), module)
