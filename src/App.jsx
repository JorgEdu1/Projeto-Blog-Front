import { Router } from './routes'
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { ContainerGlobal } from './shared/styles/global'
import { BrowserRouter } from 'react-router-dom'
import { createTheme } from './shared/styles/createThemes.js'
import { AuthProvider } from './hooks/auth.jsx'

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={createTheme('dark')}>
          <ContainerGlobal>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
            <GlobalStyle />
          </ContainerGlobal>
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default App
