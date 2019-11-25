import React, { Component } from 'react'
import { Navbar, Nav, Form, Container } from 'react-bootstrap'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom'
import { DebtIssuance } from './DebtIssuance'
import DashboardMain from './DashboardMain'
import { PrivateRoute } from './PrivateRoute'

class MainNavBar extends Component {
  render() {
    return (
      <div className='App container'>
        <Router className='App container'>
          <Navbar
            fluid='true'
            collapseOnSelect
            expand='lg'
            style={{
              backgroundColor: 'rgb(245, 245, 245)',
              fontSize: '14px',
            }}
            variant='light'
          >
            <Navbar.Brand
              href='/'
              style={{ border: '3px solid rgb(245, 245, 245)' }}
            >
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
              <Nav className='mr-auto'>
                <NavLink
                  exact
                  to='/'
                  className='nav-link'
                  activeClassName='active'
                >
                  Dashboard
                </NavLink>
                <NavLink
                  exact
                  to='/debt-issuance'
                  className='nav-link'
                  activeClassName='active'
                >
                  Debt Issuance
                </NavLink>
                <NavLink
                  exact
                  to='/credit-limits'
                  className='nav-link'
                  activeClassName='active'
                >
                  Credit Limits
                </NavLink>
                <NavLink
                  exact
                  to='/identities'
                  className='nav-link'
                  activeClassName='active'
                >
                  Identities
                </NavLink>
                <NavLink
                  exact
                  to='/settings'
                  className='nav-link'
                  activeClassName='active'
                >
                  Settings
                </NavLink>
              </Nav>
              <Nav className='ml-auto' style={{}}>
                <Nav.Link href='#IPA-Ops'>
                  IPA Ops &nbsp;
                  <FontAwesomeIcon icon={faChevronDown} />
                </Nav.Link>
                <Nav.Link href='#help' style={{}}>
                  Help
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <PrivateRoute path='/' exact component={DashboardMain} />
            <PrivateRoute
              path='/debt-issuance'
              exact
              component={DebtIssuance}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default MainNavBar
