import React, { Component } from "react"
import {
  Table,
  Accordion,
  Card,
  Button,
  Row,
  Col,
  Dropdown
} from "react-bootstrap"
import "./accordion.css"

class TranchesData extends Component {
  constructor(props) {
    super(props)

    this.state = {
      setRotate: ""
    }
  }

  rotate() {
    const { setRotate } = this.state
    this.setState({ setRotate: setRotate ? "" : "rotateZ(90deg)" })
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
      <div>
        <Table responsive striped bordered hover className='overflow-hidden'>
          <thead>
            <tr>
              <td id='table-header'>
                <th id='text'></th>
                <th id='text'>Serial Number</th>
                <th id='text'>Issue Date</th>
                <th id='text'>Value Date</th>
                <th id='text'>No. of Allocation</th>
                <th id='text'>Total Redemption Value</th>
                <th id='text'>Allocated Redemption Value</th>
                <th id='text'>Total Net Proceeds</th>
                <th id='text'>Avg. Rate (%)</th>
                <th id='text'></th>

                <tr></tr>
              </td>
            </tr>
          </thead>

          <thead>
            <tr>
              <td id='tdccord'>
                <Accordion>
                  <td id='tdDrop'>
                    <Accordion.Toggle
                      as={Button}
                      variant='link'
                      eventKey='0'
                      onClick={this.rotate.bind(this)}
                    >
                      <i
                        class='fa fa-angle-right'
                        id='chev'
                        style={{ transform: this.state.setRotate }}
                      ></i>
                    </Accordion.Toggle>
                  </td>
                  <td id='text2'>1</td>
                  <td id='date1'>08/07/2019</td>
                  <td id='date2'>09/07/2019</td>
                  <td id='No'>2</td>
                  <td id='redem'>INR 1,00,00,00,000</td>
                  <td id='redem2'>INR 1,00,00,00,000</td>
                  <td id='tot'>INR 97,44,25,000</td>

                  <td id='text958'>9.58</td>
                  <td id='dropdown'>
                    <Dropdown drop='left'>
                      <Dropdown.Toggle
                        as={CustomToggle}
                        id='dropdown-custom-components'
                      >
                        <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey='1' disabled id='dropdowntext'>
                          Actions
                        </Dropdown.Item>
                        <Dropdown.Item eventKey='2' id='dropdowntext' href='#'>
                          View Full Details
                        </Dropdown.Item>
                        <Dropdown.Item eventKey='3' id='dropdowntext'>
                          Edit Tranches
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>

                  <Accordion.Collapse eventKey='0'>
                    <Card.Body>
                      <Row>
                        <tb id='purpose'>Purpose</tb>
                      </Row>
                      <tb id='funding'>Funding of Manufacturing</tb>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </td>
            </tr>
          </thead>
        </Table>
      </div>
    )
  }
}

export default TranchesData
