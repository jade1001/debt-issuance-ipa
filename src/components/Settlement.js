import React, { Component } from 'react'
import { Table, Dropdown, Row, Col, Form, ButtonToolbar, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
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

        function Placement(){
            return(
                <Table responsive hover size="sm" className="overflow-hidden">
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
                            <td id="text-right">10,00,00,000 INR</td>
                            <td id="text-right">97,28,50,000 INR</td>
                            <td id="text-center">
                                <ButtonToolbar id="d-block">
                                    {/*<Button variant="primary">Finalise</Button>*/}
                                    <Button variant="secondary" disabled>Finalise</Button>
                                </ButtonToolbar>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            )
        }

        function RecordPayment(){
            return(
                <Col xs={12} md={12}>
                    <Table responsive size="sm" id="recordpayment">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Investor</td>
                                <td>Currency</td>
                                <td id="text-right">Total Amount Due</td>
                            </tr>
                            <tr>
                                <th>Mutual Fund of India</th>
                                <th>Indian Rupees (INR)</th>
                                <th id="text-right">48,72,12,500</th>
                            </tr>
                            <tr>
                                <td className="pb-0">Recieved Date</td>
                                <td className="pb-0">Payment Referrence (UTR)</td>
                                <td className="pb-0" id="text-right">Amount Recieved</td>
                            </tr>
                            <tr>
                                <td className="pt-0">
                                    <Form inline>
                                        <Form.Control type="text" className="mr-sm-2" defaultValue="09/08/2019"/>
                                    </Form>
                                </td>
                                <td className="pt-0">
                                    <Form inline>
                                        <Form.Control type="text" className="mr-sm-2" />
                                    </Form>
                                </td>
                                <td className="pt-0" id="text-right">
                                    <Form inline className="d-block">
                                        <Form.Control type="text" className="mr-sm-2 text-right" defaultValue="48,72,12,500 INR"/>
                                    </Form>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Button variant="primary" size="sm">Cancel</Button>
                                </td>
                                <td></td>
                                <td id="text-right">
                                    {/*<Button variant="primary" size="sm">Submit</Button>*/}
                                    <Button variant="secondary" size="sm" disabled>Submit</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            )
        }

        function Redemption(){
            return(
                <h2>Redemption</h2>
            )
        }

        return (
            <Row>
                <Router>
                    <Switch>
                        <Route path="/recordpayment">
                            <RecordPayment/>
                        </Route>
                    </Switch>
                    <Col xs={12} md={2}>
                        <div className="my-3" id="settle-menu">
                            <Link to="/placement">
                                <span>Placement</span>
                            </Link>
                        </div>
                        <div className="my-3" id="settle-menu">
                            <Link to="/redemption">
                                <span>Redemption</span>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={10}>
                        <Switch>
                            <Route path="/placement">
                                <Placement />
                            </Route>
                            <Route path="/redemption">
                                <Redemption />
                            </Route>
                        </Switch>
                    </Col>
                    <RecordPayment/>
                </Router>
            </Row>
        )
    }
}

export default Settlement