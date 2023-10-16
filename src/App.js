import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login/login'
import SignUp from './components/login/signup'
import Dashboard from './components/dashboard/dashboard'
import showAuth from './components/dashboard/dashboard.style'
import Footer from './components/dashboard/footer'
import SearchBar from './components/dashboard/search-bar'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-wrapper">
            <Link className="navbar-brand" to={'/'}>
              <img src="https://i.imgur.com/OnZQimp.png" alt="logo" />
            </Link>
            <SearchBar />
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" onClick={showAuth}><Link className="nav-link" to={'/sign-in'}><i class="fa-solid fa-right-to-bracket sign-in-logo"></i></Link></li>
                <li className="nav-item" onClick={showAuth}><Link className="nav-link" to={'/sign-up'}><i class="fa-solid fa-user-plus sign-up-logo"></i></Link></li>
              </ul>
            </div>
        </nav>
        <div className='home-wrapper'>
          <Dashboard />
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
