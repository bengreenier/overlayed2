import React from 'react'
import { Clock } from 'grommet'
import GridAlignedBox from '../GridAlignedBox'
import { ElementComponentProps } from '../../../context/Element'

/**
 * A clock component
 *
 * Note: this is more Proof of Concept than actual value-add
 * @param props properties
 */
const ClockElement: React.FC<ElementComponentProps> = (props: ElementComponentProps) => (
  <GridAlignedBox
    uniqueName={props.uniqueName}
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
