import React from 'react'
import { Navbar } from '../../comp/app/Navbar'
import { AuthProvider } from '../../comp/app/Auth'

export default {
  title: 'app.Navbar',
  component: Navbar,
}

// To use, requires this feature toggled on (DISABLED)
// https://auth0.com/docs/migrations/guides/clickjacking-protection
// and then these values
const config = {
  domain: 'fake',
  clientId: 'fake',
}

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl ? appState.targetUrl : window.location.pathname
  )
}

/**
 * A default navbar
 * Only supports testing a single link, due to knob limitations
 */
export const Default = () => (
  <AuthProvider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Navbar />
  </AuthProvider>
)
