import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/users/login'
import SignUp from './components/users/signup'
import Dashboard from './components/dashboard/dashboard'
import Footer from './components/dashboard/footer/footer'
import TourInfo from './components/tourinfo/tour_info'
import CountryInfo from './components/countryinfo/country_info'
import Accommodation from './components/site_info/accommodation/accom'
import Restaurant from './components/site_info/restaurant/restaurant'
import Activity from './components/site_info/activities/activity'
import Payment from "./components/payment/payment"
import NavBar from './components/navbar/navbar'

import RcmAccom from "./components/recommend/rcmaccom/rcm-accom.jsx"
import RcmRest from "./components/recommend/rcmrest/rcm-rest.jsx"
import RcmAct from "./components/recommend/rcmact/rcm-act.jsx"
import RcmTrans from "./components/recommend/rcmtrans/rcm-trans.jsx"
import PaymentStep1 from "./components/payment/payment_steps/payment_step_1.jsx"

function App() {
  // const [isLogin, setIsLogin] = useState(false)
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
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
          <Route path="/accommodation/hotel" element={
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
          } />
          <Route path="/recommendations/accom" element={
            <RcmAccom></RcmAccom>
          } />

          <Route path="/recommendations/rest" element={
            <RcmRest></RcmRest>
          } />

          <Route path="/recommendations/act" element={
            <RcmAct></RcmAct>
          } />

          <Route path="/recommendations/trans" element={
            <RcmTrans></RcmTrans>
          } />
          <Route path="/payment/payment-step-1" element={
            <div>
              <Payment />
              <PaymentStep1></PaymentStep1>

            </div>
          } />
        </Routes>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </Router >
  )
}
export default App
