import React, { Component } from 'react'
import MainNavBar from './MainNavBar'
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faSearch } from '@fortawesome/free-solid-svg-icons'
import JSONData from './data.json'
import '../App.css'

class DebtIssuance extends Component {
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
            height: 1070,
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
            <Col style={{ marginLeft: 35, marginTop: 10 }}>
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
            <Col align='right' style={{ marginLeft: '23%' }}>
              <Form inline>
                <FormControl
                  type='text'
                  className=' mr-sm-2'
                  style={{ width: 280, height: 30 }}
                  onChange={this.updateSearch.bind(this)}
                />
                <Button
                  variant='secondary'
                  size='sm'
                  type='submit'
                  style={{ height: 30, width: 30, backgroundColor: '#182e58' }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>

        <table
          className='table table-hover table-content'
          style={{
            fontSize: 12,
            width: '75%'
          }}
        >
          <thead>
            <tr>
              <th scope='col' style={{ fontWeight: 'bold' }} fixed>
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
                style={{ cursor: 'pointer' }}
              >
                <td>
                  <span>{n.name}</span>
                </td>
                <td>
                  <span>{n.isin}</span>
                </td>
                <td>
                  <span>{n.status}</span>
                </td>
                <td>
                  <span>{n.trvalue}</span>
                </td>
                <td>
                  <span>{n.tenor}</span>
                </td>
                <td>
                  <span>{n.mdate}</span>
                </td>
                <td>
                  <span>{n.created}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default DebtIssuance
