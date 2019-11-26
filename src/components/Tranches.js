import React, { Component } from 'react'
import { Table, Container, Dropdown, Accordion, Button } from 'react-bootstrap'

class Tranches extends Component {
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
      <Container style={{ padding: '0' }}>
        <Table
          style={{
            fontSize: '0.6rem',
            textAlign: 'left',
            width: '70%',
            margin: 'auto'
          }}
        >
          <thead>
            <tr>
              <th></th>
              <th>Serial Number</th>
              <th>Issue Date</th>
              <th>Value Date</th>
              <th>No. of Application</th>
              <th style={{ textAlign: 'center' }}>
                Total
                <br />
                Redemption Value
              </th>
              <th style={{ textAlign: 'center' }}>
                Allocated
                <br />
                Redemption Value
              </th>
              <th style={{ textAlign: 'center' }}>
                Total
                <br />
                Net Proceeds
              </th>
              <th> Avg Rate(%)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i class='fa fa-chevron-right'></i>
              </td>
              <td>1</td>
              <td>08/07/2019</td>
              <td>09/07/2019</td>
              <td style={{ textAlign: 'center' }}>2</td>
              <td>INR 1,00,00,00.000</td>
              <td>INR 1,00,00,00.000</td>
              <td>INR 97,44,25.000</td>
              <td style={{ textAlign: 'right' }}>9.58</td>
              <td>
                <Dropdown drop='left'>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id='dropdown-custom-components'
                  >
                    <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ fontSize: '0.6rem' }}>
                    <Dropdown.Item eventKey='1' disabled>
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='2'>View Document</Dropdown.Item>
                    <Dropdown.Item eventKey='3'>Download</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    )
  }
}

export default Tranches
