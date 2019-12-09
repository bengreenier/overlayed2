import React, { useRef, useEffect, useState } from 'react'
import { BoxProps, Box } from 'grommet'
import { useGrid } from './GridView'
import { AlignSelfType, GridAreaType, MarginType, FillType, GapType } from 'grommet/utils'

interface PositionBasedBoxProps {
  alignSelf?: AlignSelfType
  gridArea?: GridAreaType
  margin?: MarginType
  flex?: 'grow' | 'shrink' | boolean | { grow?: number; shrink?: number }
  fill?: FillType
  gap?: GapType
  responsive?: boolean
}

type Props = React.PropsWithChildren<Omit<BoxProps, keyof PositionBasedBoxProps>>

const toGrid = (currentSize: number, val: number) =>
  Math.round(val / currentSize) * currentSize

const defaultPosState = -1

const GridAlignedBox: React.FC<Props> = (props: Props) => {
  // observe the current size of the grid
  const { currentSize, enabled } = useGrid()

  // configure two state values (and setters) for our positioning
  // note: the default state is a non-reachable value!!
  const [leftState, setLeftState] = useState<number>(defaultPosState)
  const [topState, setTopState] = useState<number>(defaultPosState)

  // create a ref that we can store our box in after the first render
  const boxNode = useRef<HTMLDivElement>(null)

  // queue our first effect. it runs after each render, but only if boxNode has changed
  // this means it runs once (after first render), and then only again if the dom element
  // itself changes
  useEffect(() => {
    if (!boxNode || !boxNode.current) {
      return
    }

    // get the actual bb of the element
    const boxBB = boxNode.current.getBoundingClientRect()

    // save the left and top values. despite using setters, react will diff these values
    // for us, so the values `leftState` and `topState` only actually change if they do
    // not match the previous values
    setLeftState(toGrid(currentSize, boxBB.left))
    setTopState(toGrid(currentSize, boxBB.top))

    // We must not run this effect when currentSize changes, as we want to pin our box
    // regardless of size changes. therefore, we must ignore the linter complaining that
    // `currentSize` should be in deps
    //
    // eslint-disable-next-line
  }, [boxNode])
  // queue our second effect. it runs after each render, but only if leftState or topState
  // have changed. this means it runs whenever our effect (above) actually results in
  // a state change
  useEffect(() => {
    // further, we throw out the initial state change! This is key, as the dom fires
    // an event for each new render where leftState and topState are their initial value
    // since we can determine that value to be invalid, we can disregard this change.
    //
    // without the ability to do so, our diff logical rubberbands from 0 <=> correct value
    if (
      !boxNode ||
      !boxNode.current ||
      leftState === defaultPosState ||
      topState === defaultPosState
    ) {
      return
    }

    // make the node absolutely positioned
    boxNode.current.style.position = 'absolute'

    // but now, on the grid
    boxNode.current.style.left = `${leftState}px`
    boxNode.current.style.top = `${topState}px`
  }, [leftState, topState])

  // our snap handler that enforces grid positioning
  // we'll bind this during the move to snap moving
  const snapMove = (e: MouseEvent) => {
    if (!e.currentTarget || !e.currentTarget) {
      return
    }

    // just as above, calculate the new state value given the movement
    // we'll rely on the effect (bound above) to do the actual css change
    setLeftState(toGrid(currentSize, e.clientX))
    setTopState(toGrid(currentSize, e.clientY))
  }

  const style: React.CSSProperties = {}

  if (enabled) {
    style.cursor = 'grab'
  }

  // finally, render the box
  // note: we've bound pointer handlers to allow for the movement
  return (
    <Box
      ref={boxNode}
      {...props}
      style={style}
      onPointerDown={e => {
        if (!enabled) return

        e.preventDefault()
        e.currentTarget.setPointerCapture(e.pointerId)
        e.currentTarget.onpointermove = snapMove
      }}
      onPointerUp={e => {
        e.currentTarget.onpointermove = null
        e.currentTarget.releasePointerCapture(e.pointerId)
      }}
    />
  )
}

export default GridAlignedBox
