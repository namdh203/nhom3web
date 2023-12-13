import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/users/login'
import SignUp from './components/users/signup'
import Dashboard from './components/dashboard/dashboard'
import Footer from './components/dashboard/footer/footer'
import SearchBar from './components/dashboard/search_bar/search-bar'
import TourInfo from './components/tourinfo/tour_info'
import CountryInfo from './components/countryinfo/country_info'
import Accommodation from './components/site_info/accommodation/accom'
import Restaurant from './components/site_info/restaurant/restaurant'
import Activity from './components/site_info/activities/activity'
import Payment from "./components/payment/payment"
import PaymentStep1 from './components/payment/payment_steps/payment_step_1'

function App() {
  // const [isLogin, setIsLogin] = useState(false)
  function showDashBoard() {
    window.location.href = '/'
  }
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-wrapper">
          <Link className="navbar-brand" to={'/'}>
            <img className="logo" src="https://i.imgur.com/qm46CNl.png" alt="logo" onClick={showDashBoard} />
          </Link>
          <SearchBar />
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" style={{ display: "block" }}><Link className="nav-link" to={'/sign-in'}><i className="fa-solid fa-right-to-bracket sign-in-logo"></i></Link></li>
              <li className="nav-item" style={{ display: "block" }}><Link className="nav-link" to={'/sign-up'}><i className="fa-solid fa-user-plus sign-up-logo"></i></Link></li>
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
          <Route path="/tour" element={<TourInfo title="Bali Tour" banner="https://s3-hn-2.cloud.cmctelecom.vn/tapchicongthuong.vn/tcct-media/20/2/4/8.-den-uluwatu--.jpg" />} />
          <Route path="/country" element={<CountryInfo name="Bali" />} />
          <Route path="/accomodation/hotel" element={
            <Accommodation />
          } />
          <Route path="/restaurant/res" element={
            <Restaurant />
          } />
          <Route path="/activity/act" element={
            <Activity />
          } />
          <Route path="/payment" element={
            <Payment />
          }/>
          <Route path="/payment/payment-step-1" element={
            <div>
              <Payment/>
              <PaymentStep1></PaymentStep1>
              
            </div>
          }/>
          <Route path="/payment/step-2" element={
            <Payment />
          }/>
        </Routes>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </Router>
  )
}
export default App
