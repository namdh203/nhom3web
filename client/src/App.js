import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/users/login";
import SignUp from "./components/users/signup";
import Dashboard from "./components/dashboard/dashboard";
import TourInfo from "./components/tourinfo/tour_info";
import CountryInfo from "./components/countryinfo/country_info";
import Accommodation from "./components/site_info/accommodation/accom";
import Restaurant from "./components/site_info/restaurant/restaurant";
import Activity from "./components/site_info/activities/activity";
import Payment from "./components/payment/payment";
import RcmAccom from "./components/recommend/rcmaccom/rcm-accom.jsx";
import RcmRest from "./components/recommend/rcmrest/rcm-rest.jsx";
import RcmAct from "./components/recommend/rcmact/rcm-act.jsx";
import RcmTrans from "./components/recommend/rcmtrans/rcm-trans.jsx";
import Layout from "./components/Layout.js";
import UserProfile from "./components/profile/profile.jsx";
import AdminDashboard from "./components/admin/dashboard.js";
import SearchCountry from "./components/build_itinerary/choose_destination/SearchCountry.js";
import ChooseMonth from "./components/build_itinerary/choose_destination/ChooseMonth.js";
import PickDate from "./components/build_itinerary/choose_destination/PickDate.js";
import ChooseDuration from "./components/build_itinerary/choose_destination/ChooseDuration.js";
import SelectDestinations from "./components/build_itinerary/choose_destination/SelectDestinations.js";

import PaymentStep1 from "./components/payment/payment_steps/payment_step_1.jsx"
import TourCustomize from "./components/customize-tour/tour_customize.jsx";
import ChooseCustomized from "./components/customize-tour/customized-choice/choose_customized.jsx";

function App() {
  // const [isLogin, setIsLogin] = useState(false)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout showFooter={true} />}>
            <Route
              path="admin/*"
              element={<AdminDashboard />}
            />
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
                  {/* <Notification type="info" msg="fasdfasdf" /> */}
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
            <Route path="accommodation/hotel" element={<Accommodation />} />
            <Route path="restaurant/res" element={<Restaurant />} />
            <Route path="activity/act" element={<Activity />} />
            <Route path="payment" element={
              <>
                <Payment />
              </>
            } />
            <Route path="payment/payment-step-1" element={
              <>
                <Payment />
                <PaymentStep1 /></>
            } />
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
              element={<UserProfile />}
            />

            <Route
              path="/tour-customize"
              element={<TourCustomize />}
            />
            
            <Route
              path="/customize/*"
              element={<ChooseCustomized />}
            />
          </Route>

          <Route path="build-itinerary" element={<Layout addTopPadding />}>
            <Route path="country" element={<SearchCountry />} />
            <Route path="month" element={<ChooseMonth />} />
            <Route path="date" element={<PickDate />} />
            <Route path="duration" element={<ChooseDuration />} />
            <Route path="destinations" element={<SelectDestinations />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
