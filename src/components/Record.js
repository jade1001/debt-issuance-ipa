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
  Nav,
  Container
} from 'react-bootstrap'

function Record(props) {
  return (
    <Col>
      <Table responsive size='sm' id='recordpayment'>
        <thead></thead>
        <tbody>
          <tr>
            <td>Investor</td>
            <td>Currency</td>
            <td id='text-right'>Total Amount Due</td>
          </tr>
          <tr>
            <th>Mutual Fund of India</th>
            <th>Indian Rupees (INR)</th>
            <th id='text-right'>3,00,00,00,000</th>
          </tr>
          <tr>
            <td className='pb-0'>Recieved Date</td>
            <td className='pb-0'>Payment Referrence (UTR)</td>
            <td className='pb-0' id='text-right'>
              Amount Recieved
            </td>
          </tr>
          <tr>
            <td className='pt-0'>
              <Form inline>
                <Form.Control
                  type='text'
                  className='mr-sm-2'
                  value='09/08/2019'
                />
              </Form>
            </td>
            <td className='pt-0'>
              <Form inline>
                <Form.Control type='text' className='mr-sm-2' />
              </Form>
            </td>
            <td className='pt-0' id='text-right'>
              <Form inline className='d-block'>
                <Form.Control
                  type='text'
                  className='mr-sm-2 text-right'
                  value='3,00,00,00,000 INR'
                />
              </Form>
            </td>
          </tr>
          <tr>
            <td>
              <Button variant='primary' size='sm' onClick={() => props.func(1)}>
                Cancel
              </Button>
            </td>
            <td></td>
            <td id='text-right'>
              {/*<Button variant="primary" size="sm">Submit</Button>*/}
              <Button variant='secondary' size='sm' disabled>
                Submit
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Col>
  )
}

export default Record
