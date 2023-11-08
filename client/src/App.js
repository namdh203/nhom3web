import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/users/login'
import SignUp from './components/users/signup'
import Dashboard from './components/dashboard/dashboard'
import Footer from './components/dashboard/footer'
import SearchBar from './components/dashboard/search-bar'

function App() {
  function showDashBoard() {
    window.location.href = '/';
  }
  function showSignIn() {
    window.location.href = '/sign-in';
  }
  function showSignUp() {
    window.location.href = '/sign-up';
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
              <li className="nav-item" onClick = {showSignIn}><Link className="nav-link" to={'/sign-in'}><i class="fa-solid fa-right-to-bracket sign-in-logo"></i></Link></li>
              <li className="nav-item" onClick = {showSignUp}><Link className="nav-link" to={'/sign-up'}><i class="fa-solid fa-user-plus sign-up-logo"></i></Link></li>
            </ul>
          </div>
        </nav>
        <div className="black-layer" style={{
          display: window.location.href.includes("/sign-in") || window.location.href.includes("/sign-up") ? 'block' : 'none',
          "z-index": window.location.href.includes("/sign-in") || window.location.href.includes("/sign-up") ? "1001" : "500"
        }}></div>

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
