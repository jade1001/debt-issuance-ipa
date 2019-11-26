import React, { Component } from 'react'
import { Table, Dropdown } from 'react-bootstrap'
import '../App.css'

export class Documents extends Component {
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
          width: '70%',
          marginTop: 20,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 'auto'
        }}
      >
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
          <tr>
            <td>Board Resolution</td>
            <td>board_resolution_201906.pdf</td>
            <td>Signed</td>
            <td id='verify'>
              <i className='fa fa-circle' aria-hidden='true'></i>
            </td>
            <td>2 Issuer</td>
            <td>01/06/2019 15:02:56</td>
            <td>
              <Dropdown drop='left'>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id='dropdown-custom-components'
                >
                  <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ fontSize: 11 }}>
                  <Dropdown.Item eventKey='1' disabled style={{ opacity: 0.5 }}>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                    View Document
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                    Download
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='4' style={{ color: '#919191' }}>
                    Approve/Reject
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                    Add Comment
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                    View History
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td style={{ border: 'none' }}>RBI Report</td>
            <td style={{ border: 'none' }}>rbi_cp_100d_20191017.pdf</td>
            <td style={{ border: 'none' }}>Signed</td>
            <td id='verify' style={{ border: 'none' }}>
              <i className='fa fa-circle' aria-hidden='true'></i>
            </td>
            <td style={{ border: 'none' }}>2 Issuer</td>
            <td style={{ border: 'none' }}>08/07/2019 10:58:22</td>
            <td style={{ border: 'none' }}>
              <Dropdown drop='left'>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id='dropdown-custom-components'
                >
                  <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ fontSize: 11 }}>
                  <Dropdown.Item eventKey='1' disabled style={{ opacity: 0.5 }}>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                    View Document
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                    Download
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='4' style={{ color: '#919191' }}>
                    Approve/Reject
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                    Add Comment
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                    View History
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td style={{ border: 'none' }}>IPA Declaration</td>
            <td style={{ border: 'none' }}>ipadec_cp_100d_20191017.pdf</td>
            <td style={{ border: 'none' }}>Signed</td>
            <td id='verify' style={{ border: 'none' }}>
              <i className='fa fa-circle' aria-hidden='true'></i>
            </td>
            <td style={{ border: 'none' }}>2 Issuer</td>
            <td style={{ border: 'none' }}>08/07/2019 10:58:22</td>
            <td style={{ border: 'none' }}>
              <Dropdown drop='left'>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id='dropdown-custom-components'
                >
                  <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ fontSize: 11 }}>
                  <Dropdown.Item eventKey='1' disabled style={{ opacity: 0.5 }}>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                    View Document
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                    Download
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='4' style={{ color: '#919191' }}>
                    Approve/Reject
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                    Add Comment
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                    View History
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td style={{ border: 'none' }}>Letter Of Offer</td>
            <td style={{ border: 'none' }}>loo_cp_100d_20191017.pdf</td>
            <td style={{ border: 'none' }}>Signed</td>
            <td id='verify' style={{ border: 'none' }}>
              <i className='fa fa-circle' aria-hidden='true'></i>
            </td>
            <td style={{ border: 'none' }}>2 Issuer</td>
            <td style={{ border: 'none' }}>08/07/2019 10:58:22</td>
            <td style={{ border: 'none' }}>
              <Dropdown drop='left'>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id='dropdown-custom-components'
                >
                  <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ fontSize: 11 }}>
                  <Dropdown.Item eventKey='1' disabled style={{ opacity: 0.5 }}>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                    View Document
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                    Download
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='4' style={{ color: '#919191' }}>
                    Approve/Reject
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                    Add Comment
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                    View History
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td style={{ border: 'none' }}>DCN-Mutual Fund Of India</td>
            <td style={{ border: 'none' }}>dcn_mfi1_cp_100d_20191017.pdf</td>
            <td style={{ border: 'none' }}>Signed</td>
            <td id='verify' style={{ border: 'none' }}>
              <i className='fa fa-circle' aria-hidden='true'></i>
            </td>
            <td style={{ border: 'none' }}>1 Investor, 2 Issuer</td>
            <td style={{ border: 'none' }}>08/07/2019 11:10:39</td>
            <td style={{ border: 'none' }}>
              <Dropdown drop='left'>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id='dropdown-custom-components'
                >
                  <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ fontSize: 11 }}>
                  <Dropdown.Item eventKey='1' disabled style={{ opacity: 0.5 }}>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                    View Document
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                    Download
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='4' style={{ color: '#919191' }}>
                    Approve/Reject
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                    Add Comment
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                    View History
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td style={{ border: 'none' }}>Stamp Duty Receipt</td>
            <td style={{ border: 'none' }}>eSBTR.pdf</td>
            <td style={{ border: 'none' }}>Uploaded</td>
            <td id='verify' style={{ border: 'none' }}>
              <i className='fa fa-circle' aria-hidden='true'></i>
            </td>
            <td style={{ border: 'none' }}>1 Investor, 2 Issuer</td>
            <td style={{ border: 'none' }}>08/07/2019 11:10:39</td>
            <td style={{ border: 'none' }}>
              <Dropdown drop='left'>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id='dropdown-custom-components'
                >
                  <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ fontSize: 11 }}>
                  <Dropdown.Item eventKey='1' disabled style={{ opacity: 0.5 }}>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                    View Document
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                    Download
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='4' style={{ color: '#919191' }}>
                    Approve/Reject
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                    Add Comment
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                    View History
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td style={{ border: 'none' }}>IPA Certificate</td>
            <td style={{ border: 'none' }}>ipacert_cp_100d_20191017.pdf</td>
            <td style={{ border: 'none' }}>Pending Approval</td>
            <td id='verify' style={{ border: 'none' }}>
              <i className='fa fa-circle' aria-hidden='true'></i>
            </td>
            <td style={{ border: 'none' }}>None</td>
            <td style={{ border: 'none' }}>08/07/2019 11:10:39</td>
            <td style={{ border: 'none' }}>
              <Dropdown drop='left'>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id='dropdown-custom-components'
                >
                  <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ fontSize: 11 }}>
                  <Dropdown.Item eventKey='1' disabled style={{ opacity: 0.5 }}>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='2' style={{ color: '#919191' }}>
                    View Document
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='3' style={{ color: '#919191' }}>
                    Download
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='4' style={{ color: '#919191' }}>
                    Approve/Reject
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='5' style={{ color: '#919191' }}>
                    Add Comment
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='6' style={{ color: '#919191' }}>
                    View History
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }
}
