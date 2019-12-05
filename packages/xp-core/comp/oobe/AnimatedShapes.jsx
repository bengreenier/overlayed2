import React from 'react'
import PropTypes from 'prop-types'
import Anime from 'react-anime'
import { Box } from 'grommet'
import { theme } from '../theme'

export const AnimatedShapes = props => (
  <Box>
    <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: theme.global.colors.brand }}>
      <Anime
        points="64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96"
        easing="easeInOutQuad"
        direction="alternate"
        loop={true}
        delay={(_, i) => 150 * (i + 1)}
        loopComplete={props.onComplete}
      >
        <polygon points="64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100" />
      </Anime>
    </svg>
  </Box>
)

AnimatedShapes.propTypes = {
  onComplete: PropTypes.func,
}
