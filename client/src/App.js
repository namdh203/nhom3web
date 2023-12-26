import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/users/login";
import SignUp from "./components/users/signup";
import Dashboard from "./components/dashboard/dashboard";
import Footer from "./components/dashboard/footer/footer";
import TourInfo from "./components/tourinfo/tour_info";
import CountryInfo from "./components/countryinfo/country_info";
import Accommodation from "./components/site_info/accommodation/accom";
import Restaurant from "./components/site_info/restaurant/restaurant";
import Activity from "./components/site_info/activities/activity";
import Payment from "./components/payment/payment";
import NavBar from "./components/navbar/navbar";

import RcmAccom from "./components/recommend/rcmaccom/rcm-accom.jsx";
import RcmRest from "./components/recommend/rcmrest/rcm-rest.jsx";
import RcmAct from "./components/recommend/rcmact/rcm-act.jsx";
import RcmTrans from "./components/recommend/rcmtrans/rcm-trans.jsx";
import TourRecommendations from "./components/build_itinerary/tourrcm/TourRecommendations.js";
import ChooseDestination from "./components/build_itinerary/choose_destination/ChooseDestination.js";
import Layout from "./components/Layout.js";
import PaymentStep1 from "./components/payment/payment_steps/payment_step_1.jsx";
import UserProfile from "./components/profile/profile.jsx";
import AdminDashboard from "./components/admin/dashboard.js";
function App() {
  // const [isLogin, setIsLogin] = useState(false)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="admin/*" element={<AdminDashboard />} />
            <Route index element={<Dashboard />} />
            <Route
              path="sign-in"
              element={
                <>
                  <Dashboard />
                  <Login />
                </>
              }
            />
            <Route
              path="sign-up"
              element={
                <>
                  ˀ
                  <Dashboard />
                  <SignUp />
                </>
              }
            />
            <Route
              path="tour"
              element={
                <TourInfo
                  title="Bali Tour"
                  banner="https://s3-hn-2.cloud.cmctelecom.vn/tapchicongthuong.vn/tcct-media/20/2/4/8.-den-uluwatu--.jpg"
                />
              }
            />
            <Route path="country" element={<CountryInfo name="Bali" />} />
            <Route path="accomodation/hotel" element={<Accommodation />} />
            <Route path="restaurant/res" element={<Restaurant />} />
            <Route path="activity/act" element={<Activity />} />
            <Route path="payment" element={<Payment />} />
            <Route
              path="recommendations/accom"
              element={<RcmAccom></RcmAccom>}
            />

            <Route path="recommendations/rest" element={<RcmRest></RcmRest>} />

            <Route path="recommendations/act" element={<RcmAct></RcmAct>} />

            <Route
              path="recommendations/trans"
              element={<RcmTrans></RcmTrans>}
            />

            <Route
              path="profile"
              element={<UserProfile email={localStorage.key(0)} />}
            />
          </Route>
          <Route path="build-itinerary" element={<Layout />}>
            <Route path="choose-destination" element={<ChooseDestination />} />
            <Route
              path="tour-recommendations"
              element={<TourRecommendations />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
