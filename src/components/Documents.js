import React, { Component } from 'react'
import { Table, Dropdown } from 'react-bootstrap'
import '../App.css'

class Documents extends Component {
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
      <Table hover size='sm' responsive>
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
                <Dropdown.Menu>
                  <Dropdown.Item eventKey='1' disabled>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='2'>View Document</Dropdown.Item>
                  <Dropdown.Item eventKey='3'>Download</Dropdown.Item>
                  <Dropdown.Item eventKey='4'>Approve/Reject</Dropdown.Item>
                  <Dropdown.Item eventKey='5'>Add Comment</Dropdown.Item>
                  <Dropdown.Item eventKey='6'>View History</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td>RBI Report</td>
            <td>rbi_cp_100d_20191017.pdf</td>
            <td>Signed</td>
            <td id='verify'>
              <i className='fa fa-circle' aria-hidden='true'></i>
            </td>
            <td>2 Issuer</td>
            <td>08/07/2019 10:58:22</td>
            <td>
              <Dropdown drop='left'>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id='dropdown-custom-components'
                >
                  <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey='1' disabled>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='2'>View Document</Dropdown.Item>
                  <Dropdown.Item eventKey='3'>Download</Dropdown.Item>
                  <Dropdown.Item eventKey='4'>Approve/Reject</Dropdown.Item>
                  <Dropdown.Item eventKey='5'>Add Comment</Dropdown.Item>
                  <Dropdown.Item eventKey='6'>View History</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td>IPA Declaration</td>
            <td>ipadec_cp_100d_20191017.pdf</td>
            <td>Signed</td>
            <td id='verify'>
              <i className='fa fa-circle' aria-hidden='true'></i>
            </td>
            <td>2 Issuer</td>
            <td>08/07/2019 10:58:22</td>
            <td>
              <Dropdown drop='left'>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id='dropdown-custom-components'
                >
                  <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey='1' disabled>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='2'>View Document</Dropdown.Item>
                  <Dropdown.Item eventKey='3'>Download</Dropdown.Item>
                  <Dropdown.Item eventKey='4'>Approve/Reject</Dropdown.Item>
                  <Dropdown.Item eventKey='5'>Add Comment</Dropdown.Item>
                  <Dropdown.Item eventKey='6'>View History</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td>Letter Of Offer</td>
            <td>loo_cp_100d_20191017.pdf</td>
            <td>Signed</td>
            <td id='verify'>
              <i className='fa fa-circle' aria-hidden='true'></i>
            </td>
            <td>2 Issuer</td>
            <td>08/07/2019 10:58:22</td>
            <td>
              <Dropdown drop='left'>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id='dropdown-custom-components'
                >
                  <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey='1' disabled>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='2'>View Document</Dropdown.Item>
                  <Dropdown.Item eventKey='3'>Download</Dropdown.Item>
                  <Dropdown.Item eventKey='4'>Approve/Reject</Dropdown.Item>
                  <Dropdown.Item eventKey='5'>Add Comment</Dropdown.Item>
                  <Dropdown.Item eventKey='6'>View History</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td>DCN-Mutual Fund Of India</td>
            <td>dcn_mfi1_cp_100d_20191017.pdf</td>
            <td>Signed</td>
            <td id='verify'>
              <i className='fa fa-circle' aria-hidden='true'></i>
            </td>
            <td>1 Investor, 2 Issuer</td>
            <td>08/07/2019 11:10:39</td>
            <td>
              <Dropdown drop='left'>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id='dropdown-custom-components'
                >
                  <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey='1' disabled>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='2'>View Document</Dropdown.Item>
                  <Dropdown.Item eventKey='3'>Download</Dropdown.Item>
                  <Dropdown.Item eventKey='4'>Approve/Reject</Dropdown.Item>
                  <Dropdown.Item eventKey='5'>Add Comment</Dropdown.Item>
                  <Dropdown.Item eventKey='6'>View History</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td>Stamp Duty Receipt</td>
            <td>eSBTR.pdf</td>
            <td>Uploaded</td>
            <td id='verify'>
              <i className='fa fa-circle' aria-hidden='true'></i>
            </td>
            <td>1 Investor, 2 Issuer</td>
            <td>08/07/2019 11:10:39</td>
            <td>
              <Dropdown drop='left'>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id='dropdown-custom-components'
                >
                  <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey='1' disabled>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='2'>View Document</Dropdown.Item>
                  <Dropdown.Item eventKey='3'>Download</Dropdown.Item>
                  <Dropdown.Item eventKey='4'>Approve/Reject</Dropdown.Item>
                  <Dropdown.Item eventKey='5'>Add Comment</Dropdown.Item>
                  <Dropdown.Item eventKey='6'>View History</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td>IPA Certificate</td>
            <td>ipacert_cp_100d_20191017.pdf</td>
            <td>Pending Approval</td>
            <td id='verify'>
              <i className='fa fa-circle' aria-hidden='true'></i>
            </td>
            <td>None</td>
            <td>08/07/2019 11:10:39</td>
            <td>
              <Dropdown drop='left'>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id='dropdown-custom-components'
                >
                  <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey='1' disabled>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='2'>View Document</Dropdown.Item>
                  <Dropdown.Item eventKey='3'>Download</Dropdown.Item>
                  <Dropdown.Item eventKey='4'>Approve/Reject</Dropdown.Item>
                  <Dropdown.Item eventKey='5'>Add Comment</Dropdown.Item>
                  <Dropdown.Item eventKey='6'>View History</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default Documents
