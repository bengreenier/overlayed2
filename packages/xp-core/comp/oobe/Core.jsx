import React from 'react'
import { Box, Heading, Stack } from 'grommet'
import { Intro } from './steps/Intro'
import { Setup } from './steps/Setup'

const slideLength = 5000

export class Core extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Box fill={true} align="center">
        <Box alignSelf="start" pad={{ left: 'medium', bottom: 'none' }} margin="none">
          <Heading level="4" color="brand">
            Overlayed
          </Heading>
        </Box>
        <Stack>
          <Intro index={0} slideLength={slideLength} isLastSlide={false} />
          <Setup index={1} slideLength={slideLength} />
        </Stack>
      </Box>
    )
  }
}
