import React, { useState, useEffect } from 'react'

export interface ElementComponentProps {
  uniqueName: string
}

export interface ElementMetadata {
  url: string
  name: ElementComponentProps['uniqueName']
}

export interface ElementPosition {
  left: number
  top: number
}

const defaultContext = {
  elements: [] as ElementMetadata[],
  savePosition: (uniqueName: ElementMetadata['name'], position: ElementPosition) =>
    Promise.reject<void>(new Error(`Not implemented`)),
  loadPosition: (uniqueName: ElementMetadata['name']) =>
    Promise.reject<ElementPosition>(new Error(`Not implemented`)),
}

const ElementContext = React.createContext<typeof defaultContext>(defaultContext)

interface Props {
  url: string
  savePosition: typeof defaultContext['savePosition']
  loadPosition: typeof defaultContext['loadPosition']
}

const ElementProvider: React.FC<React.PropsWithChildren<Props>> = (
  props: React.PropsWithChildren<Props>
) => {
  const [elements, setElements] = useState<ElementMetadata[]>([])

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
  }, [props.url])

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

const useElements = () => React.useContext(ElementContext)

export { ElementProvider, useElements }
