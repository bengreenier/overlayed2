import React from 'react'
import { Clock } from 'grommet'
import GridAlignedBox from '../GridAlignedBox'

const ClockElement: React.FC = () => (
  <GridAlignedBox
    width="small"
    background="brand"
    pad="small"
    align="center"
    direction="row"
  >
    <Clock type="digital" />
  </GridAlignedBox>
)

export default ClockElement
