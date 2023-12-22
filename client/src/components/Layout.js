import { Outlet } from "react-router-dom";
import NavBar from "./navbar/navbar.jsx";
import Footer from "./dashboard/footer/footer.js";

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="black-layer"></div>

      <Outlet />

      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  );
}
