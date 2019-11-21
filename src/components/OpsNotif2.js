import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap'

class OpsNotif2 extends Component {
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
                size='.xs'
                style={{ color: 'orange' }}
              />
            </span>
          </Col>
          <Col sm={3}>
            <b style={{ color: '#505050', float: 'left' }}>
              MonetaGo 100D 17/10/2019
            </b>
          </Col>
          <Col sm={4}>
            {' '}
            <b style={{ color: '#505050', float: 'left' }}>
              IPA certificate pending approval
            </b>
          </Col>
          <Col sm={4}>
            {' '}
            <b style={{ color: '#505050', float: 'right' }}>
              08/07/2019 12:01:47
            </b>
          </Col>
        </Row>

        <Row>
          <Col sm={1}>
            <span style={{ float: 'right' }}>
              <FontAwesomeIcon
                icon={faCircle}
                size='.xs'
                style={{ color: 'orange' }}
              />
            </span>
          </Col>
          <Col sm={3}>
            <b style={{ color: '#505050', float: 'left' }}>
              MonetaGo 92D 3/10/2019
            </b>
          </Col>
          <Col sm={4}>
            <b style={{ color: '#505050', float: 'left' }}>
              IPA Certificate has been issued
            </b>
          </Col>
          <Col sm={4}>
            <b style={{ color: '#505050', float: 'right' }}>
              07/07/2019 12:23:03
            </b>
          </Col>
        </Row>

        <Row>
          <Col sm={1}>
            <span style={{ float: 'right' }}>
              {' '}
              <FontAwesomeIcon
                icon={faCircle}
                size='.xs'
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
            {' '}
            <b style={{ color: '#505050', float: 'left' }}>
              New Issuance Approved
            </b>
          </Col>
          <Col sm={4}>
            {' '}
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
              MonetaGo 92D 3/10/2019
            </b>
          </Col>
          <Col sm={4}>
            <b
              style={{ color: '#505050', float: 'left', fontWeight: 'normal' }}
            >
              Letter Of Offer rejected by IPA
            </b>
          </Col>
          <Col sm={4}>
            <b
              style={{ color: '#505050', float: 'right', fontWeight: 'normal' }}
            >
              07/07/2019 14:10:50
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
              MonetaGo 92D 3/10/2019
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
              07/07/2019 10:46:08
            </b>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default OpsNotif2
