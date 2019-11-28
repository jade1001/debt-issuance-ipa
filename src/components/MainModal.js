import React, { useState } from 'react'
import {
  Modal,
  Tab,
  Tabs,
  ButtonToolbar,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  TabContainer
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { MaturityData } from './MaturityData'
import { Documents } from './Documents'
import Tranches from './Tranches'
import Redemption from './Redemption'
import '../App.css'
import { Allocations } from './Allocations'
import { CreditLimits } from './CreditLimits'
import { Settlement } from './Settlement'
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Link
} from 'react-router-dom'

function MainModal(props) {
  const [smShow, setSmShow] = useState(false)
  const [lgShow, setLgShow] = useState(false)

  return (
    <ButtonToolbar>
      <Button onClick={() => setLgShow(true)}>Large modal</Button>

      <Modal
        size='xl'
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby='example-modal-sizes-title-xl'
      >
        <Modal.Header
          style={{ backgroundColor: 'rgb(245,245,245', padding: '0' }}
        >
          <Modal.Title
            id='example-modal-sizes-title-xl'
            style={{
              width: '90%',
              textAlign: 'center',
              backgroundColor: 'rgb(245,245,245)',
              color: 'darkblue',
              fontSize: '1.2rem'
            }}
          >
            MonetaGo CP 100D 17/10/2019
          </Modal.Title>
          <p
            style={{
              fontSize: '0.7rem',
              margin: 'auto',
              width: '10%',
              textAlign: 'center',
              color: 'rgb(58, 77, 150)'
            }}
          >
            Quick Action &nbsp;
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: 12, color: 'rgb(58, 77, 150)' }}
            />
          </p>
        </Modal.Header>
        <Modal.Body>
          <Router>
            <Navbar collapseOnSelect expand='lg'>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav
                  className='mr-auto'
                  style={{
                    borderBottom: '2px solid transparent',
                    width: '77.2%',
                    fontSize: '0.9rem',
                    borderBottom: '1px solid lightgrey',
                    margin: 'auto',
                    justifyContent: 'center',
                    paddingBottom: '0'
                  }}
                >
                  <NavLink
                    exact
                    to='/'
                    className='nav-link'
                    activeClassName='active'
                    style={{ padding: '0', margin: '0 16px 0 0' }}
                    id='MainModalNav'
                  >
                    Maturity Data
                  </NavLink>
                  <NavLink
                    to='/tranches'
                    className='nav-link'
                    activeClassName='active'
                    style={{ padding: '0', margin: '0 16px' }}
                    id='MainModalNav'
                  >
                    Tranches
                  </NavLink>
                  <NavLink
                    to='/allocations'
                    className='nav-link'
                    activeClassName='active'
                    style={{ padding: '0', margin: '0 16px' }}
                    id='MainModalNav'
                  >
                    Allocations
                  </NavLink>
                  <NavLink
                    to='/credit-limits'
                    className='nav-link'
                    activeClassName='active'
                    style={{ padding: '0', margin: '0 16px' }}
                    id='MainModalNav'
                  >
                    Credit Limits
                  </NavLink>
                  <NavLink
                    to='/documents'
                    className='nav-link'
                    activeClassName='active'
                    style={{ padding: '0', margin: '0 16px' }}
                    id='MainModalNav'
                  >
                    Documents
                  </NavLink>
                  <NavLink
                    to='/service-providers'
                    className='nav-link'
                    activeClassName='active'
                    style={{ padding: '0', margin: '0 16px' }}
                    id='MainModalNav'
                  >
                    Service Providers
                  </NavLink>
                  <NavLink
                    to='/audit-trail'
                    className='nav-link'
                    activeClassName='active'
                    style={{ padding: '0', margin: '0 16px' }}
                    id='MainModalNav'
                  >
                    Audit Trail
                  </NavLink>
                  <NavLink
                    to='settlement'
                    className='nav-link'
                    activeClassName='active'
                    style={{ padding: '0', margin: '0 0 0 16px' }}
                    id='MainModalNav'
                  >
                    Settlement
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Switch>
              <Route path='/' exact component={MaturityData} />
              <Route path='/tranches' exact component={Tranches} />
              <Route path='/allocations' exact component={Allocations} />
              <Route path='/credit-limits' exact component={CreditLimits} />
              <Route path='/documents' exact component={Documents} />
              <Route path='/settlement' exact component={Settlement} />
            </Switch>
          </Router>
        </Modal.Body>
        <Modal.Footer
          style={{ height: '100%', borderTop: 'none' }}
        ></Modal.Footer>
      </Modal>
    </ButtonToolbar>
  )
}

export default MainModal
