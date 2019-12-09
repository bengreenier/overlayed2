import { dark, base } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'

// include font data
import '@openfonts/poppins_all'

/**
 * Our grommet theme
 */
export const theme = deepMerge(
  base,
  deepMerge(dark, {
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
)
