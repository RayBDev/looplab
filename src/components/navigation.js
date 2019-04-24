import React from "react"

import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-scroll"

const navigation = () => {
  return (
    <Navbar expand="sm" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="index.html">LoopLAB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" as="ul">
            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-link"
                to="home-section"
                spy={true}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-link"
                to="explore-head-section"
                spy={true}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-link"
                to="create-head-section"
                spy={true}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-link"
                to="share-head-section"
                spy={true}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Share
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navigation
