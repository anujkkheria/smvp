import Router from './Pages/Router'
import { StyledEngineProvider, CssBaseline } from '@mui/material'
import { AuthProvider } from './Context/Auth'
const App = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </CssBaseline>
      </StyledEngineProvider>
    </>
  )
}

export default App
