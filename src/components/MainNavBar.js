import React, { Component } from 'react'
import { Navbar, Nav, Form } from 'react-bootstrap'
import logo from './logo.png'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class MainNavBar extends Component {
  render() {
    return (
      <div>
        <Navbar
          style={{ backgroundColor: 'rgb(245, 245, 245)' }}
          variant='light'
        >
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
            <Nav.Link href='#dashboard' className='navHover'>
              Dashboard
            </Nav.Link>
            <Nav.Link href='#dept-issuance' className='navHover'>
              Debt Issuance
            </Nav.Link>
            <Nav.Link href='#credit-limits' className='navHover'>
              Credit Limits
            </Nav.Link>
            <Nav.Link href='#identities' className='navHover'>
              Identities
            </Nav.Link>
            <Nav.Link href='#settings' className='navHover'>
              Settings
            </Nav.Link>
          </Nav>
          <Form inline>
            <Nav.Link
              href='#signin'
              style={{ color: '#919191', marginRight: 20 }}
              className='navHover'
            >
              IPA Ops &nbsp;
              <FontAwesomeIcon icon={faChevronDown} />
            </Nav.Link>
            <Nav.Link
              href='#help'
              style={{ color: '#919191', marginRight: 60 }}
              className='navHover'
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
