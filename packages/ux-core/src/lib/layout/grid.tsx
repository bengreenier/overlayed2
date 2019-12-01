import * as React from 'react'
import { createValueLimiter } from '../util/fn'
import { sourcePropertiesEqual } from '../util/object'

/**
 * Initial grid configuration values
 */
interface InitialGridConfig {
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
 * Mutable grid configuration values (mutated from {InitialGridConfig})
 */
interface MutableGridConfig {
  /**
   * The current grid size
   */
  currentSize: number
}

/**
 * Mutable grid session state
 */
export interface GridState extends MutableGridConfig {
  /**
   * Grow the current grid state by the pre-configured amount
   */
  grow: () => void

  /**
   * Shrink the current grid state by the pre-configured amount
   */
  shrink: () => void
}

/**
 * Context for interacting with the current grid state
 */
export const GridStateContext = React.createContext<GridState>({
  currentSize: 10,
  grow: () => {},
  shrink: () => {},
})

/**
 * CSS-driven Grid
 */
export default class Grid extends React.Component<InitialGridConfig, GridState> {
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
   * static CSS for the main grid effect
   */
  private static readonly gridStyles: React.CSSProperties = {
    margin: '0 0 0 0',
    padding: '0 0 0 0',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
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
    return (
      <div
        style={{
          ...Grid.gridStyles,
          // grid is currentSize - 1, with width of 1 to end with cells of currentSize
          background: this.generateGrid(this.state.currentSize - 1, this.props.color, 1),
        }}
      >
        <GridStateContext.Provider value={this.state}>
          {this.props.children}
        </GridStateContext.Provider>
      </div>
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
