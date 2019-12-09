import React, { useState, useEffect } from 'react'

/**
 * property glue that all components need to implement to be first-class
 *
 * Note: this excluded components loaded by @see BasicRemoteElement as it handles that for them
 */
export interface ElementComponentProps {
  /**
   * A unique name for the instance of the element
   *
   * Note: behaves like 'key'
   */
  uniqueName: string
}

/**
 * Metadata for an element
 *
 * Note: this differs from the actual element, as it isn't renderable
 */
export interface ElementMetadata {
  /**
   * Url to the element source, that can be `import`-ed and rendered
   */
  url: string

  /**
   * Element name
   */
  name: ElementComponentProps['uniqueName']
}

/**
 * Represents a position in the layout for an element
 */
export interface ElementPosition {
  /**
   * The css left property (in px)
   */
  left: number

  /**
   * The css top property (in px)
   */
  top: number
}

/**
 * The default context for ElementContext
 */
const defaultContext = {
  elements: [] as ElementMetadata[],
  savePosition: (uniqueName: ElementMetadata['name'], position: ElementPosition) =>
    Promise.reject<void>(new Error(`Not implemented`)),
  loadPosition: (uniqueName: ElementMetadata['name']) =>
    Promise.reject<ElementPosition>(new Error(`Not implemented`)),
}

/**
 * The element context
 */
const ElementContext = React.createContext<typeof defaultContext>(defaultContext)

/**
 * Properties for the ElementProvider
 */
interface Props {
  /**
   * Url to json document containing element registry
   *
   * @example `/elements.json`, maps to `/public/elements.json` in this project
   */
  url: string

  /**
   * Helper for persisting element position data
   */
  savePosition: typeof defaultContext['savePosition']

  /**
   * Helper for loading element position data
   */
  loadPosition: typeof defaultContext['loadPosition']
}

/**
 * The element context provider
 * @param props properties
 */
const ElementProvider: React.FC<React.PropsWithChildren<Props>> = (
  props: React.PropsWithChildren<Props>
) => {
  // some state for capturing our supported elements
  // loaded by the effect below
  const [elements, setElements] = useState<ElementMetadata[]>([])

  // our first effect goes off and gets the element registry from `props.url`
  // we need this info before any subcomponents can render elements from the
  // registry.
  useEffect(() => {
    const initElements = async () => {
      const response = await fetch(props.url)

      // TODO(bengreenier): handle error case
      if (!response.ok) {
        return
      }

      const elements: ElementMetadata[] = await response.json()

      // TODO(bengreenier): handle error case
      if (elements.length === 0) {
        return
      }

      setElements(elements)
    }

    initElements()

    // only  re-run this effect if the elements registry url changes
  }, [props.url])

  // render
  return (
    <ElementContext.Provider
      value={{
        elements,
        savePosition: props.savePosition,
        loadPosition: props.loadPosition,
      }}
    >
      {props.children}
    </ElementContext.Provider>
  )
}

/**
 * Helper for consuming the element context
 */
const useElements = () => React.useContext(ElementContext)

export { ElementProvider, useElements }
