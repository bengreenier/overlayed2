import React from 'react'
import { useGrid } from './GridView'
import { Button } from 'grommet'
import { ReactComponent as AddCircleOutline } from 'ionicons/dist/collection/icon/svg/md-add-circle-outline.svg'
import { ReactComponent as RemoveCircleOutline } from 'ionicons/dist/collection/icon/svg/md-remove-circle-outline.svg'
import { theme } from '../../util/theme'
import GridAlignedBox from './GridAlignedBox'

const GridResizerElement: React.FC = () => {
  const { shrink, grow, enabled } = useGrid()

  return (
    <GridAlignedBox
      pad="small"
      width="xxsmall"
      background={{ color: 'accent-1', opacity: 0.6 }}
      align="center"
      direction="column"
    >
      <Button onClick={grow} disabled={!enabled}>
        <AddCircleOutline fill={theme.global.colors.brand} />
      </Button>
      <Button onClick={shrink} disabled={!enabled}>
        <RemoveCircleOutline fill={theme.global.colors.brand} />
      </Button>
    </GridAlignedBox>
  )
}

export default GridResizerElement
