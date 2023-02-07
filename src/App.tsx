import RoutesComponent from './routes/index'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/global'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App: React.FC = () => (
  <>
    {/* <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter> */}
    {/* <SignIn /> */}
    <SignUp />
    <GlobalStyle />
  </>
)

export default App
