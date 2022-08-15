import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RootContainer } from './containers/RootContainer'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RootContainer />
    </Provider>
  </React.StrictMode>
)
