import React, { Component, useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  InputGroup,
  Modal,
  Tab,
  Table,
  Tabs,
  Nav
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload,
  faSearch,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import JSONData from './data.json'
import '../App.css'
import MainModal from './MainModal.js'
import { CreditLimits } from './CreditLimits'
import { MaturityData } from './MaturityData'
import { Allocations } from './Allocations'
import { Documents } from './Documents'
import { Settlement } from './Settlement'
import TranchesData from './TranchesData'

export function DebtIssuance() {
  const [jsonData, setJsonData] = useState(JSONData)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchResults, setSearchResults] = React.useState([])
  const [lgShow, setLgShow] = useState(false)

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    // console.log(searchTerm)
    // setSearchResults(searchTerm)
    // const filtered = jsonData.filter(data =>
    // 	data.name.toLowerCase().includes(searchTerm.toLowerCase())
    // )
    // setSearchResults(filtered)
  }

  useEffect(() => {
    const filtered = jsonData.filter(data =>
      data.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(filtered)
  }, [searchTerm])

  return (
    <Container id='headerId' className='mt-3'>
      <Row>
        <Col xs>
          <p id='pHeader'>Commercial Paper</p>
          <hr style={{ marginTop: -17 }} />
        </Col>
      </Row>

      <Tab.Container defaultActiveKey='maturities'>
        <Row>
          <Col sm={2} className='sideMenu'>
            <Nav className='flex-column bg-white'>
              <Nav.Item>
                <Nav.Link eventKey='maturities'>
                  Maturities (ISIN) &nbsp;
                  <FontAwesomeIcon icon={faChevronRight} id='iconChev' />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='tranches' className='debtTabs' disabled>
                  Tranches &nbsp;
                  <FontAwesomeIcon icon={faChevronRight} id='iconChev' />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='allocations' className='debtTabs' disabled>
                  Allocations &nbsp;
                  <FontAwesomeIcon icon={faChevronRight} id='iconChev' />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='startnew' className='debtTabs' disabled>
                  + Start New
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey='maturities'>
                <Row>
                  <Col xs={12} md={6} className='m-auto icon-content'>
                    <FontAwesomeIcon icon={faDownload} id='iconDL' />
                  </Col>
                  <Col xs={12} md={6} id='colSearch'>
                    <Form inline onSubmit={handleSubmit}>
                      <FormControl
                        type='text'
                        className='mr-sm-2 search-box'
                        value={searchTerm}
                        onChange={handleChange}
                      />
                      <Button
                        id='btnSearch'
                        variant='secondary'
                        size='sm'
                        type='submit'
                      >
                        <FontAwesomeIcon icon={faSearch} id='iconSearch' />
                      </Button>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                </Row>
                <Table
                  responsive
                  size='sm'
                  id='tableId'
                  className='table table-hover table-content mt-3 table-borderless'
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>ISIN</th>
                      <th>Status</th>
                      <th>Total Redemption Value</th>
                      <th>Tenor</th>
                      <th>Maturity Date</th>
                      <th>Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((n, i) => (
                      <tr
                        key={i}
                        onClick={() => setLgShow(true)}
                        style={{
                          cursor: 'pointer',
                          color: '#182E58',
                          lineHeight: '100%',
                          fontSize: 11,
                          fontWeight: 650
                        }}
                      >
                        <td style={{ paddingTop: 10, paddingBottom: 10 }}>
                          {n.name}
                        </td>
                        <td style={{ paddingTop: 10, paddingBottom: 10 }}>
                          {n.isin}
                        </td>
                        <td style={{ paddingTop: 10, paddingBottom: 10 }}>
                          {n.status}
                        </td>
                        <td style={{ paddingTop: 10, paddingBottom: 10 }}>
                          {n.trvalue}
                        </td>
                        <td style={{ paddingTop: 10, paddingBottom: 10 }}>
                          {n.tenor}
                        </td>
                        <td style={{ paddingTop: 10, paddingBottom: 10 }}>
                          {n.mdate}
                        </td>
                        <td style={{ paddingTop: 10, paddingBottom: 10 }}>
                          {n.created}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane eventKey='tranches'>
                <h1>Tranches</h1>
              </Tab.Pane>
              <Tab.Pane eventKey='allocations'>
                <h1>Allocations</h1>
              </Tab.Pane>
              <Tab.Pane eventKey='startnew'>
                <h1>Start new</h1>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      <Modal
        size='xl'
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby='example-modal-sizes-title-xl'

        // style={{ backgroundColor: 'green' }}
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
        <Modal.Body
          style={{
            'max-height': 'calc(100vh - 210px)',
            'overflow-y': 'auto',
            height: '350px'
          }}
        >
          <Tab.Container id='left-tabs-example' defaultActiveKey='maturity'>
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
                >
                  Maturity Data
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey='tranches'
                  style={{ padding: '0', margin: '0 16px' }}
                >
                  Tranches
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey='allocation'
                  style={{ padding: '0', margin: '0 16px' }}
                >
                  Allocations
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey='credit'
                  style={{ padding: '0', margin: '0 16px' }}
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
                >
                  Service Provider
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey='audit'
                  style={{ padding: '0', margin: '0 16px' }}
                >
                  Audit Trail
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey='settlement'
                  style={{ padding: '0', margin: '0 0 0 16px' }}
                >
                  Settlement
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey='maturity'>
                <MaturityData />
              </Tab.Pane>
              <Tab.Pane eventKey='tranches'>
                <TranchesData />
              </Tab.Pane>
              <Tab.Pane eventKey='allocation'>
                <Allocations />
              </Tab.Pane>
              <Tab.Pane eventKey='credit'>
                <CreditLimits />
              </Tab.Pane>
              <Tab.Pane eventKey='document'>
                <Documents />
              </Tab.Pane>
              <Tab.Pane eventKey='service'></Tab.Pane>
              <Tab.Pane eventKey='audit'></Tab.Pane>
              <Tab.Pane eventKey='settlement'>
                <Settlement />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    </Container>
  )
}

// export default DebtIssuance

// export class DebtIssuance extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       search: '',
//       jsonData: JSONData,
//       bool: true
//     }
//   }
//   updateSearch(event) {
//     this.setState({
//       search: event.target.value.substr(0, 20)
//     })
//   }

//   render() {
//     // const show = this.props.show
//     let filtered = this.state.jsonData.filter(data => {
//       return (
//         data.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
//       )
//     })
//     return (
//       <div>
//         <Container id='headerId'>
//           <Row style={{ marginTop: 20 }}>
//             <Col xs>
//               <p id='pHeader'>Commercial Paper</p>
//               <hr style={{ marginTop: -17 }} />
//             </Col>
//           </Row>
//         </Container>
//         <Container id='sideBar'>
//           <Col id='fMenu'>
//             Maturities (ISIN) &nbsp;
//             <FontAwesomeIcon icon={faChevronRight} />
//           </Col>
//           <Col id='dMenu'>
//             Tranches &nbsp;
//             <FontAwesomeIcon icon={faChevronRight} />
//           </Col>
//           <Col id='dMenu'>
//             Allocations &nbsp;
//             <FontAwesomeIcon icon={faChevronRight} />
//           </Col>
//           <Col id='dMenu'>+ Start New</Col>
//         </Container>
//         <Container className='App container' id='contFunctions'>
//           <Row>
//             <Form inline id='formF'>
//               <Col sm={4} style={{ marginLeft: 35, marginTop: 10 }}>
//                 <FontAwesomeIcon icon={faDownload} id='iconDL' />
//               </Col>
//               <Col id='colSearch' sm={4} align='right'>
//                 <FormControl
//                   id='searchBox'
//                   type='text'
//                   className=' mr-sm-2'
//                   onChange={this.updateSearch.bind(this)}
//                 />
//                 <Button
//                   id='btnSearch'
//                   variant='secondary'
//                   size='sm'
//                   type='submit'
//                 >
//                   <FontAwesomeIcon icon={faSearch} id='iconSearch' />
//                 </Button>
//               </Col>
//             </Form>
//           </Row>

//           <table
//             id='tableId'
//             responsive
//             className='table table-hover table-content'
//           >
//             <thead>
//               <tr style={{ lineHeight: '100%' }}>
//                 <th scope='col' style={{ fontWeight: 'bold' }}>
//                   Name
//                 </th>
//                 <th scope='col' style={{ fontWeight: 'bold' }}>
//                   ISIN
//                 </th>
//                 <th scope='col' style={{ fontWeight: 'bold' }}>
//                   Status
//                 </th>
//                 <th scope='col' style={{ fontWeight: 'bold' }}>
//                   Total Redemption Value
//                 </th>
//                 <th scope='col' style={{ fontWeight: 'bold' }}>
//                   Tenor
//                 </th>
//                 <th scope='col' style={{ fontWeight: 'bold' }}>
//                   Maturity Date
//                 </th>
//                 <th scope='col' style={{ fontWeight: 'bold' }}>
//                   Created
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.map((n, i) => (
//                 <tr
//                   key={i}
//                   data-toggle='modal'
//                   data-target='#myModal'
//                   id='tRow'
//                   style={{
//                     cursor: 'pointer',
//                     color: '#182E58',
//                     lineHeight: '100%'
//                   }}
//                   // onClick={console.log(this)}
//                 >
//                   <td style={{ border: 'none' }}>
//                     <span>{n.name}</span>
//                   </td>
//                   <td style={{ border: 'none' }}>
//                     <span>{n.isin}</span>
//                   </td>
//                   <td style={{ border: 'none' }}>
//                     <span>{n.status}</span>
//                   </td>
//                   <td style={{ border: 'none' }}>
//                     <span>{n.trvalue}</span>
//                   </td>
//                   <td style={{ border: 'none' }}>
//                     <span>{n.tenor}</span>
//                   </td>
//                   <td style={{ border: 'none' }}>
//                     <span>{n.mdate}</span>
//                   </td>
//                   <td style={{ border: 'none' }}>
//                     <span>{n.created}</span>
//                   </td>
//                   <MainModal />
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </Container>
//       </div>
//     )
//   }
// }

// // export default DebtIssuance
