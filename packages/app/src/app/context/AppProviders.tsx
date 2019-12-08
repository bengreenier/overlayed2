import React from 'react'
import { AuthProvider } from './Auth'
import history from '../util/history'

const onRedirectCallback = (appState: unknown) => {
  const unsafeAppState = appState as any

  history.push(
    unsafeAppState && unsafeAppState.targetUrl
      ? unsafeAppState.targetUrl
      : window.location.pathname
  )
}

const AppProviders: React.FC = ({ children }) => {
  return (
    <AuthProvider
      domain="dev-xq3gwvmj.auth0.com"
      client_id="knVuTpG31KOu8gefhQUqW6rwgFFMrgM1"
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </AuthProvider>
  )
}

export default AppProviders
