import {Navbar, Container} from 'react-bootstrap';
import React from 'react'

export default function Navigation() {
  return(
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Email Helper</Navbar.Brand>
            <div className="nav-description">
              A tool for easily making email templates
            </div>
        </Container>
      </Navbar>
    </div>
  )
}
