import { Router } from './routes'
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { ContainerGlobal } from './shared/styles/global'
import { BrowserRouter } from 'react-router-dom'
import { createTheme } from './shared/styles/createThemes.js'
import { AuthProvider } from './hooks/auth.jsx'
import { ToastProvider } from './hooks/toast.jsx'

function App() {
  return (
    <>
      <ThemeProvider theme={createTheme('dark')}>
        <AuthProvider>
          <ToastProvider>
            <ContainerGlobal>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
              <GlobalStyle />
            </ContainerGlobal>
          </ToastProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
