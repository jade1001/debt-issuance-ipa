import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row, Modal, Tab, Tabs } from 'react-bootstrap'

import '../App.css'
import { Documents } from './Documents'

class OpsNotif1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lgShow: false
    }
    this.show = this.show.bind(this)
  }

  show(bool) {
    this.setState({
      lgShow: bool
    })
  }

  render() {
    return (
      <Container>
        <p style={{ float: 'left', color: '#505050', fontSize: '12px' }}>
          Notifications
        </p>
        <br />
        <br />
        <Row
          style={{ borderBottom: '1px solid #F3F3F3', cursor: 'pointer' }}
          onClick={() => this.show(true)}
        >
          <Col xs={1}>
            <span style={{ float: 'right' }}>
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: 'orange', fontSize: '12px' }}
              />
            </span>
          </Col>
          <Col xs={3}>
            <b
              style={{
                color: '#505050',
                float: 'left',
                fontSize: '12px'
              }}
            >
              MonetaGo 92D 03/10/2019
            </b>
          </Col>
          <Col xs={3}>
            {' '}
            <b style={{ color: '#505050', float: 'left', fontSize: '12px' }}>
              IPA certificate has been issued
            </b>
          </Col>
          <Col xs={4}>
            {' '}
            <b style={{ color: '#505050', float: 'right', fontSize: '12px' }}>
              07/07/2019 12:23:03
            </b>
          </Col>
        </Row>

        <Row
          style={{ borderBottom: '1px solid #F3F3F3', cursor: 'pointer' }}
          onClick={() => this.show(true)}
        >
          <Col xs={1}>
            <span style={{ float: 'right' }}>
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: 'orange', fontSize: '12px' }}
              />
            </span>
          </Col>
          <Col xs={3}>
            <b style={{ color: '#505050', float: 'left', fontSize: '12px' }}>
              MonetaGo 120D 1/11/2019
            </b>
          </Col>
          <Col xs={3}>
            <b style={{ color: '#505050', float: 'left', fontSize: '12px' }}>
              New Issuance Approved
            </b>
          </Col>
          <Col xs={4}>
            <b style={{ color: '#505050', float: 'right', fontSize: '12px' }}>
              07/07/2019 12:15:49
            </b>
          </Col>
        </Row>

        <Row
          style={{ borderBottom: '1px solid #F3F3F3', cursor: 'pointer' }}
          onClick={() => this.show(true)}
        >
          <Col xs={1}>
            <span style={{ float: 'right' }}></span>
          </Col>
          <Col xs={3}>
            <b
              style={{
                color: '#505050',
                float: 'left',
                fontWeight: 'normal',
                fontSize: '12px'
              }}
            >
              MonetaGo 92D 03/10/2019
            </b>
          </Col>
          <Col xs={3}>
            {' '}
            <b
              style={{
                color: '#505050',
                float: 'left',
                fontWeight: 'normal',
                fontSize: '12px'
              }}
            >
              IPA certificate has been issued
            </b>
          </Col>
          <Col xs={4}>
            {' '}
            <b
              style={{
                color: '#505050',
                float: 'right',
                fontWeight: 'normal',
                fontSize: '12px'
              }}
            >
              07/07/2019 12:23:03
            </b>
          </Col>
        </Row>

        <Row
          style={{ borderBottom: '1px solid #F3F3F3', cursor: 'pointer' }}
          onClick={() => this.show(true)}
        >
          <Col xs={1}>
            <span style={{ float: 'right' }}></span>
          </Col>
          <Col xs={3}>
            <b
              style={{
                color: '#505050',
                float: 'left',
                fontWeight: 'normal',
                fontSize: '12px'
              }}
            >
              MonetaGo 120D 1/11/2019
            </b>
          </Col>
          <Col xs={3}>
            <b
              style={{
                color: '#505050',
                float: 'left',
                fontWeight: 'normal',
                fontSize: '12px'
              }}
            >
              New Issuance Approved
            </b>
          </Col>
          <Col xs={4}>
            <b
              style={{
                color: '#505050',
                float: 'right',
                fontWeight: 'normal',
                fontSize: '12px'
              }}
            >
              07/07/2019 12:15:49
            </b>
          </Col>
        </Row>

        <Modal
          size='xl'
          show={this.state.lgShow}
          onHide={() => this.show(false)}
          aria-labelledby='example-modal-sizes-title-lg'
        >
          <Modal.Header
            style={{
              padding: '0',
              backgroundColor: 'rgb(245,245,245)'
            }}
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
              defaultActiveKey='documents'
              transition={false}
              id='noanim-tab-example'
            >
              <Tab eventKey='maturity data' title='Maturity Data' disabled>
                {/* <MaturityData /> */}
              </Tab>
              <Tab eventKey='tranches' title='Tranches' disabled>
                Tranches
              </Tab>
              <Tab eventKey='allocations' title='Allocations' disabled>
                {/* <Allocations /> */}
              </Tab>
              <Tab eventKey='credit' title='Credit Limits' disabled>
                {/* <CreditLimits /> */}
              </Tab>
              <Tab eventKey='documents' title='Documents'>
                <Documents />
              </Tab>
              <Tab eventKey='service' title='Service' disabled>
                Service
              </Tab>
              <Tab eventKey='audit' title='Audit' disabled>
                Audit
              </Tab>
            </Tabs>
          </Modal.Body>
          <Modal.Footer
            style={{ border: 'none', height: '150px' }}
          ></Modal.Footer>
        </Modal>
      </Container>
    )
  }
}

export default OpsNotif1
