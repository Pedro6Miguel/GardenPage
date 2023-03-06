import './App.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import { Footer } from './components/Footer/Footer'
import { PostDetails } from './sections/Blog/PostDetails'
import { SignIn } from './pages/Auth/SignIn'
import { Login } from './pages/Auth/Login'

function App() {

  return (
    <Router>
      {/*<Navbar />*/}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<PostDetails />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
