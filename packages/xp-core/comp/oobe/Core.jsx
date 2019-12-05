import React from 'react'
import { Box, Heading, Stack, CheckBox, List } from 'grommet'
import { EditingScreenIcon } from '../ShapeAnims'
import { AnimatedQuote } from './AnimatedQuote'
import { theme } from '../theme'

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
          <Box
            align="center"
            className="intro"
            animation={{ type: 'fadeOut', delay: slideLength * 2 }}
          >
            <Box width="large">
              <EditingScreenIcon />
            </Box>
            <Stack>
              <Box
                width="large"
                pad={{ bottom: 'medium' }}
                animation={{ type: 'fadeOut', delay: slideLength * 1 }}
              >
                <AnimatedQuote minLength={10} maxLength={80} />
              </Box>
              <Box align="center" animation={{ type: 'fadeIn', delay: slideLength * 1 }}>
                <Heading>
                  Welcome to{' '}
                  <span style={{ color: theme.global.colors.brand }}>Overlayed</span>.
                </Heading>
              </Box>
            </Stack>
          </Box>
          <Box
            align="center"
            className="intro"
            animation={{ type: 'fadeIn', delay: slideLength * 2 }}
          >
            <Heading>
              We&apos;ve just got a few things we need your help with, first:
            </Heading>
            <List
              data={[
                {
                  checked: true,
                  label: 'Boot up meme generator',
                },
                {
                  checked: false,
                  label: 'Create top-notch content',
                },
                {
                  checked: false,
                  label: 'Secure big donations',
                },
              ]}
            >
              {datum => {
                return <CheckBox checked={datum.checked} label={datum.label} />
              }}
            </List>
          </Box>
        </Stack>
      </Box>
    )
  }
}
