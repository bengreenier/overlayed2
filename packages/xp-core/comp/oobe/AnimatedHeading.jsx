import React from 'react'
import Anime from 'react-anime'
import PropTypes from 'prop-types'
import { Heading } from 'grommet'

export const AnimatedHeading = props => {
  return (
    <Heading {...props} a11yTitle={props.text}>
      <Anime
        key={`text-anim-${btoa(props.text)}`}
        opacity={[0, 1]}
        easing="easeInOutQuad"
        duration={1000}
        complete={props.onComplete}
        delay={(_, i) => 150 * (i + 1)}
      >
        {[...props.text].map((c, i) =>
          React.createElement('span', { key: `letter-${i}` }, c)
        )}
      </Anime>
    </Heading>
  )
}

AnimatedHeading.propTypes = {
  onComplete: PropTypes.func,
  text: PropTypes.string.isRequired,
}
