import React, { Component } from 'react'
import { Table, Dropdown, Row, Col, Form, ButtonToolbar, Button } from 'react-bootstrap'
import '../App.css'

class Settlement extends Component {
    render() {
        const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
            <a href="# " ref={ref} onClick={e => {
                e.preventDefault();
                onClick(e);
            }}>
                {children}
            </a>
        ));

        return (
            <Row>
                <Col xs={12} md={2}>
                    <div className="my-3" id="settle-menu">
                        <a href='# '>
                            <span>Placement</span>
                        </a>
                    </div>

                    <div className="my-3" id="settle-menu">
                        <a href='# '>
                            <span>Redemption</span>
                        </a>
                    </div>
                </Col>
                <Col xs={12} md={10}>
                    <Table hover size="sm" responsive>
                        <thead>
                            <tr>
                                <th>Investor</th>
                                <th>Deal Date</th>
                                <th>Value Data</th>
                                <th id="text-right">Total Face Value</th>
                                <th id="text-right">Total Net Proceeds</th>
                                <th id="text-center">Settled</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mutual Fund Of India</td>
                                <td>08/07/2019</td>
                                <td>09/07/2019</td>
                                <td id="text-right">50,00,00,000 INR</td>
                                <td id="text-right">48,72,12,500 INR</td>
                                <td id="verify">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                </td>
                                <td>
                                    <Dropdown drop="left">
                                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="1" disabled>Action</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">View Full Details</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Record Payment</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>UTI</td>
                                <td>08/07/2019</td>
                                <td>09/07/2019</td>
                                <td id="text-right">20,00,00,000 INR</td>
                                <td id="text-right">19,48,85,000 INR</td>
                                <td id="verify">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                </td>
                                <td>
                                    <Dropdown drop="left">
                                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="1" disabled>Action</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">View Full Details</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Record Payment</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>Capital Partners</td>
                                <td>08/07/2019</td>
                                <td>09/07/2019</td>
                                <td id="text-right">30,00,00,000 INR</td>
                                <td id="text-right">29,23,27,500 INR</td>
                                <td id="verify">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                </td>
                                <td>
                                    <Dropdown drop="left">
                                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="1" disabled>Action</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">View Full Details</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Record Payment</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr id="border-b-0">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td id="text-right">1,00,00,00,000 INR</td>
                                <td id="text-right">97,44,25,000 INR</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr id="border-b-0">
                                <td></td>
                                <td></td>
                                <td>IPA Fee Rate</td>
                                <td id="text-right">IPA Fees</td>
                                <td id="text-right">Final Proceeds</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr id="border-b-0">
                                <td></td>
                                <td></td>
                                <td>
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select">
                                                <option>1 bps</option>
                                                <option>2 bps</option>
                                                <option>3 bps</option>
                                                <option>4 bps</option>
                                                <option>5 bps</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </td>
                                <td id="text-right">1,00,000 INR</td>
                                <td id="text-right">97,43,25,000 INR</td>
                                <td id="text-center">
                                    <ButtonToolbar id="d-block">
                                        <Button variant="secondary">Finalise</Button>
                                    </ButtonToolbar>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}

export default Settlement