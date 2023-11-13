import './App.css'
import LandingPage from './pages/LandingPage'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/Login' element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
