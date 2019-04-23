import React from "react"

import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

const navigation = () => {
  return (
    <Navbar expand="sm" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="index.html">LoopLAB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#explore-head-section">Explore</Nav.Link>
            <Nav.Link href="#create-head-section">Create</Nav.Link>
            <Nav.Link href="#share-head-section">Share</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navigation
