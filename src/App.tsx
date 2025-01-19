import Router from './Pages/Router'
import { StyledEngineProvider, CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { AuthProvider } from './Context/Auth'
const App = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline>
          <SnackbarProvider>
            <AuthProvider>
              <Router />
            </AuthProvider>
          </SnackbarProvider>
        </CssBaseline>
      </StyledEngineProvider>
    </>
  )
}

export default App
