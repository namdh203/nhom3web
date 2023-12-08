import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/users/login'
import SignUp from './components/users/signup'
import Dashboard from './components/dashboard/dashboard'
import showAuth from './components/dashboard/dashboard.style'
import Footer from './components/dashboard/footer'
import SearchBar from './components/dashboard/search-bar'
// import Users from './components/users'

function App() {
  function showDashBoard() {
    window.location.href = '/';
  }
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-wrapper">
          <Link className="navbar-brand" to={'/'}>
            <img src="https://i.imgur.com/OnZQimp.png" alt="logo" onClick = {showDashBoard}/>
          </Link>
          <SearchBar />
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" style={{display: "block"}}><Link className="nav-link" to={'/sign-in'}><i class="fa-solid fa-right-to-bracket sign-in-logo"></i></Link></li>
              <li className="nav-item" style={{display: "block"}}><Link className="nav-link" to={'/sign-up'}><i class="fa-solid fa-user-plus sign-up-logo"></i></Link></li>
            </ul>
          </div>
        </nav>
        <div className="black-layer"></div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sign-in" element={<>
            <Dashboard />
            <Login />
          </>} />
          <Route path="/sign-up" element={<>
            <Dashboard />
            <SignUp />
          </>} />
        </Routes>

        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </Router>
  )
}
export default App
