import React, { useState } from 'react'
import {
  Table,
  Dropdown,
  Row,
  Col,
  Form,
  ButtonToolbar,
  Button,
  Tab,
  Nav,
  Container
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Record from './Record'

function Redemption2(props) {
  const [button, setButton] = useState('')
  const [record, setRecord] = useState()
  const [text, setText] = useState('hidden')
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
      {record ? (
        <Record />
      ) : (
        <Table
          responsive
          hover
          size='sm'
          className='overflow-hidden table-borderless redemption2'
        >
          <thead>
            <tr>
              <th>Investor</th>
              <th>Type</th>
              <th>Record Date</th>
              <th id='text-left'>Known</th>
              <th id='text-left'>Quantity</th>
              <th id='text-left'>Redemption Value</th>
              <th id='text-center'>Settled</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mutual Fund Of India</td>
              <td>10</td>
              <td>03/05/2019</td>
              <td id='text-left'>
                <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
              </td>
              <td id='text-left'>6,000</td>
              <td id='text-left'>3,00,00,00.000 INR</td>
              <td id='verify'>
                <i className='fa fa-circle' aria-hidden='true'></i>
              </td>
              <td>
                <Dropdown drop='left'>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id='dropdown-custom-components'
                  >
                    <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ fontSize: 10 }}>
                    <Dropdown.Item
                      disabled
                      eventKey='1'
                      style={{ opacity: 0.5 }}
                    >
                      Actions
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                      View ID Record
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                      View Full Details
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey='4'
                      style={{ color: '#919191' }}
                      onClick={() => props.func(3)}
                    >
                      Record Settlement
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                      Resend Notice
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>Capital Partners</td>
              <td>10</td>
              <td>03/05/2019</td>
              <td id='text-left'>
                <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
              </td>
              <td id='border-b-1'>4,000</td>
              <td id='border-b-1'>2,00,00,00.000 INR</td>
              <td id='verify'>
                <i className='fa fa-circle' aria-hidden='true'></i>
              </td>
              <td>
                <Dropdown drop='left'>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id='dropdown-custom-components'
                  >
                    <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ fontSize: 10 }}>
                    <Dropdown.Item
                      disabled
                      eventKey='1'
                      style={{ opacity: 0.5 }}
                    >
                      Actions
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                      View ID Record
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                      View Full Details
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='4' style={{ color: '#919191' }}>
                      Record Settlement
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                      Resend Notice
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr id='border-b-0'>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td id='text-left'>10,000</td>
              <td id='text-left'>5,00,00,00.000 INR</td>
              <td></td>
            </tr>
            <tr id='border-b-0'>
              <td></td>
              <td></td>
              <td></td>
              <td id='text-right'></td>
              <td id='text-right'></td>
              <td></td>
              <td></td>
            </tr>
            <tr id='border-b-0' style={{ height: 150 }}>
              <td></td>
              <td></td>
              <td></td>
              <td id='text-right'></td>
              <td id='text-right'></td>
              <td id='text-center'>
                {/*<Button variant="primary">Finalise</Button>*/}
                <Button
                  size='sm'
                  style={{ visibility: button, backgroundColor: '#33466B' }}
                  onClick={() => {
                    setText('')
                    setButton('hidden')
                  }}
                >
                  Send Notice
                </Button>
              </td>
              <td></td>
              <p style={{ marginLeft: -330, marginTop: 10, visibility: text }}>
                <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
                &nbsp;Redemption notices have been sent
              </p>
            </tr>
          </tbody>
        </Table>
      )}
    </>
  )
}

export default Redemption2
