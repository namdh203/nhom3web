import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login/login'
import SignUp from './components/login/signup'
import Dashboard from './components/dashboard/dashboard'
import showAuth from './components/dashboard/dashboard.style'
import Footer from './components/dashboard/footer'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>Travelam</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" onClick={showAuth}><Link className="nav-link" to={'/sign-in'}>Login</Link></li>
                <li className="nav-item" onClick={showAuth}><Link className="nav-link" to={'/sign-up'}>Sign up</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='home-wrapper'>
          <div className='container-fluid'> 
            <Dashboard />
          </div>
        </div>
        <div className="auth-wrapper hidden-element">
          <div className="auth-inner">
            <Routes>
              {/* <Route exact path="/" element={<Dashboard />} /> */}
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </Router>
  )
}
export default App
