import React, { useEffect, useState } from 'react'
import { Text } from 'grommet'
import GridAlignedBox from '../GridAlignedBox'
import { ElementComponentProps } from '../../../context/Element'

/**
 * BasicRemoteElement properties
 */
interface Props extends ElementComponentProps {
  /**
   * The url to load the element from
   */
  url: string

  /**
   * Properties to forward onto the remote element
   */
  innerProps?: any
}

/**
 * BasicRemoteElement state
 */
interface State {
  /**
   * A react component allocator
   */
  allocate: (React: any, version: string) => React.ReactElement
}

/**
 * A component capable of loading remote content
 */
const BasicRemoteElement: React.FC<Props> = (props: Props) => {
  const [shouldLoad, setShouldLoad] = useState<boolean>(true)
  const [remoteAlloc, setRemoteAlloc] = useState<State>({
    allocate: () => <Text>Loading</Text>,
  })

  useEffect(() => {
    if (!shouldLoad) {
      return
    }

    const initModule = async () => {
      try {
        // the comment in the import is extremely important
        // if you need to understand this part, look at the webpack docs
        const module = await import(/* webpackIgnore: true */ props.url)

        // we now have the module allocator in module.default
        // we can store the allocator, by calling createElement on the result of default()
        setRemoteAlloc({
          allocate: (r, v) => React.createElement(module.default(r, v), props.innerProps),
        })
      } catch (ex) {
        // we can represent error state as if we'd loaded a remote plugin that says error
        setRemoteAlloc({
          allocate: () => <Text>{`Error: ${ex}`}</Text>,
        })
      }

      // we loaded something (even error state)
      setShouldLoad(false)
    }

    initModule()
  })

  // actual render
  return (
    <GridAlignedBox uniqueName={props.uniqueName}>
      {remoteAlloc.allocate(React, React.version)}
    </GridAlignedBox>
  )
}

export default BasicRemoteElement
