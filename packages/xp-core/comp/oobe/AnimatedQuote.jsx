import React from 'react'
import PropTypes from 'prop-types'
import MdQuote from 'react-ionicons/lib/MdQuote'
import { Box, Heading, Paragraph, Stack } from 'grommet'
import quotes from '@overlayed2/game-quotes'
import { theme } from '../theme'

export class AnimatedQuote extends React.Component {
  constructor(props) {
    super(props)

    const safeQuotes = quotes.filter(
      q => q.text.length > this.props.minLength && q.text.length < this.props.maxLength
    )

    const quote = safeQuotes[Math.floor(Math.random() * Math.floor(safeQuotes.length))]

    this.state = {
      quote,
    }

    this.onComplete = this.onComplete.bind(this)
  }

  render() {
    return (
      <Box
        fill="horizontal"
        animation={{ type: 'fadeIn', duration: this.props.duration }}
      >
        <Stack anchor="top-left">
          <Box>
            <MdQuote
              fontSize={theme.global.size.small}
              color={theme.global.colors.brand}
            />
          </Box>
          <Box pad={{ left: 'small' }} fill="horizontal">
            <Heading level="2" style={{ fontWeight: 'normal' }} {...this.props}>
              {this.state.quote.text}
              <Paragraph
                style={{ fontWeight: 'lighter' }}
              >{`-${this.state.quote.speaker}, ${this.state.quote.game}`}</Paragraph>
            </Heading>
          </Box>
        </Stack>
      </Box>
    )
  }

  onComplete() {
    if (this.props.onComplete) {
      this.props.onComplete.apply(...arguments)
    }
  }
}

AnimatedQuote.propTypes = {
  duration: PropTypes.number.isRequired,
  minLength: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired,
  onComplete: PropTypes.func,
}

AnimatedQuote.defaultProps = {
  duration: 1000,
  minLength: 0,
  maxLength: 999,
}
