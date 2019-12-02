import React, { Component } from 'react'
import LoginNavBar from './LoginNavBar'
import { connect } from 'react-redux'
import { userActions } from '../Redux/_actions/user.actions'
import {
  Form,
  Button,
  Nav,
  FormLabel,
  InputGroup,
  Toast,
  Spinner,
  Container
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router-dom'
import { history } from '../Redux/_helpers/history'

class Login extends Component {
	constructor(props) {
		super(props)

		// this.props.logout()
		this.state = {
		Email: '',
		Password: '',
		submitted: false,
		visibility: 'hidden',
		setShow: true,
		spinner: '',
		color: ''
		}

		this.emailOnChangeHandler = this.emailOnChangeHandler.bind(this)
		this.passOnChangeHandler = this.passOnChangeHandler.bind(this)
		this.change = this.change.bind(this)
		this.Login = this.Login.bind(this)
	}

	change() {
		if (this.email.value.length > 0 && this.pass.value.length > 0) {
		this.setState({ color: '#192f59' })
		} else if (this.pass.value.length === 0 && this.pass.value.length === 0) {
		this.setState({ color: '' })
		}
	}

	emailOnChangeHandler(event) {
		this.setState({
		...this.state,
		Email: event.target.value
		})
	}

	passOnChangeHandler(event) {
		this.setState({
		...this.state,
		Password: event.target.value
		})
	}

	Login(e) {
		e.preventDefault()
		this.setState({ spinner: 'border' })
		if (
		this.state.Email === 'ipa.ops@ipabank.com' &&
		this.state.Password === 'password'
		) {
		this.setState({ submitted: true })
		setTimeout(
			function() {
			this.setState({ spinner: '' })
			const { Email, Password } = this.state
			if (Email && Password) {
				this.props.login(Email, Password)
			}
			}.bind(this),
			2000
		)
		} else {
		this.setState({ visibility: '' })
		setTimeout(
			function() {
			this.setState({ spinner: '' })
			}.bind(this),
			500
		)
		setTimeout(
			function() {
			this.setState({ visibility: 'hidden' })
			}.bind(this),
			3000
		)
		}
	}

	getUser() {}

	render() {
		return (
			<>
				<LoginNavBar />
				<Container>
					<Toast delay={3000} autohide onClose={() => this.setState({ visibility: 'hidden' })} style={{ visibility: this.state.visibility, margin: 'auto' }}>
						<Toast.Header>
							<strong className='mr-auto' style={{ color: 'red' }}>
								Opps!
							</strong>
						</Toast.Header>
						<Toast.Body style={{ color: 'red' }}>
							Your email or password is incorrect!
						</Toast.Body>
					</Toast>
					<div style={{ textAlign: 'center' }}>
						<FormLabel style={{fontSize: 30,marginTop: '8% ',color: '#182e58'}}>
							Treasury Debt Issuance
						</FormLabel>
						<br />
						<FormLabel style={{ color: '#182e58', marginTop: 20 }}>
							Login To Your Account
						</FormLabel>
					</div>
					<Form onSubmit={this.Login} onChange={this.change} style={{width: 300,margin: 'auto', marginTop: 10}}>
						<Form.Group controlId='formBasicEmail'>
							<InputGroup.Prepend>
								<InputGroup.Text id='basic-addon1' style={{ borderRadius: 0 }}>
									<FontAwesomeIcon icon={faIdCardAlt} style={{ color: '#919191' }}/>
								</InputGroup.Text>
								<Form.Control
									required
									type='email'
									placeholder='User ID / Email'
									style={{width: '300px',color: '#182e58',borderRadius: '0px'}}
									onChange={this.emailOnChangeHandler}
									ref={email => (this.email = email)}/>
							</InputGroup.Prepend>
						</Form.Group>

						<Form.Group controlId='formBasicPassword'>
							<InputGroup.Prepend>
								<InputGroup.Text id='basic-addon1' style={{ borderRadius: 0, paddingRight: 14 }}>
									<FontAwesomeIcon icon={faKey} style={{ color: '#919191' }} />
								</InputGroup.Text>
								<Form.Control
									required
									type='password'
									placeholder='Password'
									style={{width: '300px',color: '#182e58',borderRadius: '0px'}}
									onChange={this.passOnChangeHandler}
									ref={pass => (this.pass = pass)}/>
							</InputGroup.Prepend>
						</Form.Group>
						<Form.Group controlId='formBasicCheckbox'>
							<Nav.Link href='#forgot' className='float-left' style={{ fontSize: 13, padding: '.5rem 0', lineHeight: '10px'}}>
								Forgot Password?
							</Nav.Link>
						</Form.Group>
						<Button
							variant='secondary'
							size='sm'
							type='submit'
							className='float-right'
							style={{
							fontSize: 13,
							width: 80,
							backgroundColor: this.state.color,
							border: 'none'
							}}
						>
							<Spinner animation={this.state.spinner} size='sm' />
							&nbsp; Sign In
						</Button>
					</Form>
				</Container>
			</>
		)
	}
}

function mapState(state) {
  const { loggingIn } = state.authentication
  return { loggingIn }
}

const actionCreators = {
  login: userActions.login
}

const connectedLoginPage = connect(mapState, actionCreators)(Login)
export { connectedLoginPage as Login }
