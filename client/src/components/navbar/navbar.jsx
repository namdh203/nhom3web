import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import "../dashboard/dashbroad.css";
import { getCustomer } from "./NavbarFunction"

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCategory: 0,
      showNavbarMenu: 0,
      current_user: {
        name: ""
      },
      openAvaMenu: 0
    };
    this.showDashBoard = this.showDashBoard.bind(this);
    this.onNavbarMenuClick = this.onNavbarMenuClick.bind(this);
    this.onCategoryClick = this.onCategoryClick.bind(this);
    this.onAvatarClick = this.onAvatarClick.bind(this);
    this.onLogout = this.onLogout.bind(this)
  }

  onCategoryClick() {
    this.setState({
      showCategory: this.state.showCategory + 1,
      showNavbarMenu: 0,
    });
  }

  onNavbarMenuClick() {
    this.setState({
      showNavbarMenu: this.state.showNavbarMenu + 1,
      showCategory: 0,
    });
  }

  onLogout() {
    localStorage.clear()
    window.location.reload()
  }

  onAvatarClick() {

    this.setState({ openAvaMenu: (this.state.openAvaMenu + 1) % 2 });
  }

  componentDidMount() {

    const firstKey = localStorage.key(0);

    if (firstKey !== null) {
      // console.log("Email customer: ", firstKey)
      getCustomer(firstKey).then(res => {

        this.setState({ 'current_user': res }, () => {
          // const firstKey = localStorage.key(0)
          const firstItem = JSON.parse(localStorage.getItem(firstKey))
          firstItem.avatar = this.state.current_user.avatar ? this.state.current_user.avatar : "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
          firstItem.name = this.state.current_user.name

          localStorage.setItem(firstKey, JSON.stringify(firstItem))
        })



      }).catch(err => {
        console.log(err)
      })
    } else {
      console.log('localStorage trống.');
    }
  }

  showDashBoard() {
    window.location.href = "/";
  }

  render() {

    if (localStorage.length > 0) {
      if (this.state.current_user == null) {
        return <p>Loading...</p>
      }
    }

    return (
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-wrapper">
          <div className="category-menu hidden" onClick={this.onCategoryClick}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <Link className="navbar-brand" to={'/'}>
            <img className="logo" src="https://i.imgur.com/qm46CNl.png" alt="logo" onClick={this.showDashBoard} />
          </Link>

          <div className="navbar-menu hidden" onClick={this.onNavbarMenuClick}>
            <i className="fa-solid fa-ellipsis"></i>
          </div>


          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <Link
                className="nav-link"
                to={"/recommendations/accom?page_num=1"}
              >
                <li className="nav-item">Accommodations</li>
              </Link>
              <Link
                className="nav-link"
                to={"/recommendations/rest?page_num=1"}
              >
                <li className="nav-item">Restaurants</li>
              </Link>
              <Link className="nav-link" to={"/recommendations/act?page_num=1"}>
                <li className="nav-item">Activities</li>
              </Link>
              <Link
                className="nav-link"
                to={"/recommendations/trans?page_num=1"}
              >
                <li
                  className={`nav-item ${
                    this.props.showSearchBar ? "" : "right-border"
                  }`}
                >
                  Transportations
                </li>
              </Link>
              {this.props.showSearchBar && (
                <Link
                  className="navLink"
                  to={"/build-itinerary/choose-destination"}
                >
                  <form className="d-flex right-border" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </Link>
              )}

              <div className="log-part" style={{ display: `${localStorage.length > 0 ? "none" : "flex"}` }}>
                <li className="nav-item icon">
                  <Link className="nav-link" to={"/sign-in"}>
                    <i className="fa-solid fa-right-to-bracket sign-in-logo"></i>
                  </Link>
                </li>
                <li className="nav-item icon">
                  <Link className="nav-link" to={"/sign-up"}>
                    <i className="fa-solid fa-user-plus sign-up-logo"></i>
                  </Link>
                </li>
              </div>
              <div
                className="avatar-wrapper"
                style={{ display: `${localStorage.length > 0 ? "block" : "none"}`, position: "relative" , "backgroundColor": "white"}}
                onClick={this.onAvatarClick}>
                {/* <p>{this.state.current_user.name}</p> */}
                <img
                  src={this.state.current_user.avatar ? this.state.current_user.avatar : "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"}
                  className="img-fluid avatar-img"
                  alt="Responsive" />
                <div class="dropdown-menu ava-menu" aria-labelledby="dropdownMenuButton" style={{
                  display: `${this.state.openAvaMenu ? "block" : "none"}`,
                  transform: "translateY(7px)",
                  right: 0,
                  "box-shadow": "0px 5px 10px rgba(0, 0, 0, 0.5)",
                  width: "250px"
                }}>

                  <button class="dropdown-item user-name_ava" type="button">{this.state.current_user.name}</button>
                  <p className="username_email">{this.state.current_user.email}</p>
                  <div class="dropdown-divider"></div>
                  <a href="/profile" style={{ "text-decoration": "none", "color": "#333" }}>
                    <button class="dropdown-item" type="button">

                      <i class="fa-solid fa-address-card"></i>    Profile

                    </button>
                  </a>
                  <button class="dropdown-item" type="button"><i class="fa-solid fa-list-ul"></i>    History</button>
                  <a 
                    href="/admin" 
                    style={{ 
                      "text-decoration": "none", 
                      "color": "#333", 
                      display: `${(localStorage.key(0) !== null && JSON.parse(localStorage.getItem(localStorage.key(0))).role === "admin") ? "block" : "none"}`
                    }}>
                    <button class="dropdown-item" type="button">

                      <i class="fa-brands fa-sourcetree"></i>    Quản lý tài nguyên

                    </button>
                  </a>
                  <a href="#contact-us" style={{ "text-decoration": "none", "color": "#333" }}>
                    <button class="dropdown-item" type="button">

                      <i class="fa-solid fa-address-book"></i>    Contact us

                    </button>
                  </a>
                  <div class="dropdown-divider"></div>
                  <button class="dropdown-item" type="button" onClick={this.onLogout}>Logout</button>
                </div>
              </div>
            </ul>
          </div>
        </nav>
        <div
          className={`category-menu_wrapper  ${this.state.showCategory % 2 ? "show" : "hidden"
            }`}
        >
          <div
            className="black-layer"
            style={{
              zIndex: "9",
              display: "flex",
            }}
            onClick={this.onCategoryClick}
          ></div>

          <nav id="sidebarMenu" className="collapse collapse bg-white show" style={{
            "zIndex": "1029",
            "position": "relative"
          }}>
            <div className="buffer-block" style={{ height: "43px" }}></div>
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-4">
                <a href="/?type=destination&id=0" className="list-group-item list-group-item-action py-2 ripple"
                ><i className="fa-solid fa-location-dot"></i><span>                 Destinations</span></a>
                <a href="/?type=family&id=1" className="list-group-item list-group-item-action py-2 ripple"
                ><i className="fa-solid fa-people-roof"></i><span>                 Family</span></a>
                <a href="/?type=honey moon&id=2" className="list-group-item list-group-item-action py-2 ripple"
                ><i className="fa-solid fa-heart"></i><span>                 Honey moon</span></a>
                <a href="/?type=adventure&id=3" className="list-group-item list-group-item-action py-2 ripple"
                ><i className="fa-brands fa-space-awesome"></i><span>                 Adventure</span></a>
              </div>
            </div>
            <div className="buffer-block" style={{ height: "12px" }}></div>

          </nav>
        </div>
        <div className={`navbar-menu_wrapper  ${this.state.showNavbarMenu % 2 ? "show" : "hidden"}`}>
          <div className="black-layer" style={{
            "zIndex": "9",
            display: "flex"
          }} onClick={this.onNavbarMenuClick}></div>
          <nav id="sidebarMenu" className="collapse collapse bg-white show" style={{
            "zIndex": "1029",
            "position": "relative"
          }}>
            <div className="buffer-block" style={{ height: "43px" }}></div>
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-4">
                <a href="/recommendations/accom?page_num=1" className="list-group-item list-group-item-action py-2 ripple"
                ><i className="fa-solid fa-hotel"></i><span>                 Accommodations</span></a>
                <a href="/recommendations/rest?page_num=1" className="list-group-item list-group-item-action py-2 ripple"
                ><i className="fa-solid fa-utensils"></i><span>                 Restaurants</span></a>
                <a href="/recommendations/act?page_num=1" className="list-group-item list-group-item-action py-2 ripple"
                ><i className="fa-solid fa-chart-line"></i><span>                 Activities</span></a>
                <a href="/recommendations/trans?page_num=1" className="list-group-item list-group-item-action py-2 ripple"
                ><i className="fa-solid fa-car-side"></i><span>                 Transportations</span></a>
                <a href="/sign-in" className="list-group-item list-group-item-action py-2 ripple"
                ><i className="fa-solid fa-right-to-bracket"></i><span>                 Login</span></a>
                <a href="/sign-up" className="list-group-item list-group-item-action py-2 ripple"
                ><i className="fa-solid fa-user-plus"></i><span>                 Sign up</span></a>
              </div>
            </div>
            <div className="buffer-block" style={{ height: "12px" }}></div>

          </nav>
        </div>
      </div>
    )
  }
}
