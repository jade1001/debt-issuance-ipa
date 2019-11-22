import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap'
import '../App.css'

class OpsNotif1 extends Component {
  render() {
    return (
      <Container>
        <p style={{ float: 'left', color: '#505050', fontSize: '12px' }}>
          Notifications
        </p>
        <br />
        <br />
        <Row style={{ borderBottom: '1px solid #F3F3F3' }}>
          <Col sm={1}>
            <span style={{ float: 'right' }}>
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: 'orange', fontSize: '12px' }}
                id='notificon'
              />
            </span>
          </Col>
          <Col sm={3}>
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
          <Col sm={4}>
            {' '}
            <b style={{ color: '#505050', float: 'left', fontSize: '12px' }}>
              IPA certificate has been issued
            </b>
          </Col>
          <Col sm={4}>
            {' '}
            <b style={{ color: '#505050', float: 'right', fontSize: '12px' }}>
              07/07/2019 12:23:03
            </b>
          </Col>
        </Row>

        <Row style={{ borderBottom: '1px solid #F3F3F3' }}>
          <Col sm={1}>
            <span style={{ float: 'right' }}>
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: 'orange', fontSize: '12px' }}
              />
            </span>
          </Col>
          <Col sm={3}>
            <b style={{ color: '#505050', float: 'left', fontSize: '12px' }}>
              MonetaGo 120D 1/11/2019
            </b>
          </Col>
          <Col sm={4}>
            <b style={{ color: '#505050', float: 'left', fontSize: '12px' }}>
              New Issuance Approved
            </b>
          </Col>
          <Col sm={4}>
            <b style={{ color: '#505050', float: 'right', fontSize: '12px' }}>
              07/07/2019 12:15:49
            </b>
          </Col>
        </Row>

        <Row style={{ borderBottom: '1px solid #F3F3F3' }}>
          <Col sm={1}>
            <span style={{ float: 'right' }}></span>
          </Col>
          <Col sm={3}>
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
          <Col sm={4}>
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
          <Col sm={4}>
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

        <Row style={{ borderBottom: '1px solid #F3F3F3' }}>
          <Col sm={1}>
            <span style={{ float: 'right' }}></span>
          </Col>
          <Col sm={3}>
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
          <Col sm={4}>
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
          <Col sm={4}>
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
      </Container>
    )
  }
}

export default OpsNotif1
