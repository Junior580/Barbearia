import RoutesComponent from './routes/index'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/global'
import SignIn from './pages/SignIn'

const App: React.FC = () => (
  <>
    {/* <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter> */}
    <SignIn />
    <GlobalStyle />
  </>
)

export default App
