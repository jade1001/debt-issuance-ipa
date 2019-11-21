import React, { Component } from 'react'
import MainNavBar from './MainNavBar'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

class DebtIssuance extends Component {
  render() {
    return (
      <div>
        <MainNavBar />
        <Container>
          <Row style={{ marginTop: 20 }}>
            <Col xs>
              <p
                style={{
                  color: '#182e58',
                  borderBottom: '2px solid #182e58',
                  width: 130
                }}
              >
                Commercial Paper
              </p>
              <hr style={{ marginTop: -17 }} />
            </Col>
          </Row>
        </Container>
        <Container
          style={{
            width: 280,
            height: 500,
            float: 'left',
            paddingLeft: 120,
            borderRight: '1px solid #919191'
          }}
        >
          <Col style={{ color: '#182e58', fontSize: 14, cursor: 'pointer' }}>
            Maturities (ISIN)
          </Col>
          <Col
            style={{
              opacity: 0.4,
              marginTop: 7,
              fontSize: 14,
              cursor: 'pointer'
            }}
          >
            Tranches
          </Col>
          <Col
            style={{
              opacity: 0.4,
              marginTop: 7,
              fontSize: 14,
              cursor: 'pointer'
            }}
          >
            Allocations
          </Col>
          <Col
            style={{
              opacity: 0.4,
              marginTop: 7,
              fontSize: 14,
              cursor: 'pointer'
            }}
          >
            + Start New
          </Col>
        </Container>
        <Container>
          <Row>
            <Col style={{ backgroundColor: 'red' }}>
              <FontAwesomeIcon
                icon={faDownload}
                style={{
                  width: 50,
                  height: 25,
                  color: 'white',
                  border: '1px solid #182e58',
                  backgroundColor: '#182e58',
                  borderRadius: 5
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default DebtIssuance
