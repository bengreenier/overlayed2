import React from 'react'
import { useGrid } from './GridView'
import { Box, Button } from 'grommet'
import { ReactComponent as AddCircleOutline } from 'ionicons/dist/collection/icon/svg/md-add-circle-outline.svg'
import { ReactComponent as RemoveCircleOutline } from 'ionicons/dist/collection/icon/svg/md-remove-circle-outline.svg'
import { theme } from '../../util/theme'

const GridResizerElement: React.FC = () => {
  const { shrink, grow } = useGrid()

  return (
    <Box
      pad="small"
      width="xxsmall"
      background={{ color: 'accent-1', opacity: 0.6 }}
      align="center"
      direction="column"
    >
      <Button onClick={grow}>
        <AddCircleOutline fill={theme.global.colors.brand} />
      </Button>
      <Button onClick={shrink}>
        <RemoveCircleOutline fill={theme.global.colors.brand} />
      </Button>
    </Box>
  )
}

export default GridResizerElement
