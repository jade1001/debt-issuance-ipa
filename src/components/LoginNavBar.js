import React, { Component } from 'react'
import '../App.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from './logo.png'

class LoginNavBar extends Component {
	render() {
		return (
			<Navbar fluid='true' collapseOnSelect expand='lg' variant='light' style={{ backgroundColor: 'rgb(245, 245, 245)', fontSize: '14px' }}>
				<Container>
					<Navbar.Brand href='#home'>
						<img src={logo} alt='' width='30' height='30' className='d-inline-block align-top'/>
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
				</Container>
			</Navbar>
		)
	}
}

export default LoginNavBar
