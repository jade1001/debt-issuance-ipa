import React, { useState } from 'react'
import {
  Modal,
  Button,
  ButtonToolbar,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function IPACert1() {
  const [lgShow, setLgShow] = useState(false)
  return (
    <div>
      <ButtonToolbar>
        <Button onClick={() => setLgShow(true)}>Large modal</Button>
        <Modal
          size='lg'
          show={lgShow}
          onHide={() => setLgShow(false)}
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
                      An Redemption Certificate has been automatically generated
                      for
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
                    <button
                      type='button'
                      className='btn btn-primary btn-cert'
                      id='cancel-btn'
                    >
                      Reject
                    </button>
                  </Col>
                  <Col xs={6} sm={6} lg={6} style={{ textAlign: 'right' }}>
                    <button
                      type='submit'
                      className='btn btn-primary btn-cert'
                      id='submit-btn'
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
      </ButtonToolbar>
    </div>
  )
}

export default IPACert1
