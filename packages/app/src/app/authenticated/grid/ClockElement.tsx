import React from 'react'
import { Box, Clock } from 'grommet'

const ClockElement: React.FC = () => (
  <Box width="small" background="brand" pad="small" align="center" direction="row">
    <Clock type="digital" />
  </Box>
)

export default ClockElement
