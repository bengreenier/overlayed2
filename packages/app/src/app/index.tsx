import React from 'react'
import App from './App'
import AppProviders from './context/AppProviders'

/**
 * Index is the top level component of the experience
 */
const Index: React.FC = () => {
  // render our app context providers and the app inside it
  return (
    <AppProviders>
      <App />
    </AppProviders>
  )
}

export default Index
