import React from 'react'
import App from './App'
import AppProviders from './context/AppProviders'

const Index: React.FC = () => {
  return (
    <AppProviders>
      <App />
    </AppProviders>
  )
}

export default Index
