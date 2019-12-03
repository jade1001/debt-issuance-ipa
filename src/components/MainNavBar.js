import React, { Component } from 'react'
import { Navbar, Nav, Dropdown, Container } from 'react-bootstrap'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { userActions } from '../Redux/_actions/user.actions'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, NavLink } from 'react-router-dom'
import { DebtIssuance } from './DebtIssuance'
import DashboardMain from './DashboardMain'
import { PrivateRoute } from './PrivateRoute'

class MainNavBar extends Component {
	constructor(props) {
		super(props)

		this.state = {}
		this.logOut = this.logOut.bind(this)
	}

	logOut() {
		this.props.logout()
	}

	render() {
		return (
			<Router>
				<Navbar fluid='true' collapseOnSelect expand='lg' variant='light' style={{backgroundColor: 'rgb(245, 245, 245)', fontSize: '14px',}}>
					<Container>
						<Navbar.Brand href='/' style={{ border: '3px solid rgb(245, 245, 245)' }}>
						<img src={logo} alt='' width='30' height='30' className='d-inline-block align-top'/>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='responsive-navbar-nav' />
						<Navbar.Collapse id='responsive-navbar-nav'>
							<Nav className='mr-auto'>
								<NavLink exact to='/' className='nav-link' activeClassName='active'>
									Dashboard
								</NavLink>
								<NavLink exact to='/debt-issuance' className='nav-link' activeClassName='active'>
									Debt Issuance
								</NavLink>
								<NavLink exact to='/credit-limits' className='nav-link' activeClassName='active'>
									Credit Limits
								</NavLink>
								<NavLink exact to='/identities' className='nav-link' activeClassName='active'>
									Identities
								</NavLink>
								<NavLink exact to='/settings' className='nav-link' activeClassName='active'>
									Settings
								</NavLink>
							</Nav>
							<Nav className='ml-auto'>
								{/* <Nav.Link href='#IPA-Ops'>
								IPA Ops &nbsp;
								<FontAwesomeIcon icon={faChevronDown} />
								</Nav.Link> */}
								<Dropdown>
									<Dropdown.Toggle id='dropdown-basic-button' className='nav-link' variant=''>
										IPA Ops
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item href='/login' onClick={this.logOut}>
											Logout
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
								<Nav.Link href='#help'>
									Help
								</Nav.Link>
								{/* <Nav.Link href='/login' style={{}} onClick={this.logOut}>
								Logout
								</Nav.Link> */}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<Switch>
					<PrivateRoute path='/' exact component={DashboardMain} />
					<PrivateRoute path='/debt-issuance' exact component={DebtIssuance}/>
				</Switch>
			</Router>
		)
	}
}

function mapState(state) {
	const { loggingOut } = state.authentication
	return { loggingOut }
}

const actionCreators = {
	logout: userActions.logout,
}

export default connect(mapState, actionCreators)(MainNavBar)

// export default MainNavBar
