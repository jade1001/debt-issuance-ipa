import React, { useState } from 'react'
import { Modal, Button, ButtonToolbar, Container } from 'react-bootstrap'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function RedempModal() {
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
            style={{ padding: '0', backgroundColor: 'rgb(245,245,245)' }}
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
      </ButtonToolbar>
    </div>
  )
}

export default SignedModal
