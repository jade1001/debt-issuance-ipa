import React, { Component } from 'react'
import { Container, Table, Form, Dropdown } from 'react-bootstrap'
import JSONData from './documents.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

class SampDocu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jsonData: JSONData
    }
  }
  render() {
    let docu = this.state.jsonData

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
      <Container>
        <Table>
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
            {docu.map((n, i) => (
              <tr
                key={i}
                data-toggle='modal'
                data-target='#myModal'
                id='tRow'
                style={{
                  cursor: 'pointer',
                  color: '#182E58',
                  lineHeight: '70%'
                }}
              >
                <td style={{ border: 'none' }}>
                  <span>{n.docutype}</span>
                </td>
                <td style={{ border: 'none' }}>
                  <span>{n.lastfilename}</span>
                </td>
                <td style={{ border: 'none' }}>
                  <span>{n.status}</span>
                </td>
                <td style={{ border: 'none', alignContent: 'center' }}>
                  <Form>
                    {['radio'].map(type => (
                      <div key={`default-${type}`} className='mb-3'>
                        <Form.Check type={type} id={`default-${type}`} />
                      </div>
                    ))}
                  </Form>
                </td>
                <td style={{ border: 'none' }}>
                  <span>{n.Signatures}</span>
                </td>
                <td style={{ border: 'none' }}>
                  <span>{n.lastedited}</span>
                </td>
                <td style={{ border: 'none' }}>
                  <span>
                    <Dropdown drop='left'>
                      <Dropdown.Toggle
                        as={CustomToggle}
                        id='dropdown-custom-components'
                      >
                        <FontAwesomeIcon icon={faEllipsisV} />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey='1' disabled>
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey='2'>
                          View Document
                        </Dropdown.Item>
                        <Dropdown.Item eventKey='3'>Download</Dropdown.Item>
                        <Dropdown.Item eventKey='4'>
                          Approve/Reject
                        </Dropdown.Item>
                        <Dropdown.Item eventKey='5'>Add Comment</Dropdown.Item>
                        <Dropdown.Item eventKey='6'>View History</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    )
  }
}

export default SampDocu
