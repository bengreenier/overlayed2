import * as React from 'react'
import { GridStateContext } from './grid'

/**
 * Styles applied to the managed node
 */
const managedStyle: React.CSSProperties = {
  display: 'flex',
  height: 'inherit',
  width: 'inherit',
  userSelect: 'none',
}

/**
 * Styles applied to the resize wrapper
 */
const resizeStyle: React.CSSProperties = {
  display: 'inline-block',
  resize: 'both',
  overflow: 'auto',
  backgroundColor: 'rgba(255,255,255, 0.6)',
  padding: '10px 10px 10px 10px',
  borderRadius: '4px',
}

type Point = { x: number; y: number }

/**
 * A default x:0, y:0 point
 */
const emptyPoint: Point = { x: 0, y: 0 }

/**
 * Make a point with a given scale
 * @param scale the scale of the point
 */
const makeScalePoint = (scale: number): Point => ({ x: scale, y: scale })

/**
 * Component props
 */
interface Props {
  /**
   * Cursor to display on hover
   */
  cursor: string

  /**
   * Background color of the element
   * Note: use `rgba(255,255,255, 0.5)` for transparency
   */
  backgroundColor: string
}

/**
 * The default props
 */
const defaultProps: Partial<Props> = {
  cursor: 'grab',
  backgroundColor: 'rgba(0,255, 0, 0.6)',
}

/**
 * State that can be persisted and re-inflated
 */
interface PersistentState {
  /**
   * Indicates the calculated element position
   * Note: grid-aware (and adjusted)
   * Note: only valid when isUndergoingDrag === true
   */
  position: Point

  /**
   * Indicates the calculated element size
   */
  size: Point
}

/**
 * Component state
 */
interface State extends PersistentState {
  /**
   * Indicates if the component is currently being dragged
   */
  isUndergoingDrag: boolean

  /**
   * Indicates the drag handle
   * Note: only valid when isUndergoingDrag === true
   */
  dragHandle: Point
}

/**
 * Wrapper to automagically style grid elements
 * Note: Adds a dom <div> layer
 */
export default class DisplayManagedNode extends React.Component<Props, State> {
  public static readonly contextType = GridStateContext
  public context!: React.ContextType<typeof GridStateContext>

  public static readonly defaultProps = defaultProps

  constructor(props: Readonly<Props>) {
    super(props)

    // read our display state (if any)
    let possibleStoredState: Partial<State> = {}
    const possibleStateString = localStorage.getItem(`${this.constructor.name}.dmn.state`)
    if (possibleStateString) {
      const possibleState = JSON.parse(possibleStateString)
      possibleStoredState = { ...possibleState }
    }

    this.state = {
      isUndergoingDrag: false,
      dragHandle: emptyPoint,
      position: possibleStoredState.position || emptyPoint,
      size: possibleStoredState.size || makeScalePoint(10),
    }

    // This binding is necessary to make `this` work in the callback
    this.startDrag = this.startDrag.bind(this)
    this.onDrag = this.onDrag.bind(this)
    this.stopDrag = this.stopDrag.bind(this)
  }

  componentWillUnmount() {
    // try to cleanup global handler, just in case one is still in place
    this.tryCleanupDragHandlers()

    // persist our display state
    localStorage.setItem(
      `${this.constructor.name}.dmn.state`,
      JSON.stringify({
        position: this.state.position,
        size: this.state.size,
      })
    )
  }

  render() {
    return (
      <div
        style={{
          ...resizeStyle,
          position: this.state.isUndergoingDrag ? 'absolute' : 'inherit',
          left: `${this.state.position.x}px`,
          top: `${this.state.position.y}px`,
        }}
      >
        <div
          style={{
            ...managedStyle,
            cursor: this.props.cursor,
            backgroundColor: this.props.backgroundColor,
          }}
          onMouseDown={this.startDrag}
        >
          {this.props.children}
        </div>
      </div>
    )
  }

  /**
   * Convert a number to the closest grid-adjusted number
   */
  private toGrid = (val: number) =>
    Math.ceil(val / this.context.currentSize) * this.context.currentSize

  /**
   * Drag start handler
   * @param e event
   */
  private startDrag(e: React.MouseEvent) {
    const targetBB = e.currentTarget.getBoundingClientRect()
    const dragHandle = {
      x: e.clientX - targetBB.left,
      y: e.clientY - targetBB.top,
    }

    this.setState({
      isUndergoingDrag: true,
      position: {
        x: this.toGrid(e.clientX - dragHandle.x),
        y: this.toGrid(e.clientY - dragHandle.y),
      },
      dragHandle,
    })

    document.addEventListener('mouseup', this.stopDrag)
    document.addEventListener('mousemove', this.onDrag)
  }

  /**
   * Drag processing handler (occurs each tick during a drag)
   * @param e event
   */
  private onDrag(e: MouseEvent) {
    this.setState({
      position: {
        x: this.toGrid(e.clientX - this.state.dragHandle.x),
        y: this.toGrid(e.clientY - this.state.dragHandle.y),
      },
    })
  }

  /**
   * Drag stop handler
   * @param _ event (unused)
   */
  private stopDrag(_: MouseEvent) {
    this.setState({
      isUndergoingDrag: false,
    })

    this.tryCleanupDragHandlers()
  }

  /**
   * Trys to clean up any uncleaned system-wide event handlers
   */
  private tryCleanupDragHandlers() {
    document.removeEventListener('mouseup', this.stopDrag)
    document.removeEventListener('mousemove', this.onDrag)
  }
}
