import React, { Component } from 'react'
import LoginNavBar from './LoginNavBar'
import { Form, Button, Nav, FormLabel, InputGroup } from 'react-bootstrap'

class Login extends Component {
  render() {
    return (
      <div>
        <LoginNavBar />
        <FormLabel style={{ fontSize: 30, marginTop: '11%', color: '#182e58' }}>
          Treasury Debt Issuance
        </FormLabel>{' '}
        <br />
        <FormLabel style={{ color: '#182e58', marginTop: 20 }}>
          Login To Your Account
        </FormLabel>
        <Form
          style={{
            width: 300,
            margin: 'auto',
            marginTop: 10
          }}
        >
          <Form.Group controlId='formBasicEmail'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
              <Form.Control
                type='email'
                placeholder='User ID / Email'
                style={{ width: '300px', color: '#182e58' }}
              />
            </InputGroup.Prepend>
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
              <Form.Control
                type='password'
                placeholder='Password'
                style={{ width: '300px', color: '#182e58' }}
              />
            </InputGroup.Prepend>
          </Form.Group>
          <Form inline>
            <Form.Group controlId='formBasicCheckbox'>
              <Nav.Link
                href='#forgot'
                style={{ fontSize: 13, marginLeft: -15 }}
              >
                Forgot Password?
              </Nav.Link>
            </Form.Group>
            <Button
              variant='secondary'
              size='sm'
              type='submit'
              style={{
                fontSize: 13,
                width: 82,
                height: 30,
                marginLeft: 98,
                backgroundColor: '#919191',
                border: 'none'
              }}
            >
              Sign In
            </Button>
          </Form>
        </Form>
      </div>
    )
  }
}

export default Login
