import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import logo from './logo.png'

class LoginNavBar extends Component {
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
          <Nav className='mr-auto'></Nav>
          <Form inline>
            <Nav.Link
              href='#signin'
              style={{ color: '#919191', marginRight: 20 }}
            >
              Sign In
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

export default LoginNavBar
