import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Stack } from 'grommet'
import { EditingMale } from '../../cw_shape/EditingMale'
import { AnimatedQuote } from '../AnimatedQuote'
import { theme } from '../../theme'

export const Intro = props => {
  const overallAnimationOut = props.isLastSlide
    ? undefined
    : { type: 'fadeOut', delay: props.slideLength * (props.index + 2) }

  return (
    <Box align="center" animation={overallAnimationOut}>
      <EditingMale width="large" />
      <Stack>
        <Box
          width="large"
          pad={{ bottom: 'medium' }}
          animation={{ type: 'fadeOut', delay: props.slideLength * (props.index + 1) }}
        >
          <AnimatedQuote minLength={10} maxLength={80} />
        </Box>
        <Box
          align="center"
          animation={{ type: 'fadeIn', delay: props.slideLength * (props.index + 1) }}
        >
          <Heading>
            Welcome to <span style={{ color: theme.global.colors.brand }}>Overlayed</span>
            .
          </Heading>
        </Box>
      </Stack>
    </Box>
  )
}

Intro.propTypes = {
  index: PropTypes.number.isRequired,
  slideLength: PropTypes.number.isRequired,
  isLastSlide: PropTypes.bool.isRequired,
}

Intro.defaultProps = {
  slideLength: 5000,
  isLastSlide: false,
}
