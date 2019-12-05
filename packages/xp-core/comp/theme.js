import { dark } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'

import '@openfonts/poppins_all'

export const theme = deepMerge(dark, {
  global: {
    font: {
      family: '"Poppins", sans-serif',
    },
    colors: {
      brand: '#640FC4',
      'accent-1': '#FFB2B2',
      'accent-2': '#129EB7',
    },
  },
})
