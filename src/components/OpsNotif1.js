import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row, Modal, Tab, Tabs, Nav } from 'react-bootstrap'

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
          aria-labelledby='example-modal-sizes-title-xl'
        >
          <Modal.Header
            style={{
              backgroundColor: 'rgb(245,245,245',
              padding: '0'
            }}
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
          <Modal.Body id='modalContent'>
            <Tab.Container id='left-tabs-example' defaultActiveKey='document'>
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
                    disabled
                  >
                    Maturity Data
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey='tranches'
                    style={{ padding: '0', margin: '0 16px' }}
                    disabled
                  >
                    Tranches
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey='allocation'
                    style={{ padding: '0', margin: '0 16px' }}
                    disabled
                  >
                    Allocations
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey='credit'
                    style={{ padding: '0', margin: '0 16px' }}
                    disabled
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
                    disabled
                  >
                    Service Provider
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey='audit'
                    style={{ padding: '0', margin: '0 16px' }}
                    disabled
                  >
                    Audit Trail
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey='settlement'
                    style={{ padding: '0', margin: '0 0 0 16px' }}
                    disabled
                  >
                    Settlement
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='maturity'>
                  {/* <MaturityData /> */}
                </Tab.Pane>
                <Tab.Pane eventKey='tranches'>
                  {/* <TranchesData /> */}
                </Tab.Pane>
                <Tab.Pane eventKey='allocation'>
                  {/* <Allocations /> */}
                </Tab.Pane>
                <Tab.Pane eventKey='credit'>{/* <CreditLimits /> */}</Tab.Pane>
                <Tab.Pane eventKey='document'>
                  <Documents />
                </Tab.Pane>
                <Tab.Pane eventKey='service'></Tab.Pane>
                <Tab.Pane eventKey='audit'></Tab.Pane>
                <Tab.Pane eventKey='settlement'>
                  {/* <Settlement /> */}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Modal.Body>
        </Modal>
        {/* <Modal
          size='xl'
          show={this.state.lgShow}
          onHide={() => this.show(false)}
          aria-labelledby='example-modal-sizes-title-lg'
        >
          <Modal.Header
            style={{
              padding: '8px',
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
                fontSize: '0.7rem',
                fontWeight: 400,
                textAlign: 'center',
                margin: '0',
                margin: 'auto',
                width: '10%',
                textDecoration: 'none',
                color: 'rgb(58, 77, 150)'
              }}
            >
              Quick Actions &nbsp;
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ fontSize: 12, color: 'rgb(58, 77, 150)' }}
              />
            </a>
          </Modal.Header>
          <Modal.Body id='modalContent'>
            <Tabs
              defaultActiveKey='documents'
              transition={false}
              id='noanim-tab-example'
              className='justify-content-center'
              as='div'
              style={{ width: '771px', margin: 'auto' }}
            >
              <Tab eventKey='maturity data' title='Maturity Data' disabled>
                <MaturityData />
              </Tab>
              <Tab eventKey='tranches' title='Tranches' disabled>
                Tranches
              </Tab>
              <Tab eventKey='allocations' title='Allocations' disabled>
                <Allocations />
              </Tab>
              <Tab eventKey='credit' title='Credit Limits' disabled>
                <CreditLimits />
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
              <Tab eventKey='settlement' title='Settlement' disabled>
                <Settlement />
              </Tab>
            </Tabs>
          </Modal.Body>
          <Modal.Footer
            style={{ border: 'none', height: '150px' }}
          ></Modal.Footer>
        </Modal> */}
      </Container>
    )
  }
}

export default OpsNotif1
