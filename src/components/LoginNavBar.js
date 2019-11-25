import React, { Component } from 'react'
import '../App.css'
import { Navbar, Nav } from 'react-bootstrap'
import logo from './logo.png'

class LoginNavBar extends Component {
  render() {
    return (
      <div className='App container'>
        <Navbar
          fluid='true'
          collapseOnSelect
          expand='lg'
          style={{ backgroundColor: 'rgb(245, 245, 245)', fontSize: '14px' }}
          variant='light'
        >
          <Navbar.Brand href='#home'>
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
            <Nav className='ml-auto'>
              <Nav.Link href='#signin' className='nav'>
                Sign In
              </Nav.Link>
              <Nav.Link href='#help' className='nav'>
                Help
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default LoginNavBar
