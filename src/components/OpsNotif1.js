import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap'

class OpsNotif1 extends Component {
  render() {
    return (
      <Container>
        <p style={{ float: 'left', color: '#505050', fontSize: '15px' }}>
          Notifications
        </p>
        <br />
        <br />
        <Row>
          <Col sm={1}>
            <span style={{ float: 'right' }}>
              <FontAwesomeIcon
                icon={faCircle}
                size='xs'
                style={{ color: 'orange' }}
              />
            </span>
          </Col>
          <Col sm={3}>
            <b style={{ color: '#505050', float: 'left' }}>
              MonetaGo 92D 03/10/2019
            </b>
          </Col>
          <Col sm={4}>
            {' '}
            <b style={{ color: '#505050', float: 'left' }}>
              IPA certificate has been issued
            </b>
          </Col>
          <Col sm={4}>
            {' '}
            <b style={{ color: '#505050', float: 'right' }}>
              07/07/2019 12:23:03
            </b>
          </Col>
        </Row>

        <Row>
          <Col sm={1}>
            <span style={{ float: 'right' }}>
              <FontAwesomeIcon
                icon={faCircle}
                size='xs'
                style={{ color: 'orange' }}
              />
            </span>
          </Col>
          <Col sm={3}>
            <b style={{ color: '#505050', float: 'left' }}>
              MonetaGo 120D 1/11/2019
            </b>
          </Col>
          <Col sm={4}>
            <b style={{ color: '#505050', float: 'left' }}>
              New Issuance Approved
            </b>
          </Col>
          <Col sm={4}>
            <b style={{ color: '#505050', float: 'right' }}>
              07/07/2019 12:15:49
            </b>
          </Col>
        </Row>

        <Row>
          <Col sm={1}>
            <span style={{ float: 'right' }}></span>
          </Col>
          <Col sm={3}>
            <b
              style={{ color: '#505050', float: 'left', fontWeight: 'normal' }}
            >
              MonetaGo 92D 03/10/2019
            </b>
          </Col>
          <Col sm={4}>
            {' '}
            <b
              style={{ color: '#505050', float: 'left', fontWeight: 'normal' }}
            >
              IPA certificate has been issued
            </b>
          </Col>
          <Col sm={4}>
            {' '}
            <b
              style={{ color: '#505050', float: 'right', fontWeight: 'normal' }}
            >
              07/07/2019 12:23:03
            </b>
          </Col>
        </Row>

        <Row>
          <Col sm={1}>
            <span style={{ float: 'right' }}></span>
          </Col>
          <Col sm={3}>
            <b
              style={{ color: '#505050', float: 'left', fontWeight: 'normal' }}
            >
              MonetaGo 120D 1/11/2019
            </b>
          </Col>
          <Col sm={4}>
            <b
              style={{ color: '#505050', float: 'left', fontWeight: 'normal' }}
            >
              New Issuance Approved
            </b>
          </Col>
          <Col sm={4}>
            <b
              style={{ color: '#505050', float: 'right', fontWeight: 'normal' }}
            >
              07/07/2019 12:15:49
            </b>
          </Col>
        </Row>
        {/* <Row>
          <Col sm={1}></Col>
          <Col sm={3}>
            <p style={{ color: '#505050', float: 'left' }}>
              MonetaGo 120D 1/11/2019
            </p>
          </Col>
          <Col sm={4}>
            <p style={{ color: '#505050', float: 'left' }}>
              New Issuance Approved
            </p>
          </Col>
          <Col sm={4}>
            <p style={{ color: '#505050', float: 'right' }}>
              07/07/2019 12:15:49
            </p>
          </Col>
        </Row>

        <Row style={{ paddingTop: '0' }}>
          <Col sm={1}></Col>
          <Col sm={3}>
            <p style={{ color: '#505050', float: 'left' }}>
              MonetaGo 120D 1/11/2019
            </p>
          </Col>
          <Col sm={4}>
            <p style={{ color: '#505050', float: 'left' }}>
              New Issuance Approved
            </p>
          </Col>
          <Col sm={4}>
            <p style={{ color: '#505050', float: 'right' }}>
              07/07/2019 12:15:49
            </p>
          </Col>
        </Row> */}
      </Container>
    )
  }
}

export default OpsNotif1
