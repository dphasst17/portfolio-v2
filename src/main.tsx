import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import './styles/animation.css'
import { NextUIProvider } from '@nextui-org/react'
import { StateProvider } from './context/stateContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StateProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </StateProvider>
  </React.StrictMode>,
)
