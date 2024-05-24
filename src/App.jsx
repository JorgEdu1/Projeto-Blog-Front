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
        <ToastProvider>
          <AuthProvider>
            <ContainerGlobal>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
              <GlobalStyle />
            </ContainerGlobal>
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </>
  )
}

export default App
