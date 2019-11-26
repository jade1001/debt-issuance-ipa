import React, { Component } from 'react'
import { Table, Container, Dropdown, Accordion, Button } from 'react-bootstrap'

export class Allocations extends Component {
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
      <Container>
        <Table
          style={{
            width: '70%',
            marginTop: 15,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 'auto'
          }}
        >
          <thead>
            <tr>
              <th></th>
              <th>Investor</th>
              <th>Scheme</th>
              <th>Business Unit</th>
              <th>Deal Date</th>
              <th>Value Date</th>
              <th>Redemption Value</th>
              <th>Rate(%)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i class='fa fa-chevron-right'></i>
              </td>
              <td>Mutual Fund of India</td>
              <td>Liquid Fund</td>
              <td>Monetago India Pvt Ltd</td>
              <td>08/07/2019</td>
              <td>09/07/2019</td>
              <td>50,00,00.000 INR</td>
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
            <tr>
              <td style={{ border: 'none' }}>
                <i class='fa fa-chevron-right'></i>
              </td>
              <td style={{ border: 'none' }}>Mutual Fund of India</td>
              <td style={{ border: 'none' }}></td>
              <td style={{ border: 'none' }}>Monetago India Pvt Ltd</td>
              <td style={{ border: 'none' }}>08/07/2019</td>
              <td style={{ border: 'none' }}>09/07/2019</td>
              <td style={{ border: 'none' }}>50,00,00.000 INR</td>
              <td style={{ border: 'none' }}>9.58</td>
              <td style={{ border: 'none' }}>
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
