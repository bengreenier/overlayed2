import React, { useEffect, useState } from 'react'
import { Text } from 'grommet'
import GridAlignedBox from './GridAlignedBox'

interface Props {
  url: string
  innerProps?: any
}

interface State {
  allocate: (React: any, version: string) => React.ReactElement
}

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
        const module = await import(/* webpackIgnore: true */ props.url)
        setRemoteAlloc({
          allocate: (r, v) => React.createElement(module.default(r, v), props.innerProps),
        })
      } catch (ex) {
        setRemoteAlloc({
          allocate: () => <Text>{`Error: ${ex}`}</Text>,
        })
      }

      setShouldLoad(false)
    }

    initModule()
  })

  return <GridAlignedBox>{remoteAlloc.allocate(React, React.version)}</GridAlignedBox>
}

export default BasicRemoteElement
