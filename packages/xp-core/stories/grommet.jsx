import React from 'react'
import { Grommet } from 'grommet'
import { theme } from '../comp/theme'

/**
 * Decorator to use a grommet wrapper with a theme for a component/story
 * @param {Function} renderFn a react render function
 */
export const withGrommet = renderFn => {
  return <Grommet theme={theme}>{renderFn()}</Grommet>
}
