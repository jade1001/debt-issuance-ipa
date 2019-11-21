import React, { Component } from 'react'
import MainNavBar from './MainNavBar'
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css'

class DashboardMain extends Component {
  render() {
    return (
      <div>
        <MainNavBar />
        <Container>
          <Row>
            <Col
              xs
              align='right'
              style={{
                color: '#919191',
                marginTop: 10,
                marginBottom: 10,
                cursor: 'pointer'
              }}
            >
              Reports
            </Col>
          </Row>
          <Row>
            <Col
              xs
              style={{
                backgroundColor: 'rgb(245, 245, 245)',
                height: 150,
                transition: 'all 0.2s ease-in -out',
                textAlign: 'center'
              }}
              id='cards'
            >
              <p id='pHead'>Total Client CP Outstanding</p>
              <p id='pBody'>15,42,000 Cr</p>
              <p id='pFooter'>INR</p>
            </Col>
            <Col
              xs={{ order: 12 }}
              style={{
                backgroundColor: 'rgb(245, 245, 245)',
                height: 150,
                transition: 'all 0.2s ease-in -out',
                textAlign: 'center',
                marginLeft: 10
              }}
              id='cards'
            >
              <p id='pHead'>Client MTD Issued</p>
              <p id='pBody'>3,01,000 Cr</p>
              <p id='pFooter'>INR</p>
            </Col>
            <Col
              xs={{ order: 1 }}
              style={{
                backgroundColor: 'rgb(245, 245, 245)',
                height: 150,
                transition: 'all 0.2s ease-in -out',
                textAlign: 'center',
                marginLeft: 10
              }}
              id='cards'
            >
              <p id='pHead'>Maturing Today</p>
              <p id='pBody'>3</p>
              <p id='pFooter'>Count</p>
            </Col>
            <Col
              xs
              style={{
                backgroundColor: 'rgb(245, 245, 245)',
                height: 150,
                transition: 'all 0.2s ease-in -out',
                textAlign: 'center',
                marginLeft: 10
              }}
              id='cards'
            >
              <p id='pHead'>Avg Yield of Outstanding</p>
              <p id='pBody'>9.78%</p>
              <p id='pFooter'>APY</p>
            </Col>
            <Col
              xs={{ order: 12 }}
              style={{
                backgroundColor: 'rgb(245, 245, 245)',
                height: 150,
                transition: 'all 0.2s ease-in -out',
                textAlign: 'center',
                marginLeft: 10
              }}
              id='cards'
            >
              <p id='pHead'>Total Market CP Outstanding</p>
              <p id='pBody'>35,54,800 Cr</p>
              <p id='pFooter'>INR</p>
            </Col>
            <Col
              xs={{ order: 1 }}
              style={{
                backgroundColor: 'rgb(245, 245, 245)',
                height: 150,
                transition: 'all 0.2s ease-in -out',
                textAlign: 'center',
                marginLeft: 10
              }}
              id='cards'
            >
              <p id='pHead'>Placements In Progress</p>
              <p id='pBody'>37,200 Cr</p>
              <p id='pFooter'>INR</p>
            </Col>
          </Row>

          <Row style={{ marginTop: 10 }}>
            <Col
              xs
              style={{
                backgroundColor: 'rgb(245, 245, 245)',
                height: 150,
                transition: 'all 0.2s ease-in -out',
                textAlign: 'center'
              }}
              id='cards'
            >
              <p id='pHead'>Client ISINs Outstanding</p>
              <p id='pBody'>135</p>
              <p id='pFooter'>Count</p>
            </Col>
            <Col
              xs={{ order: 12 }}
              style={{
                backgroundColor: 'rgb(245, 245, 245)',
                height: 150,
                transition: 'all 0.2s ease-in -out',
                textAlign: 'center',
                marginLeft: 10
              }}
              id='cards'
            >
              <p id='pHead'>Avg Client Issued Value</p>
              <p id='pBody'>11,422 Cr</p>
              <p id='pFooter'>INR</p>
            </Col>
            <Col
              xs={{ order: 1 }}
              style={{
                backgroundColor: 'rgb(245, 245, 245)',
                height: 150,
                transition: 'all 0.2s ease-in -out',
                textAlign: 'center',
                marginLeft: 10
              }}
              id='cards'
            >
              <p id='pHead'>Value Date Today</p>
              <p id='pBody'>5</p>
              <p id='pFooter'>Count</p>
            </Col>
            <Col
              xs
              style={{
                backgroundColor: 'rgb(245, 245, 245)',
                height: 150,
                transition: 'all 0.2s ease-in -out',
                textAlign: 'center',
                marginLeft: 10
              }}
              id='cards'
            >
              <p id='pHead'>Avg Term Of Outstanding</p>
              <p id='pBody'>94</p>
              <p id='pFooter'>Days</p>
            </Col>
            <Col
              xs={{ order: 12 }}
              style={{
                backgroundColor: 'rgb(245, 245, 245)',
                height: 150,
                transition: 'all 0.2s ease-in -out',
                textAlign: 'center',
                marginLeft: 10
              }}
              id='cards'
            >
              <p id='pHead1'>Total Market ISINs Outstanding</p>
              <p id='pBody'>398</p>
              <p id='pFooter'>INR</p>
            </Col>
            <Col
              xs={{ order: 1 }}
              style={{
                backgroundColor: 'rgb(245, 245, 245)',
                height: 150,
                transition: 'all 0.2s ease-in -out',
                textAlign: 'center',
                marginLeft: 10
              }}
              id='cards'
            >
              <p id='pHead'>Placements In Progress</p>
              <p id='pBody'>12</p>
              <p id='pFooter'>Count</p>
            </Col>
          </Row>
        </Container>
        <OpsNotif1 />
      </div>
    )
  }
}

export default DashboardMain
