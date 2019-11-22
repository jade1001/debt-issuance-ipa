import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class MainNavBar extends Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand='lg'
          style={{ backgroundColor: 'rgb(245, 245, 245)', fontSize: '14px' }}
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
              style={{ marginLeft: 80 }}
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
            <Nav.Link
              href='#signin'
              style={{ color: '#919191', marginRight: 20 }}
              className='nav'
            >
              IPA Ops &nbsp;
              <FontAwesomeIcon icon={faChevronDown} />
            </Nav.Link>
            <Nav.Link
              href='#help'
              style={{
                color: '#919191',
                marginRight: 60
              }}
              className='nav'
            >
              Help
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default MainNavBar
