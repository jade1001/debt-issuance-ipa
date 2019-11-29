import React, { useState } from 'react'
import {
  Modal,
  Button,
  ButtonToolbar,
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function DocuCert() {
  const [lgShow, setLgShow] = useState(false)
  const [name, setName] = useState('')
  const [btnDisable, setBtnDisable] = useState(true)
  const [showSigned, setShowSigned] = useState(false)
  return (
    <div>
      <ButtonToolbar style={{ justifyContent: 'center', marginTop: 20 }}>
        <Button
          size='sm'
          onClick={() => {
            setLgShow(true)
            setBtnDisable('disabled')
          }}
          style={{
            backgroundColor: '#33466B',
            border: 'none',
            fontSize: '10px',
            paddingLeft: 25,
            paddingRight: 25,
            paddingTop: 5,
            paddingBottom: 5
          }}
        >
          Generate IPA Certificate and Submit for Review
        </Button>
        <Modal
          size='lg'
          show={lgShow}
          onHide={() => {
            setLgShow(false)
            setName('')
          }}
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
                  eSign (1 Document)
                </h6>
                <br />
                <Row>
                  <Col xs={6} sm={6} lg={6} style={{ textAlign: 'left' }}>
                    <b style={{ fontSize: '12px', color: '#33466B' }}>
                      IPA Certificate
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
                <p
                  style={{
                    textAlign: 'left',
                    fontSize: '14px',
                    color: '#182E58'
                  }}
                >
                  Document 1 of 1
                </p>
                <br />
                <Row>
                  <Col xs={5} lg={11}>
                    <p style={{ textAlign: 'right', fontSize: '12px' }}>
                      I have read and agree to sign this document digitally
                    </p>
                  </Col>
                  <Col xs={7} lg={1}>
                    <Form.Check
                      aria-label='option 1'
                      onChange={() => {
                        setName('Kashinath Katakdhond')
                        setBtnDisable(false)
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} sm={6} lg={2} style={{ textAlign: 'left' }}>
                    <button
                      type='button'
                      className='btn btn-primary'
                      style={{ marginTop: '31%', backgroundColor: '#33466B' }}
                      onClick={() => {
                        setLgShow(false)
                        setName('')
                      }}
                    >
                      Cancel
                    </button>
                  </Col>
                  <Col xs={6} lg={8}>
                    <Form style={{ textAlign: 'right' }}>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Label
                          style={{
                            fontSize: '12px',
                            color: 'rgb(58, 77, 150)'
                          }}
                        >
                          Please type your full name to sign the documents
                        </Form.Label>
                        <Form.Control
                          value={name}
                          type='text'
                          size='sm'
                          style={{
                            width: '60%',
                            float: 'right',
                            color: 'black'
                          }}
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col
                    xs={3}
                    sm={6}
                    lg={2}
                    style={{ textAlign: 'right', marginTop: '4%' }}
                  >
                    <Button
                      type='submit'
                      style={{ backgroundColor: '#33466B' }}
                      className='btn btn-primary btn-cert'
                      id='submit-btn'
                      onClick={() => {
                        setLgShow(false)
                        setShowSigned(true)
                        setName('')
                      }}
                      disabled={btnDisable}
                    >
                      Sign Docs
                    </Button>
                  </Col>
                </Row>
              </div>
            </Container>
          </Modal.Body>
          <Modal.Footer style={{ border: 'none' }}></Modal.Footer>
        </Modal>
        <Modal
          size='lg'
          show={showSigned}
          onHide={() => setShowSigned(false)}
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
                <h3 style={{ fontWeight: 'normal' }}>Success</h3>
                <br />
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ fontSize: '80px' }}
                />
                <br />
                <br />
                <p>1 Document has been successfully signed</p>
              </div>
            </Container>
          </Modal.Body>
          <Modal.Footer style={{ border: 'none' }}></Modal.Footer>
        </Modal>
      </ButtonToolbar>
    </div>
  )
}

export default DocuCert
