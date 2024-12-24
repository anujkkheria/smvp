import Router from './Pages/Router'
import { StyledEngineProvider, CssBaseline } from '@mui/material'
const App = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline>
          <Router />
        </CssBaseline>
      </StyledEngineProvider>
    </>
  )
}

export default App
