import React, { Component } from 'react'
import '../App.css'
import { Navbar, Nav } from 'react-bootstrap'
import logo from './logo.png'

class LoginNavBar extends Component {
  render() {
    return (
      <div>
        <Navbar
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
              style={{ marginLeft: 80 }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'></Nav>
            <Nav.Link
              href='#signin'
              style={{ color: '#919191', marginRight: 20 }}
              className='navHover'
            >
              Sign In
            </Nav.Link>
            <Nav.Link
              href='#help'
              style={{ color: '#919191', marginRight: 60 }}
              className='navHover'
            >
              Help
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default LoginNavBar
