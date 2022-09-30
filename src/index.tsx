import { CssBaseline } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/App'
import Providers from 'src/components/providers/Providers'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Providers>
      <>
        <CssBaseline />
        <App />
      </>
    </Providers>
  </React.StrictMode>
)
