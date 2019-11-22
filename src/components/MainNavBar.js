import React, { Component } from 'react'
import { Navbar, Nav, Form, Container } from 'react-bootstrap'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class MainNavBar extends Component {
  render() {
    return (
      <div className='App container'>
        <Navbar
          fluid='true'
          collapseOnSelect
          expand='lg'
          style={{
            backgroundColor: 'rgb(245, 245, 245)'
          }}
          variant='light'
        >
          <Navbar.Brand
            href='#home'
            style={{ border: '3px solid rgb(245, 245, 245)' }}
          >
            <img
              alt=''
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#dashboard' className='nav' active>
                Dashboard
              </Nav.Link>
              <Nav.Link href='#dept-issuance' className='nav'>
                Debt Issuance
              </Nav.Link>
              <Nav.Link href='#credit-limits' className='nav'>
                Credit Limits
              </Nav.Link>
              <Nav.Link href='#identities' className='nav'>
                Identities
              </Nav.Link>
              <Nav.Link href='#settings' className='nav'>
                Settings
              </Nav.Link>
            </Nav>
            <Nav className='ml-auto' style={{}}>
              <Nav.Link href='#IPA-Ops'>
                IPA Ops &nbsp;
                <FontAwesomeIcon icon={faChevronDown} />
              </Nav.Link>
              <Nav.Link href='#help' style={{}}>
                Help
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default MainNavBar
