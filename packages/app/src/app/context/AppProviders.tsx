import React from 'react'
import { AuthProvider } from './Auth'
import history from '../util/history'
import { ElementProvider, ElementPosition } from './Element'

/**
 * Authentication redirect helper
 * @param appState the state of the app
 */
const onRedirectCallback = (appState: unknown) => {
  const unsafeAppState = appState as any

  history.push(
    unsafeAppState && unsafeAppState.targetUrl
      ? unsafeAppState.targetUrl
      : window.location.pathname
  )
}

/**
 * Element layout serializer
 * @param uniqueName element name
 * @param position element position
 */
const onSavePosition = (uniqueName: string, position: ElementPosition) => {
  // store the state - note this format implies that uniqueName should not contain
  // [ ] in it, or parsing could get messy
  localStorage.setItem(`browser-element[${uniqueName}].pos`, JSON.stringify(position))

  return Promise.resolve()
}

/**
 * Element layout deserializer
 * @param uniqueName element name
 */
const onLoadPosition = (uniqueName: string) => {
  // try to read the layout data
  const item = localStorage.getItem(`browser-element[${uniqueName}].pos`)
  if (item === null) {
    // if there's no data, we fail out
    return Promise.reject(new Error(`No position data for ${uniqueName}.`))
  }

  try {
    // try to parse the data
    const pos = JSON.parse(item) as ElementPosition

    // return the happily parsed data
    return Promise.resolve(pos)
  } catch (ex) {
    // if the parse fails, we fail, after clearing in the field
    // this is an optimization for corrupt data cases
    localStorage.removeItem(`browser-element[${uniqueName}].pos`)

    return Promise.reject(new Error(`Unable to parse position for ${uniqueName}: ${ex}`))
  }
}

/**
 * Provides configured context wrappers for the app
 * @param props
 */
const AppProviders: React.FC = ({ children }) => {
  // note: these configuration values aren't actually secrets
  // they're going to need to be in the client regardless, may as well hardcode for now
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
