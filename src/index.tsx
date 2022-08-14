import React from 'react'
import ReactDOM from 'react-dom/client'
import { RootContainer } from './containers/RootContainer'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RootContainer />
  </React.StrictMode>
)
