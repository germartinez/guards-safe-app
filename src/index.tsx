import { SafeProvider } from '@gnosis.pm/safe-apps-react-sdk'
import { theme } from '@gnosis.pm/safe-react-components'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/App'
import StoreProvider from 'src/store'
import GlobalStyles from 'src/theme/global'
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <SafeProvider>
        <StoreProvider>
          <App />
        </StoreProvider>
      </SafeProvider>
    </ThemeProvider>
  </React.StrictMode>
)
