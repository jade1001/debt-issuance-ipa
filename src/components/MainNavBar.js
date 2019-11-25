import React, { Component } from 'react'
import { Navbar, Nav, Form, Container } from 'react-bootstrap'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { DebtIssuance } from './DebtIssuance'
import DashboardMain from './DashboardMain'
import { PrivateRoute } from './PrivateRoute'

class MainNavBar extends Component {
  render() {
    return (
      <>
        <Router className='App container'>
          <Navbar
            fluid='true'
            collapseOnSelect
            expand='lg'
            style={{
              backgroundColor: 'rgb(245, 245, 245)',
            }}
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
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Link to='/' className='nav-link active'>
                  Dashboard
                </Link>
                <Link to='/debt-issuance' className='nav-link'>
                  Debt Issuance
                </Link>
                <Link to='/credit-limits' className='nav-link'>
                  Credit Limits
                </Link>
                <Link to='/identities' className='nav-link'>
                  Identities
                </Link>
                <Link to='/settings' className='nav-link'>
                  Settings
                </Link>
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
      </>
    )
  }
}

export default MainNavBar
