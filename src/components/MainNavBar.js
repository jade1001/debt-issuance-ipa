import React, { Component } from 'react'
import { Navbar, Nav, Form } from 'react-bootstrap'
import logo from './logo.png'

class MainNavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg='light' variant='light'>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              style={{ marginLeft: 80 }}
            />
          </Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='#dashboard'>Dashboard</Nav.Link>
            <Nav.Link href='#dept-issuance'>Debt Issuance</Nav.Link>
            <Nav.Link href='#credit-limits'>Credit Limits</Nav.Link>
            <Nav.Link href='#identities'>Identities</Nav.Link>
            <Nav.Link href='#settings'>Settings</Nav.Link>
          </Nav>
          <Form inline>
            <Nav.Link
              href='#signin'
              style={{ color: '#919191', marginRight: 20 }}
            >
              IPA Ops
            </Nav.Link>
            <Nav.Link
              href='#help'
              style={{ color: '#919191', marginRight: 60 }}
            >
              Help
            </Nav.Link>
          </Form>
        </Navbar>
      </div>
    )
  }
}

export default MainNavBar
