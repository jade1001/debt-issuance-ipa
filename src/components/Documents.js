import React, { Component } from 'react'
import {
  Table,
  Dropdown,
  Modal,
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap'
import '../App.css'
import IPACert1 from './IPACert1'
import DocuCert from './DocuCert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckCircle,
  faDownload,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

export class Documents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showApprove: false,
      show: false,
      showRedempModal: false
    }
    this.approveCert = this.approveCert.bind(this)
    this.approved = this.approved.bind(this)
    this.hideApproved = this.hideApproved.bind(this)
    this.hideApproveCert = this.hideApproveCert.bind(this)
    this.hideRedempModal = this.hideRedempModal.bind(this)
    this.setShowRedempModal = this.setShowRedempModal.bind(this)
    this.showRedempApproved = this.showRedempApproved.bind(this)
    this.hideRedempApproved = this.hideRedempApproved.bind(this)
  }

  approveCert() {
    this.setState({ showApprove: true })
  }

  approved() {
    this.setState({ show: true, showApprove: false })
  }

  hideApproved() {
    this.setState({ show: false })
  }
  hideApproveCert() {
    this.setState({ showApprove: false })
  }
  setShowRedempModal() {
    this.setState({ showRedempModal: true })
  }
  hideRedempModal() {
    this.setState({ showRedempModal: false })
  }
  showRedempApproved() {
    this.setState({ showRedempApproveModal: true, showRedempModal: false })
  }
  hideRedempApproved() {
    this.setState({ showRedempApproveModal: false })
  }
  render() {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
      <a
        href='# '
        ref={ref}
        onClick={e => {
          e.preventDefault()
          onClick(e)
        }}
      >
        {children}
      </a>
    ))

    return (
      <>
        <Table
          hover
          size='sm'
          style={{
            width: '70%',
            marginTop: 20,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 'auto'
          }}
        >
          <thead>
            <tr>
              <th>Document Type</th>
              <th>Last Filename</th>
              <th>Status</th>
              <th id='text-center'>Verified</th>
              <th>Signatures</th>
              <th>Last Edited</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Board Resolution</td>
              <td>board_resolution_201906.pdf</td>
              <td>Signed</td>
              <td id='verify'>
                <i className='fa fa-circle' aria-hidden='true'></i>
              </td>
              <td>2 Issuer</td>
              <td>01/06/2019 15:02:56</td>
              <td>
                <Dropdown drop='left'>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id='dropdown-custom-components'
                  >
                    <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ fontSize: 11 }}>
                    <Dropdown.Item
                      eventKey='1'
                      disabled
                      style={{ opacity: 0.5 }}
                    >
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                      View Document
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                      Download
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey='4'
                      style={{ color: '#919191' }}
                      onClick={this.approveCert}
                    >
                      Approve/Reject
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                      Add Comment
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                      View History
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            {/* Modal approve certificate */}
            <Modal
              size='lg'
              show={this.state.showApprove}
              onHide={this.hideApproveCert}
              aria-labelledby='example-modal-sizes-title-lg'
            >
              <Modal.Header
                style={{
                  padding: '0',
                  backgroundColor: 'rgb(245,245,245)',
                  marginTop: '0'
                }}
              >
                <Modal.Title
                  id='example-modal-sizes-title-lg '
                  style={{
                    backgroundColor: 'rgb(245,245,245)',
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '20px',
                    color: 'rgb(58, 77, 150)'
                  }}
                >
                  MonetaGo CP 100D 17/10/2019
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ height: '100%', width: '100%' }}>
                <Container>
                  <div id='approvedData'>
                    <h6
                      style={{
                        color: '#7B7B7B',
                        textAlign: 'center'
                      }}
                    >
                      IPA Certificate
                    </h6>
                    <br />
                    <Row>
                      <Col xs={6} sm={6} lg={6} style={{ textAlign: 'left' }}>
                        <p
                          style={{
                            color: '#7B7B7B',
                            fontSize: '12px',
                            marginBottom: '0'
                          }}
                        >
                          An IPA Certificate has been automatically generated
                          for
                        </p>
                        <b style={{ fontSize: '12px', color: '#33466B' }}>
                          MonetaGo
                        </b>
                      </Col>
                      <Col xs={6} sm={6} lg={6} style={{ textAlign: 'right' }}>
                        <p style={{ marginBottom: '0', fontSize: '12px' }}>
                          Download
                        </p>
                        <Button
                          variant='primary'
                          style={{ backgroundColor: '#33466B' }}
                          type='button'
                          size='sm'
                        >
                          <FontAwesomeIcon icon={faDownload} />
                        </Button>
                      </Col>
                    </Row>
                    <br />
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        padding: '250px 0px 250px 250px',
                        border: '1px solid #000000'
                      }}
                    ></div>

                    <br />

                    <Row>
                      <Col xs={6} sm={6} lg={6} style={{ textAlign: 'left' }}>
                        <Button
                          type='button'
                          style={{ backgroundColor: '#33466B' }}
                          className='btn btn-primary btn-cert'
                          id='cancel-btn'
                          href='/debt-issuance'
                        >
                          Reject
                        </Button>
                      </Col>
                      <Col xs={6} sm={6} lg={6} style={{ textAlign: 'right' }}>
                        <button
                          type='submit'
                          style={{ backgroundColor: '#33466B' }}
                          className='btn btn-primary btn-cert'
                          id='submit-btn'
                          onClick={this.approved}
                        >
                          Approve
                        </button>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </Modal.Body>
              <Modal.Footer style={{ border: 'none' }}></Modal.Footer>
            </Modal>

            {/* Modal approved */}

            <Modal
              size='lg'
              show={this.state.show}
              onHide={this.hideApproved}
              aria-labelledby='contained-modal-title-vcenter'
              centered
            >
              <Modal.Header
                style={{ padding: '0', backgroundColor: 'rgb(245,245,245)' }}
              >
                <Modal.Title
                  id='contained-modal-title-vcenter '
                  style={{
                    backgroundColor: 'rgb(245,245,245)',
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '20px',
                    color: 'rgb(58, 77, 150)'
                  }}
                >
                  MonetaGo CP 100D 17/10/2019
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ paddingTop: '5px' }}>
                <Container>
                  <div id='approvedData'>
                    <h3 style={{ fontWeight: 'normal' }}>Approved</h3>
                    <br />
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ fontSize: '80px' }}
                    />
                    <br />
                    <br />
                    <p>The IPA Certificate is ready for signing</p>
                  </div>
                </Container>
              </Modal.Body>
              <Modal.Footer style={{ border: 'none' }}></Modal.Footer>
            </Modal>
            <tr>
              <td style={{ border: 'none' }}>RBI Report</td>
              <td style={{ border: 'none' }}>rbi_cp_100d_20191017.pdf</td>
              <td style={{ border: 'none' }}>Signed</td>
              <td id='verify' style={{ border: 'none' }}>
                <i className='fa fa-circle' aria-hidden='true'></i>
              </td>
              <td style={{ border: 'none' }}>2 Issuer</td>
              <td style={{ border: 'none' }}>08/07/2019 10:58:22</td>
              <td style={{ border: 'none' }}>
                <Dropdown drop='left'>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id='dropdown-custom-components'
                  >
                    <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ fontSize: 11 }}>
                    <Dropdown.Item
                      eventKey='1'
                      disabled
                      style={{ opacity: 0.5 }}
                    >
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                      View Document
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                      Download
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey='4'
                      style={{ color: '#919191' }}
                      onClick={this.approveCert}
                    >
                      Approve/Reject
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                      Add Comment
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                      View History
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td style={{ border: 'none' }}>IPA Declaration</td>
              <td style={{ border: 'none' }}>ipadec_cp_100d_20191017.pdf</td>
              <td style={{ border: 'none' }}>Signed</td>
              <td id='verify' style={{ border: 'none' }}>
                <i className='fa fa-circle' aria-hidden='true'></i>
              </td>
              <td style={{ border: 'none' }}>2 Issuer</td>
              <td style={{ border: 'none' }}>08/07/2019 10:58:22</td>
              <td style={{ border: 'none' }}>
                <Dropdown drop='left'>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id='dropdown-custom-components'
                  >
                    <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ fontSize: 11 }}>
                    <Dropdown.Item
                      eventKey='1'
                      disabled
                      style={{ opacity: 0.5 }}
                    >
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                      View Document
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                      Download
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey='4'
                      style={{ color: '#919191' }}
                      onClick={this.approveCert}
                    >
                      Approve/Reject
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                      Add Comment
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                      View History
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td style={{ border: 'none' }}>Letter Of Offer</td>
              <td style={{ border: 'none' }}>loo_cp_100d_20191017.pdf</td>
              <td style={{ border: 'none' }}>Signed</td>
              <td id='verify' style={{ border: 'none' }}>
                <i className='fa fa-circle' aria-hidden='true'></i>
              </td>
              <td style={{ border: 'none' }}>2 Issuer</td>
              <td style={{ border: 'none' }}>08/07/2019 10:58:22</td>
              <td style={{ border: 'none' }}>
                <Dropdown drop='left'>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id='dropdown-custom-components'
                  >
                    <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ fontSize: 11 }}>
                    <Dropdown.Item
                      eventKey='1'
                      disabled
                      style={{ opacity: 0.5 }}
                    >
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                      View Document
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                      Download
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey='4'
                      style={{ color: '#919191' }}
                      onClick={this.approveCert}
                    >
                      Approve/Reject
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                      Add Comment
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                      View History
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td style={{ border: 'none' }}>DCN-Mutual Fund Of India</td>
              <td style={{ border: 'none' }}>dcn_mfi1_cp_100d_20191017.pdf</td>
              <td style={{ border: 'none' }}>Signed</td>
              <td id='verify' style={{ border: 'none' }}>
                <i className='fa fa-circle' aria-hidden='true'></i>
              </td>
              <td style={{ border: 'none' }}>1 Investor, 2 Issuer</td>
              <td style={{ border: 'none' }}>08/07/2019 11:10:39</td>
              <td style={{ border: 'none' }}>
                <Dropdown drop='left'>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id='dropdown-custom-components'
                  >
                    <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ fontSize: 11 }}>
                    <Dropdown.Item
                      eventKey='1'
                      disabled
                      style={{ opacity: 0.5 }}
                    >
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                      View Document
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                      Download
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey='4'
                      style={{ color: '#919191' }}
                      onClick={this.approveCert}
                    >
                      Approve/Reject
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                      Add Comment
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                      View History
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td style={{ border: 'none' }}>Stamp Duty Receipt</td>
              <td style={{ border: 'none' }}>eSBTR.pdf</td>
              <td style={{ border: 'none' }}>Uploaded</td>
              <td id='verify' style={{ border: 'none' }}>
                <i className='fa fa-circle' aria-hidden='true'></i>
              </td>
              <td style={{ border: 'none' }}>1 Investor, 2 Issuer</td>
              <td style={{ border: 'none' }}>08/07/2019 11:10:39</td>
              <td style={{ border: 'none' }}>
                <Dropdown drop='left'>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id='dropdown-custom-components'
                  >
                    <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ fontSize: 11 }}>
                    <Dropdown.Item
                      eventKey='1'
                      disabled
                      style={{ opacity: 0.5 }}
                    >
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                      View Document
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                      Download
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey='4'
                      style={{ color: '#919191' }}
                      onClick={this.approveCert}
                    >
                      Approve/Reject
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                      Add Comment
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                      View History
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td style={{ border: 'none' }}>IPA Certificate</td>
              <td style={{ border: 'none' }}>ipacert_cp_100d_20191017.pdf</td>
              <td style={{ border: 'none' }}>Pending Approval</td>
              <td id='verify' style={{ border: 'none' }}>
                <i className='fa fa-circle' aria-hidden='true'></i>
              </td>
              <td style={{ border: 'none' }}>None</td>
              <td style={{ border: 'none' }}>08/07/2019 11:10:39</td>
              <td style={{ border: 'none' }}>
                <Dropdown drop='left'>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id='dropdown-custom-components'
                  >
                    <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ fontSize: 11 }}>
                    <Dropdown.Item
                      eventKey='1'
                      disabled
                      style={{ opacity: 0.5 }}
                    >
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                      View Document
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                      Download
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey='4'
                      style={{ color: '#919191' }}
                      onClick={this.approveCert}
                    >
                      Approve/Reject
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                      Add Comment
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                      View History
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td style={{ border: 'none' }}>Redemption Certificate</td>
              <td style={{ border: 'none' }}>redeemcert_cp_68d_20190907.pdf</td>
              <td style={{ border: 'none' }}>Pending Approval</td>
              <td id='verify' style={{ border: 'none' }}></td>
              <td style={{ border: 'none' }}>None</td>
              <td style={{ border: 'none' }}>09/07/2019 12:12:08</td>
              <td style={{ border: 'none' }}>
                <Dropdown drop='left'>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id='dropdown-custom-components'
                  >
                    <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ fontSize: 11 }}>
                    <Dropdown.Item
                      eventKey='1'
                      disabled
                      style={{ opacity: 0.5 }}
                    >
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                      View Document
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                      Download
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey='4'
                      style={{ color: '#919191' }}
                      onClick={this.setShowRedempModal}
                    >
                      Approve/Reject
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                      Add Comment
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                      View History
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            {/* Modal Redemp cert */}
            <Modal
              size='lg'
              show={this.state.showRedempModal}
              onHide={this.hideRedempModal}
              aria-labelledby='example-modal-sizes-title-lg'
            >
              <Modal.Header
                style={{
                  padding: '0',
                  backgroundColor: 'rgb(245,245,245)',
                  marginTop: '0'
                }}
              >
                <Modal.Title
                  id='example-modal-sizes-title-lg '
                  style={{
                    backgroundColor: 'rgb(245,245,245)',
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '20px',
                    color: 'rgb(58, 77, 150)'
                  }}
                >
                  MonetaGo CP 100D 17/10/2019
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ height: '100%', width: '100%' }}>
                <Container>
                  <div id='approvedData'>
                    <h6
                      style={{
                        color: '#7B7B7B',
                        textAlign: 'center'
                      }}
                    >
                      Redemption Certificate
                    </h6>
                    <br />
                    <Row>
                      <Col xs={6} sm={6} lg={6} style={{ textAlign: 'left' }}>
                        <p
                          style={{
                            color: '#7B7B7B',
                            fontSize: '12px',
                            marginBottom: '0'
                          }}
                        >
                          An Redemption Certificate has been automatically
                          generated for
                        </p>
                        <b style={{ fontSize: '12px' }}>MonetaGo</b>
                      </Col>
                      <Col xs={6} sm={6} lg={6} style={{ textAlign: 'right' }}>
                        <p style={{ marginBottom: '0', fontSize: '12px' }}>
                          Download
                        </p>
                        <Button variant='primary' type='button' size='sm'>
                          <FontAwesomeIcon icon={faDownload} />
                        </Button>
                      </Col>
                    </Row>
                    <br />
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        padding: '250px 0px 250px 250px',
                        border: '1px solid #000000'
                      }}
                    ></div>
                    <br />

                    <Row>
                      <Col xs={6} sm={6} lg={6} style={{ textAlign: 'left' }}>
                        <Button
                          type='button'
                          className='btn btn-primary btn-cert'
                          id='cancel-btn'
                          href='/debt-issuance'
                        >
                          Reject
                        </Button>
                      </Col>
                      <Col xs={6} sm={6} lg={6} style={{ textAlign: 'right' }}>
                        <Button
                          type='submit'
                          className='btn btn-primary btn-cert'
                          id='submit-btn'
                          onClick={this.showRedempApproved}
                        >
                          Approve
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </Modal.Body>
              <Modal.Footer style={{ border: 'none' }}></Modal.Footer>
            </Modal>
            {/* Redemp approved */}
            <Modal
              size='lg'
              show={this.state.showRedempApproveModal}
              onHide={this.hideRedempApproved}
              aria-labelledby='contained-modal-title-vcenter'
              centered
            >
              <Modal.Header
                style={{ padding: '0', backgroundColor: 'rgb(245,245,245)' }}
              >
                <Modal.Title
                  id='contained-modal-title-vcenter'
                  style={{
                    backgroundColor: 'rgb(245,245,245)',
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '20px',
                    color: 'rgb(58, 77, 150)'
                  }}
                >
                  MonetaGo CP 100D 17/10/2019
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ paddingTop: '5px' }}>
                <Container>
                  <div id='approvedData'>
                    <h3 style={{ fontWeight: 'normal' }}>Approved</h3>
                    <br />
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ fontSize: '80px' }}
                    />
                    <br />
                    <br />
                    <p>The Redemption Certificate is ready for signing</p>
                  </div>
                </Container>
              </Modal.Body>
              <Modal.Footer style={{ border: 'none' }}></Modal.Footer>
            </Modal>
          </tbody>
        </Table>
        <DocuCert />
      </>
    )
  }
}
