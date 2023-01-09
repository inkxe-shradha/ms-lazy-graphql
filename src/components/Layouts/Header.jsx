import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { BgHeaderImage } from "./Header.styles.module";

const Header = () => {
  const param = useParams();
  return (
    <header>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/our-rooms"
                >
                  Our Rooms
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/add-rooms"
                >
                  Add Custom Room
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar --> */}

      {/* <!-- Background image --> */}
      <BgHeaderImage className="p-5 text-center bg-image">
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            {!param.id && (
              <div className="text-white">
                <h1 className="mb-5">
                  Your new Boutique Hotel in Prague. Plan the journey of your
                  dreams
                </h1>
                <h4 className="mb-5">OUR ROOMS</h4>
                <Link
                  className="btn btn-outline-light btn-lg"
                  to="/our-rooms"
                  role="button"
                >
                  Check Some Rooms
                </Link>
              </div>
            )}
          </div>
        </div>
      </BgHeaderImage>
      {/* <!-- Background image --> */}
    </header>
  );
};

export default Header;
