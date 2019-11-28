import React, { Component } from 'react'
import { Table, Container, Dropdown, Accordion, Button } from 'react-bootstrap'
import './accordion.css'

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
              <th style={{ paddingBottom: '0' }}></th>
              <th style={{ paddingBottom: '0' }}>Investor</th>
              <th style={{ paddingBottom: '0' }}>Scheme</th>
              <th style={{ paddingBottom: '0' }}>Business Unit</th>
              <th style={{ paddingBottom: '0' }}>Deal Date</th>
              <th style={{ paddingBottom: '0' }}>Value Date</th>
              <th style={{ paddingBottom: '0' }}>Redemption Value</th>
              <th style={{ paddingBottom: '0' }}>Rate(%)</th>
              <th style={{ paddingBottom: '0' }}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id='tdalloc'>
                <i class='fa fa-angle-right' id='angle'></i>
              </td>
              <td id='tdallocdata'>Mutual Fund of India</td>
              <td id='tdallocdata'>Liquid Fund</td>
              <td id='tdallocdata'>Monetago India Pvt Ltd</td>
              <td id='tdallocdata'>08/07/2019</td>
              <td id='tdallocdata'>09/07/2019</td>
              <td id='tdallocdata'>50,00,00.000 INR</td>
              <td id='tdallocdata' style={{ textAlign: 'right' }}>
                9.58
              </td>
              <td id='tdallocdata'>
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
              <td id='tdalloc' style={{ border: 'none' }}>
                <i class='fa fa-angle-right' id='angle'></i>
              </td>
              <td style={{ border: 'none', paddingTop: '5px' }}>
                Mutual Fund of India
              </td>
              <td style={{ border: 'none', paddingTop: '5px' }}></td>
              <td style={{ border: 'none', paddingTop: '5px' }}>
                Monetago India Pvt Ltd
              </td>
              <td style={{ border: 'none', paddingTop: '5px' }}>08/07/2019</td>
              <td style={{ border: 'none', paddingTop: '5px' }}>09/07/2019</td>
              <td style={{ border: 'none', paddingTop: '5px' }}>
                50,00,00.000 INR
              </td>
              <td
                style={{
                  border: 'none',
                  textAlign: 'right',
                  paddingTop: '5px'
                }}
              >
                9.58
              </td>
              <td style={{ border: 'none', paddingTop: '5px' }}>
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
