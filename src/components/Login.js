import React, { Component } from 'react'
import LoginNavBar from './LoginNavBar'
import { Form, Button, Nav, FormLabel, InputGroup } from 'react-bootstrap'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Email: '',
      Password: '',
      isLoggedIn: false,
    }

    this.emailOnChangeHandler = this.emailOnChangeHandler.bind(this)
    this.passOnChangeHandler = this.passOnChangeHandler.bind(this)
    this.Login = this.Login.bind(this)
  }

  emailOnChangeHandler(event) {
    this.setState({
      ...this.state,
      Email: event.target.value,
    })
  }

  passOnChangeHandler(event) {
    this.setState({
      ...this.state,
      Password: event.target.value,
    })
  }

  Login(event) {
    const email = 'samp@email.com'
    const pass = '1'
    if (this.state.Email === email && this.state.Password === pass) {
      this.props.signIn(this.state.Email, this.state.Password)
      event.preventDefault()
    } else {
      alert('Incorrect Email or Password')
      event.preventDefault()
    }
  }

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
            marginTop: 10,
          }}
          onSubmit={this.Login}
        >
          <Form.Group controlId='formBasicEmail'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
              <Form.Control
                type='email'
                placeholder='User ID / Email'
                style={{ width: '300px', color: '#182e58' }}
                onChange={this.emailOnChangeHandler}
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
                onChange={this.passOnChangeHandler}
              />
            </InputGroup.Prepend>
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <NavLink
              href='#forgot'
              style={{ fontSize: 13, marginLeft: -15, float: 'left' }}
            >
              Forgot Password?
            </NavLink>
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
              border: 'none',
            }}
          >
            Sign In
          </Button>
        </Form>
      </div>
    )
  }
}

export default Login
