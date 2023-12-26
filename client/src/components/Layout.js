import { Outlet } from "react-router-dom";
import NavBar from "./navbar/navbar.jsx";
import Footer from "./dashboard/footer/footer.js";

export default function Layout({ showSearchBar, showFooter }) {
  return (
    <>
      <NavBar showSearchBar={showSearchBar} />
      <div className="black-layer"></div>

      <Outlet />

      {showFooter && (
        <div className="footer-wrapper">
          <Footer />
        </div>
      )}
    </>
  );
}
