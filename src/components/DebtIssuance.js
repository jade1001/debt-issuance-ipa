import React, { Component, useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Modal,
  Tab,
  Tabs
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

export function DebtIssuance() {
  const [jsonData, setJsonData] = useState(JSONData)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchResults, setSearchResults] = React.useState([])
  const [lgShow, setLgShow] = useState(false)

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const filtered = jsonData.filter(data =>
      data.name.toLowerCase().includes(searchTerm)
    )
    setSearchResults(filtered)
  }, [searchTerm])

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
                value={searchTerm}
                onChange={handleChange}
                // onChange={console.log(search)}
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
            {searchResults.map((n, i) => (
              <tr
                key={i}
                id='tRow'
                style={{
                  cursor: 'pointer',
                  color: '#182E58',
                  lineHeight: '100%',
                  fontSize: 10,
                  fontWeight: 650
                }}
                onClick={() => setLgShow(true)}
              >
                <td style={{ border: 'none' }}>{n.name}</td>
                <td style={{ border: 'none' }}>{n.isin}</td>
                <td style={{ border: 'none' }}>{n.status}</td>
                <td style={{ border: 'none' }}>{n.trvalue}</td>
                <td style={{ border: 'none' }}>{n.tenor}</td>
                <td style={{ border: 'none' }}>{n.mdate}</td>
                <td style={{ border: 'none' }}>{n.created}</td>
              </tr>
            ))}
            <Modal
              size='xl'
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby='example-modal-sizes-title-lg'
            >
              <Modal.Header
                style={{
                  padding: '0',
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
                    fontSize: '0.5rem',
                    textAlign: 'center',
                    margin: '0',
                    margin: 'auto',
                    width: '10%',
                    textDecoration: 'none'
                  }}
                >
                  Quick Startup >
                </a>
              </Modal.Header>
              <Modal.Body>
                <Tabs
                  defaultActiveKey='maturity data'
                  transition={false}
                  id='noanim-tab-example'
                  className='justify-content-center'
                  as='div'
                  style={{ width: '668.8px', margin: 'auto' }}
                >
                  <Tab eventKey='maturity data' title='Maturity Data'>
                    <MaturityData />
                  </Tab>
                  <Tab eventKey='tranches' title='Tranches'>
                    Tranches
                  </Tab>
                  <Tab eventKey='allocations' title='Allocations'>
                    <Allocations />
                  </Tab>
                  <Tab eventKey='credit' title='Credit Limits'>
                    <CreditLimits />
                  </Tab>
                  <Tab eventKey='documents' title='Documents'>
                    <Documents />
                  </Tab>
                  <Tab eventKey='service' title='Service'>
                    Service
                  </Tab>
                  <Tab eventKey='audit' title='Audit'>
                    Audit
                  </Tab>
                </Tabs>
              </Modal.Body>
              <Modal.Footer
                style={{ border: 'none', height: '150px' }}
              ></Modal.Footer>
            </Modal>
          </tbody>
        </table>
      </Container>
    </div>
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
