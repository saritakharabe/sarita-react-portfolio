import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand>Sarita Kharabe</Navbar.Brand>
          <Nav className="me-auto my-2" expand="lg" style={{fontSize:"25px"}}>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTabs;
