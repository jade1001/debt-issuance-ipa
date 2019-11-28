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
          <Tab.Container id='left-tabs-example' defaultActiveKey='maturity'>
            <Navbar collapseOnSelect>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav
                  className='bg-white'
                  style={{
                    borderBottom: '2px solid transparent',
                    width: '68.5%',
                    fontSize: '0.8rem',
                    borderBottom: '1px solid lightgrey',
                    margin: 'auto',
                    justifyContent: 'center'
                  }}
                >
                  <Nav.Item>
                    <Nav.Link
                      eventKey='maturity'
                      style={{ padding: '0', margin: '0 16px 0 0' }}
                    >
                      Maturity Data
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey='tranches'
                      style={{ padding: '0', margin: '0 16px' }}
                    >
                      Tranches
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey='allocation'
                      style={{ padding: '0', margin: '0 16px' }}
                    >
                      Allocations
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey='credit'
                      style={{ padding: '0', margin: '0 16px' }}
                    >
                      Credit Limits
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey='document'
                      style={{ padding: '0', margin: '0 16px' }}
                    >
                      Documents
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey='service'
                      style={{ padding: '0', margin: '0 16px' }}
                    >
                      Service Provider
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey='audit'
                      style={{ padding: '0', margin: '0 16px' }}
                    >
                      Audit Trail
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey='settlement'
                      style={{ padding: '0', margin: '0 0 0 16px' }}
                    >
                      Settlement
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Tab.Content>
              <Tab.Pane eventKey='maturity'>
                <MaturityData />
              </Tab.Pane>
              <Tab.Pane eventKey='tranches'>
                <Tranches />
              </Tab.Pane>
              <Tab.Pane eventKey='allocation'>
                <Allocations />
              </Tab.Pane>
              <Tab.Pane eventKey='credit'>
                <CreditLimits />
              </Tab.Pane>
              <Tab.Pane eventKey='document'>
                <Documents />
              </Tab.Pane>
              <Tab.Pane eventKey='service'></Tab.Pane>
              <Tab.Pane eventKey='audit'></Tab.Pane>
              <Tab.Pane eventKey='settlement'>
                <Settlement />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    </ButtonToolbar>
  )
}

export default MainModal
