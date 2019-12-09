import * as React from 'react'
import { createValueLimiter } from '../../util/fn'
import { sourcePropertiesEqual } from '../../util/object'
import { Box } from 'grommet'

/**
 * Initial grid configuration values
 */
interface InitialGridConfig {
  /**
   * Indicates if the grid itself should be enabled
   *
   * Note: this has no bearing on drawing children, they are always drawn
   */
  enabled: boolean

  /**
   * The grid line color (css string)
   */
  color: string

  /**
   * The initial grid size
   */
  initialSize: number

  /**
   * The amount at which the grid is scaled by
   */
  scaleBy: number

  /**
   * The max grid scale
   */
  maxScale: number

  /**
   * The min grid scale
   */
  minScale: number

  /**
   * Scale up key matcher
   *
   * @example {key: '>', shiftKey: true, ctrlKey: true}
   */
  upKeyMatcher: Partial<KeyboardEvent>

  /**
   * Scale down key matcher
   *
   * @example {key: '<', shiftKey: true, ctrlKey: true}
   */
  downKeyMatcher: Partial<KeyboardEvent>
}

/**
 * Mutable grid session state
 */
export interface GridState {
  /**
   * The current grid size
   */
  currentSize: number

  /**
   * Grow the current grid state by the pre-configured amount
   */
  grow: () => void

  /**
   * Shrink the current grid state by the pre-configured amount
   */
  shrink: () => void
}

export interface GridContext extends GridState {
  /**
   * Is the grid enabled? Mapped from props
   */
  enabled: boolean
}

/**
 * Context for interacting with the current grid state
 */
const GridStateContext = React.createContext<GridContext>({
  currentSize: 10,
  enabled: false,
  grow: () => {},
  shrink: () => {},
})

/**
 * Allows grid use from any GridView child
 */
export const useGrid = () => React.useContext(GridStateContext)

/**
 * CSS-driven Grid
 */
export default class GridView extends React.Component<InitialGridConfig, GridState> {
  /**
   * Default component properties (picked up by react internals)
   */
  public static readonly defaultProps = {
    color: '#CCC',
    upKeyMatcher: {
      key: '>',
      ctrlKey: true,
      shiftKey: true,
    },
    downKeyMatcher: {
      key: '<',
      ctrlKey: true,
      shiftKey: true,
    },
  }

  /**
   * Default ctor
   * @param props properties
   */
  constructor(props: Readonly<InitialGridConfig>) {
    super(props)

    const sizeLimiter = createValueLimiter<number>(
      this.props.minScale,
      this.props.maxScale
    )
    const adjustSize = (v: number) => {
      if (!this.props.enabled) {
        return
      }

      this.setState({
        currentSize: v,
      })
    }

    // configure the initial state
    this.state = {
      currentSize: this.props.initialSize,
      grow: () => adjustSize(sizeLimiter(this.state.currentSize + this.props.scaleBy)),
      shrink: () => adjustSize(sizeLimiter(this.state.currentSize - this.props.scaleBy)),
    }

    // scope-correct binds
    this.handleSystemKeyUp = this.handleSystemKeyUp.bind(this)
  }

  componentDidMount() {
    // create a scope-corrected system event handler for keyup events
    // mount a system handler for keyup events
    document.addEventListener('keyup', this.handleSystemKeyUp)
  }

  render() {
    const style: React.CSSProperties = {}

    if (this.props.enabled) {
      // grid is currentSize - 1, with width of 1 to end with cells of currentSize
      style.background = this.generateGrid(
        this.state.currentSize - 1,
        this.props.color,
        1
      )
    }

    return (
      <Box fill={true} style={style}>
        <GridStateContext.Provider value={{ ...this.state, enabled: this.props.enabled }}>
          {this.props.children}
        </GridStateContext.Provider>
      </Box>
    )
  }

  /**
   * Generate a CSS grid (for use as 'background' property)
   * @param spacing the space between each grid line
   * @param lineColor the color of the grid line
   * @param width the width of the grid line
   */
  private generateGrid(
    spacing: number,
    lineColor: string = '#CCC',
    width: number = 1
  ): string {
    return `repeating-linear-gradient(to right, transparent, transparent ${spacing}px, ${lineColor} ${spacing}px, ${lineColor} ${spacing +
      width}px),
      repeating-linear-gradient(to bottom, transparent, transparent ${spacing}px, ${lineColor} ${spacing}px, ${lineColor} ${spacing +
      width}px) repeat scroll right bottom`
  }

  /**
   * Handle a system-wide keyup event
   * @param e event
   */
  private handleSystemKeyUp(e: KeyboardEvent): void {
    if (!this.props.enabled) {
      return
    }

    const up = this.props.upKeyMatcher
    const down = this.props.downKeyMatcher

    // up key pressed
    if (sourcePropertiesEqual(up, e, false)) {
      this.state.grow()
    }
    // down key pressed
    else if (sourcePropertiesEqual(down, e, false)) {
      this.state.shrink()
    }
  }
}
