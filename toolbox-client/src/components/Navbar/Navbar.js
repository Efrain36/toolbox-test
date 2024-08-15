import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export const NavbarComponent = ({ title }) => {
  return (
    <>
      <Navbar bg="danger" sticky="top">
        <Container>
          <Navbar.Brand className='text-white'>{title}</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  )
}