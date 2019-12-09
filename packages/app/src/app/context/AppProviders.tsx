import React from 'react'
import { AuthProvider } from './Auth'
import history from '../util/history'
import { ElementProvider, ElementPosition } from './Element'

const onRedirectCallback = (appState: unknown) => {
  const unsafeAppState = appState as any

  history.push(
    unsafeAppState && unsafeAppState.targetUrl
      ? unsafeAppState.targetUrl
      : window.location.pathname
  )
}

const onSavePosition = (uniqueName: string, position: ElementPosition) => {
  localStorage.setItem(`browser-element[${uniqueName}].pos`, JSON.stringify(position))

  return Promise.resolve()
}

const onLoadPosition = (uniqueName: string) => {
  const item = localStorage.getItem(`browser-element[${uniqueName}].pos`)
  if (item === null) {
    return Promise.reject(new Error(`No position data for ${uniqueName}.`))
  }

  try {
    const pos = JSON.parse(item) as ElementPosition

    return Promise.resolve(pos)
  } catch (ex) {
    return Promise.reject(new Error(`Unable to parse position for ${uniqueName}: ${ex}`))
  }
}

const AppProviders: React.FC = ({ children }) => {
  return (
    <AuthProvider
      domain="dev-xq3gwvmj.auth0.com"
      client_id="knVuTpG31KOu8gefhQUqW6rwgFFMrgM1"
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <ElementProvider
        url="/elements.json"
        savePosition={onSavePosition}
        loadPosition={onLoadPosition}
      >
        {children}
      </ElementProvider>
    </AuthProvider>
  )
}

export default AppProviders
