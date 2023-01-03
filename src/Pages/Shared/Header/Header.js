import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import logo from '../../../img/logo.png'
import "./Header.css";

import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar className="bg-nav" expand="lg">
        <Container>
          <Navbar.Brand to="/home">
            {/* <img className=' nav-logo' src={logo} alt="" /> */}
            <p className="title-color">DEPOT Warehouse</p>
          </Navbar.Brand>
          <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="hover fw-bolder fs-5" as={Link} to="/home">
                Home
              </Nav.Link>

              {user && (
                <>
                  <Nav.Link
                    className="hover fw-bolder fs-5"
                    as={Link}
                    to="/management"
                  >
                    Inventory
                  </Nav.Link>
                  <Nav.Link
                    className="hover fw-bolder fs-5"
                    as={Link}
                    to="/add"
                  >
                    Add Items
                  </Nav.Link>
                  <Nav.Link
                    className="hover fw-bolder fs-5"
                    as={Link}
                    to="/myItem"
                  >
                    My Items
                  </Nav.Link>
                </>
              )}

              <Nav.Link className="hover fw-bolder fs-5" as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className="hover fw-bolder fs-5" as={Link} to="/about">
                About
              </Nav.Link>

              {user ? (
                <span className="" onClick={handleSignOut}>
                  <button
                    type="button"
                    className="btn btn-outline-secondary rounded-pill px-4 py-2 ms-3 shadow none fw-bold"
                  >
                    SIGN OUT
                  </button>
                </span>
              ) : (
                <Nav.Link
                  className="hover fw-bolder fs-5 rounded-pill"
                  as={Link}
                  to="login"
                >
                  <button
                    type="button"
                    className="btn btn-outline-secondary rounded-pill px-4 py-2 ms-3 shadow none fw-bold"
                  >
                    Login
                  </button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
