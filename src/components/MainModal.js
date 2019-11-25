import React, { useState } from 'react'
import {
  Modal,
  Button,
  ButtonToolbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Navbar
} from 'react-bootstrap'
import MaturityData from './MaturityData'
import Documents from './Documents'
import CreditLimits from './CreditLimits'
import Allocations from './Allocations'
import '../App.css'

function MainModal() {
  const [smShow, setSmShow] = useState(false)
  const [lgShow, setLgShow] = useState(false)
  return (
    <div>
      <ButtonToolbar>
        <Button onClick={() => setLgShow(true)}>Large modal</Button>
        <Modal
          size='lg'
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby='example-modal-sizes-title-lg'
        >
          <Modal.Header
            style={{ padding: '0', backgroundColor: 'rgb(245,245,245)' }}
          >
            <Modal.Title
              className='mtitle'
              id='example-modal-sizes-title-lg '
              style={{
                backgroundColor: 'rgb(245,245,245)',
                width: '100%',
                textAlign: 'center',
                fontSize: '1rem',
                color: 'rgb(58, 77, 150)'
              }}
            >
              MonetaGo CP 100D 17/10/2019
            </Modal.Title>
            <a
              href=''
              style={{
                fontSize: '0.5rem',
                textAlign: 'center',
                margin: '0',
                margin: 'auto',
                width: '10%',
                textDecoration: 'none'
              }}
            >
              Quick Startup >
            </a>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Navbar expand='lg'>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav
                    className='mr-auto'
                    style={{
                      fontSize: '0.74rem',
                      margin: 'auto',
                      color: 'grey',
                      borderBottom: '1px solid grey'
                    }}
                  >
                    <Nav.Link href='#maturity' className='navbar-items'>
                      Maturity Details
                    </Nav.Link>
                    <Nav.Link href='#tranches' className='navbar-items'>
                      Tranches
                    </Nav.Link>
                    <Nav.Link href='#cllocation' className='navbar-items'>
                      Allocation
                    </Nav.Link>
                    <Nav.Link href='#credit' className='navbar-items'>
                      Credit Limits
                    </Nav.Link>
                    <Nav.Link href='#documents' className='navbar-items'>
                      Documents
                    </Nav.Link>
                    <Nav.Link href='#service' className='navbar-items'>
                      Service Provider
                    </Nav.Link>
                    <Nav.Link href='#audit' className='navbar-items'>
                      Audit Trail
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>

              {/* <MaturityData /> */}
              <Documents />
              {/* <CreditLimits/> */}
              {/* <Allocations /> */}
            </Container>
          </Modal.Body>
          <Modal.Footer
            style={{ border: 'none', height: '150px' }}
          ></Modal.Footer>
        </Modal>
      </ButtonToolbar>
    </div>
  )
}

export default MainModal
