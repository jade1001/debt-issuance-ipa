import React, { Component } from 'react'
import { Table, Dropdown } from 'react-bootstrap'
import '../App.css'

export class CreditLimits extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: '',
      color2: ''
    }
    this.markVerify = this.markVerify.bind(this)
    this.markVerify2 = this.markVerify2.bind(this)
  }

  markVerify() {
    this.setState({ color: 'green' })
  }
  markVerify2() {
    this.setState({ color2: 'green' })
  }

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
      <Table
        hover
        size='sm'
        style={{
          cursor: 'pointer',
          width: '70%',
          marginTop: 15,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 'auto'
        }}
      >
        <thead>
          <tr>
            <th>Rating Agency</th>
            <th>Rating</th>
            <th>Currency</th>
            <th>Limit Amount</th>
            <th>Issue Date</th>
            <th>Valid Before</th>
            <th>Expiry Date</th>
            <th className='text-center'>Verified</th>
            <th className='text-center'>Rating Letter</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ICRA</td>
            <td id='text-center'>A1+</td>
            <td id='text-center'>INR</td>
            <td>2,00,00,00,00,000</td>
            <td>04/07/2019</td>
            <td>04/08/2019</td>
            <td>04/08/2019</td>
            <td id='verify'>
              <i
                className='fa fa-circle'
                aria-hidden='true'
                style={{ color: this.state.color }}
              ></i>
            </td>
            <td id='pdf-logo'>
              <i className='fa fa-file-pdf-o' aria-hidden='true'></i>
            </td>
            <td>
              <Dropdown drop='left'>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id='dropdown-custom-components'
                >
                  <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ fontSize: 11 }}>
                  <Dropdown.Item eventKey='1' disabled>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='2' onClick={this.markVerify}>
                    Mark as Verified
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='3'>Reject</Dropdown.Item>
                  <Dropdown.Item eventKey='4'>Add Comments</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td style={{ border: 'none' }}>CARE</td>
            <td id='text-center' style={{ border: 'none' }}>
              A1+
            </td>
            <td id='text-center' style={{ border: 'none' }}>
              INR
            </td>
            <td style={{ border: 'none' }}>3,00,00,00,00,000</td>
            <td style={{ border: 'none' }}>08/07/2019</td>
            <td style={{ border: 'none' }}>08/08/2019</td>
            <td style={{ border: 'none' }}>08/10/2019</td>
            <td id='verify' style={{ border: 'none' }}>
              <i
                className='fa fa-circle'
                aria-hidden='true'
                style={{ color: this.state.color2 }}
              ></i>
            </td>
            <td id='pdf-logo' style={{ border: 'none' }}>
              <i className='fa fa-file-pdf-o' aria-hidden='true'></i>
            </td>
            <td style={{ border: 'none' }}>
              <Dropdown drop='left'>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id='dropdown-custom-components'
                >
                  <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ fontSize: 11 }}>
                  <Dropdown.Item eventKey='1' disabled>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='2' onClick={this.markVerify2}>
                    Mark as Verified
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='3'>Reject</Dropdown.Item>
                  <Dropdown.Item eventKey='4'>Add Comments</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }
}
