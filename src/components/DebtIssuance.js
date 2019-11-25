import React, { Component } from 'react'
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload,
  faSearch,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import JSONData from './data.json'
import '../App.css'
import MainModal from './MainModal.js'

export class DebtIssuance extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      jsonData: JSONData
    }
  }
  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20)
    })
  }

  render() {
    let filtered = this.state.jsonData.filter(data => {
      return (
        data.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      )
    })
    return (
      <div>
        <Container id='headerId'>
          <Row style={{ marginTop: 20 }}>
            <Col xs>
              <p id='pHeader'>Commercial Paper</p>
              <hr style={{ marginTop: -17 }} />
            </Col>
          </Row>
        </Container>
        <Container id='sideBar'>
          <Col id='fMenu'>
            Maturities (ISIN) &nbsp;
            <FontAwesomeIcon icon={faChevronRight} />
          </Col>
          <Col id='dMenu'>
            Tranches &nbsp;
            <FontAwesomeIcon icon={faChevronRight} />
          </Col>
          <Col id='dMenu'>
            Allocations &nbsp;
            <FontAwesomeIcon icon={faChevronRight} />
          </Col>
          <Col id='dMenu'>+ Start New</Col>
        </Container>
        <Container className='App container' id='contFunctions'>
          <Row>
            <Form inline id='formF'>
              <Col sm={4} style={{ marginLeft: 35, marginTop: 10 }}>
                <FontAwesomeIcon icon={faDownload} id='iconDL' />
              </Col>
              <Col id='colSearch' sm={4} align='right'>
                <FormControl
                  id='searchBox'
                  type='text'
                  className=' mr-sm-2'
                  onChange={this.updateSearch.bind(this)}
                />
                <Button
                  id='btnSearch'
                  variant='secondary'
                  size='sm'
                  type='submit'
                >
                  <FontAwesomeIcon icon={faSearch} id='iconSearch' />
                </Button>
              </Col>
            </Form>
          </Row>

          <table
            id='tableId'
            responsive
            className='table table-hover table-content'
          >
            <thead>
              <tr style={{ lineHeight: '100%' }}>
                <th scope='col' style={{ fontWeight: 'bold' }}>
                  Name
                </th>
                <th scope='col' style={{ fontWeight: 'bold' }}>
                  ISIN
                </th>
                <th scope='col' style={{ fontWeight: 'bold' }}>
                  Status
                </th>
                <th scope='col' style={{ fontWeight: 'bold' }}>
                  Total Redemption Value
                </th>
                <th scope='col' style={{ fontWeight: 'bold' }}>
                  Tenor
                </th>
                <th scope='col' style={{ fontWeight: 'bold' }}>
                  Maturity Date
                </th>
                <th scope='col' style={{ fontWeight: 'bold' }}>
                  Created
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((n, i) => (
                <tr
                  key={i}
                  data-toggle='modal'
                  data-target='#myModal'
                  id='tRow'
                  style={{
                    cursor: 'pointer',
                    color: '#182E58',
                    lineHeight: '100%'
                  }}
                >
                  <MainModal />
                  <td style={{ border: 'none' }}>
                    <span>{n.name}</span>
                  </td>
                  <td style={{ border: 'none' }}>
                    <span>{n.isin}</span>
                  </td>
                  <td style={{ border: 'none' }}>
                    <span>{n.status}</span>
                  </td>
                  <td style={{ border: 'none' }}>
                    <span>{n.trvalue}</span>
                  </td>
                  <td style={{ border: 'none' }}>
                    <span>{n.tenor}</span>
                  </td>
                  <td style={{ border: 'none' }}>
                    <span>{n.mdate}</span>
                  </td>
                  <td style={{ border: 'none' }}>
                    <span>{n.created}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </div>
    )
  }
}

// export default DebtIssuance
