import React, { useState, useEffect } from 'react'
import createAuth0Client from '@auth0/auth0-spa-js'

const DEFAULT_REDIRECT_CALLBACK = () => {
  window.history.replaceState({}, document.title, window.location.pathname)
}

interface Context {
  isAuthenticated: boolean
  loading: boolean
  popupOpen: boolean
  user: {
    picture: string
    name: string
  }
  loginWithPopup: (params: {}) => Promise<void>
  handleRedirectCallback: () => Promise<void>
  getIdTokenClaims: (...p: any[]) => Promise<any>
  loginWithRedirect: (...p: any[]) => Promise<any>
  getTokenSilently: (...p: any[]) => Promise<any>
  getTokenWithPopup: (...p: any[]) => Promise<any>
  logout: (...p: any[]) => Promise<any>
}

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

interface Props {
  onRedirectCallback?: (appState: unknown) => void
  redirect_uri: string
  domain: string
  client_id: string
}

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

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
