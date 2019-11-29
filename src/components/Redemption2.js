import React from 'react'
import {
  Table,
  Dropdown,
  Row,
  Col,
  Form,
  ButtonToolbar,
  Button,
  Tab,
  Nav
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function Redemption2() {
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
              <Dropdown.Menu>
                <Dropdown.Item disabled>Action</Dropdown.Item>
                <Dropdown.Item onSelect={() => alert('View')}>
                  View Full Details
                </Dropdown.Item>
                <Dropdown.Item onClick={() => {}}>Record Payment</Dropdown.Item>
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
              <Dropdown.Menu>
                <Dropdown.Item disabled>Action</Dropdown.Item>
                <Dropdown.Item onSelect={() => alert('View')}>
                  View Full Details
                </Dropdown.Item>
                <Dropdown.Item onClick={() => {}}>Record Payment</Dropdown.Item>
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
        <tr id='border-b-0'>
          <td></td>
          <td></td>
          <td></td>
          <td id='text-right'></td>
          <td id='text-right'></td>
          <td id='text-center'>
            {/*<Button variant="primary">Finalise</Button>*/}
            <Button size='sm'>Send Notice</Button>
          </td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Redemption2
