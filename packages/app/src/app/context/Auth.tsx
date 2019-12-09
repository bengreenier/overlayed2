import React, { useState, useEffect } from 'react'
import createAuth0Client from '@auth0/auth0-spa-js'

/**
 * A simple default for auth redirection
 */
const DEFAULT_REDIRECT_CALLBACK = () => {
  window.history.replaceState({}, document.title, window.location.pathname)
}

/**
 * The context definition for our auth context
 */
interface Context {
  /**
   * Is a user authenticated
   */
  isAuthenticated: boolean

  /**
   * Is authentication state still pending
   */
  loading: boolean

  /**
   * Is there an auth popup on display
   */
  popupOpen: boolean

  /**
   * The user state
   */
  user: {
    /**
     * A url to an image of the current user
     */
    picture: string

    /**
     * The name of the current user
     */
    name: string
  }

  // unused - from auth0
  loginWithPopup: (params: {}) => Promise<void>

  // unused - from auth0
  handleRedirectCallback: () => Promise<void>

  // unused - from auth0
  getIdTokenClaims: (...p: any[]) => Promise<any>

  /**
   * Auth0 login with redirect (used)
   */
  loginWithRedirect: (...p: any[]) => Promise<any>

  // unused - from auth0
  getTokenSilently: (...p: any[]) => Promise<any>

  // unused - from auth0
  getTokenWithPopup: (...p: any[]) => Promise<any>

  /**
   * Logout of Auth0 (with redirect)
   */
  logout: (...p: any[]) => Promise<any>
}

/**
 * The actual auth context
 */
const AuthContext = React.createContext<Context>({
  isAuthenticated: false,
  loading: false,
  popupOpen: false,
  user: {
    name: 'Anonymous User',
    picture: '',
  },
  loginWithPopup: () => Promise.reject(new Error('Not implemented')),
  handleRedirectCallback: () => Promise.reject(new Error('Not implemented')),
  getIdTokenClaims: (...p: any[]) => Promise.reject(new Error('Not implemented')),
  loginWithRedirect: (...p: any[]) => Promise.reject(new Error('Not implemented')),
  getTokenSilently: (...p: any[]) => Promise.reject(new Error('Not implemented')),
  getTokenWithPopup: (...p: any[]) => Promise.reject(new Error('Not implemented')),
  logout: (...p: any[]) => Promise.reject(new Error('Not implemented')),
})

/**
 * Auth provider properties
 */
interface Props {
  /**
   * handler for auth redirection
   */
  onRedirectCallback?: (appState: unknown) => void

  /**
   * Uri we redirect to
   */
  redirect_uri: string

  /**
   * Auth0 domain (from Auth0 app config)
   */
  domain: string

  /**
   * Auth0 client id (from Auth0 app config)
   */
  client_id: string
}

/**
 * Auth0 auth provider
 *
 * Note: most of this source is from the auth0 react quickstart
 * @param props properties
 */
const AuthProvider: React.FC<Props> = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState()
  const [auth0Client, setAuth0] = useState()
  const [loading, setLoading] = useState<boolean>(true)
  const [popupOpen, setPopupOpen] = useState<boolean>(false)

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions)
      setAuth0(auth0FromHook)

      if (window.location.search.includes('code=')) {
        const { appState } = await auth0FromHook.handleRedirectCallback()
        onRedirectCallback(appState)
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated()

      setIsAuthenticated(isAuthenticated)

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser()
        setUser(user)
      }

      setLoading(false)
    }
    initAuth0()
    // if we specify deps, we get into an infinite loop
    // https://medium.com/@andrewmyint/infinite-loop-inside-useeffect-react-hooks-6748de62871
    //
    // eslint-disable-next-line
  }, [])

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true)
    try {
      await auth0Client.loginWithPopup(params)
    } catch (error) {
      console.error(error)
    } finally {
      setPopupOpen(false)
    }
    const user = await auth0Client.getUser()
    setUser(user)
    setIsAuthenticated(true)
  }

  const handleRedirectCallback = async () => {
    setLoading(true)
    await auth0Client.handleRedirectCallback()
    const user = await auth0Client.getUser()
    setLoading(false)
    setIsAuthenticated(true)
    setUser(user)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) =>
          auth0Client.logout({ returnTo: initOptions.redirect_uri, ...p }),
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

/**
 * Helper for consuming the authentication context
 */
const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
