import Router from './Pages/Router'
import { StyledEngineProvider } from '@mui/material'
const App = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Router />
      </StyledEngineProvider>
    </>
  )
}

export default App
