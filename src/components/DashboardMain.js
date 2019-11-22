import React, { Component } from 'react'
import MainNavBar from './MainNavBar'
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import OpsNotif1 from './OpsNotif1'
import styled from 'styled-components'

const Cards = styled.div`
  background-color: rgb(245, 245, 245);
  transition: all 0.2s ease-in -out;
  text-align: center;
  margin-left: 10px;
  width: 15.5%;
  height: 16%;
  margin-top: 10px;
  @media (max-width: 2560px) {
    width: 15.5%;
    height: 16%;
    margin-left: 10px;
  }
  @media (max-width: 1100px) {
    width: 15.5%;
    height: 16%;
    margin-left: 10px;
  }
  @media (max-width: 1000px) {
    width: 31%;
    height: 32%;
    margin-left: 10px;
    margin-top: 10px;
  }
  @media (max-width: 900px) {
    width: 31%;
    height: 32%;
    margin-left: 10px;
  }
  @media (max-width: 800px) {
    width: 31%;
    height: 32%;
    margin-top: 10px;
  }
  @media (max-width: 700px) {
    width: 31%;
    height: 32%;
    margin-top: 10px;
  }
  @media (max-width: 500px) {
    width: 40%;
    height: 40%;
    margin-top: 10px;
  }

  @media (max-width: 400px) {
    width: 100%;
    height: 100%;
    margin-top: 10px;
  }
  @media (max-width: 320px) {
    width: 100%;
    height: 100%;
    margin-top: 10px;
  }
`

class DashboardMain extends Component {
  render() {
    return (
      <>
        <MainNavBar />
        <div className='container'>
          <Container>
            <div className='App container'>
              <Col
                xs
                align='right'
                style={{
                  color: '#919191',
                  marginTop: 10
                }}
              >
                <p
                  style={{
                    cursor: 'pointer',
                    width: '6%'
                  }}
                >
                  Reports
                </p>
              </Col>
            </div>

            <Row
              style={{
                margin: 'auto',
                textAlign: 'center'
              }}
            >
              <Cards id='cards'>
                <p id='pHead'>Total Client CP Outstanding</p>
                <p id='pBody'>15,42,000 Cr</p>
                <p id='pFooter'>INR</p>
              </Cards>
              <Cards id='cards'>
                <p id='pHead'>Avg Yield of Outstanding</p>
                <p id='pBody'>9.78%</p>
                <p id='pFooter'>APY</p>
              </Cards>
              <Cards id='cards'>
                <p id='pHead'>Maturing Today</p>
                <p id='pBody'>3</p>
                <p id='pFooter'>Count</p>
              </Cards>
              <Cards id='cards'>
                <p id='pHead'>Placements In Progress</p>
                <p id='pBody'>37,200 Cr</p>
                <p id='pFooter'>INR</p>
              </Cards>
              <Cards id='cards'>
                <p id='pHead'>Client MTD Issued</p>
                <p id='pBody'>3,01,000 Cr</p>
                <p id='pFooter'>INR</p>
              </Cards>
              <Cards id='cards'>
                <p id='pHead'>Total Market CP Outstanding</p>
                <p id='pBody'>35,54,800 Cr</p>
                <p id='pFooter'>INR</p>
              </Cards>
            </Row>

            <Row
              style={{
                marginTop: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 'auto',
                textAlign: 'center'
              }}
            >
              <Cards id='cards'>
                <p id='pHead'>Client ISINs Outstanding</p>
                <p id='pBody'>135</p>
                <p id='pFooter'>Count</p>
              </Cards>
              <Cards id='cards'>
                <p id='pHead'>Avg Term Of Outstanding</p>
                <p id='pBody'>94</p>
                <p id='pFooter'>Days</p>
              </Cards>
              <Cards id='cards'>
                <p id='pHead'>Value Date Today</p>
                <p id='pBody'>5</p>
                <p id='pFooter'>Count</p>
              </Cards>
              <Cards id='cards'>
                <p id='pHead'>Placements In Progress</p>
                <p id='pBody'>12</p>
                <p id='pFooter'>Count</p>
              </Cards>
              <Cards id='cards'>
                <p id='pHead'>Avg Client Issued Value</p>
                <p id='pBody'>11,422 Cr</p>
                <p id='pFooter'>INR</p>
              </Cards>
              <Cards id='cards'>
                <p id='pHead1'>Total Market ISINs Outstanding</p>
                <p id='pBody'>398</p>
                <p id='pFooter'>INR</p>
              </Cards>
            </Row>
            <br />
          </Container>
          <OpsNotif1 />
        </div>
      </>
    )
  }
}

export default DashboardMain
