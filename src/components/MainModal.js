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
  Navbar,
  Tab,
  Tabs
} from 'react-bootstrap'
import '../App.css'
import { CreditLimits } from './CreditLimits'
import { MaturityData } from './MaturityData'
import { Allocations } from './Allocations'
import { Documents } from './Documents'
import Tranches from './Tranches'
import Redemption from './Redemption'

function MainModal() {
  const [lgShow, setLgShow] = useState(false)
  return (
    <div>
      <ButtonToolbar>
        <Button onClick={() => setLgShow(true)}>Large modal</Button>
        <Modal
          size='xl'
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
            <Tabs
              className='justify-content-center'
              defaultActiveKey='maturity data'
              transition={false}
              id='noanim-tab-example'
              style={{
                fontSize: '11px',
                backgroundColor: 'transparent',
                margin: 'auto',
                width: '80%'
              }}
            >
              <Tab eventKey='maturity data' title='Maturity Data'>
                <MaturityData />
              </Tab>
              <Tab eventKey='tranches' title='Tranches'>
                <Tranches />
              </Tab>
              <Tab eventKey='allocations' title='Allocations'>
                <Allocations />
              </Tab>
              <Tab eventKey='credit' title='Credit Limits'>
                <CreditLimits />
              </Tab>
              <Tab eventKey='documents' title='Documents'>
                <Documents />
              </Tab>
              <Tab eventKey='service' title='Service'>
                Service
              </Tab>
              <Tab eventKey='audit' title='Audit'>
                <Redemption />
              </Tab>
            </Tabs>
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
