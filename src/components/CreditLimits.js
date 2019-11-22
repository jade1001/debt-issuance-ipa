import React, { Component } from 'react'
import {Table, Dropdown} from 'react-bootstrap'
import '../App.css'

class CreditLimits extends Component {
    render() {
        const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
            <a href="# " ref={ref} onClick={e => {  e.preventDefault();
                                                    onClick(e);}}>
                {children}
            </a>
        ));

        return (
            <Table hover size="sm">
                <thead>
                    <tr>
                        <th>Rating Agency</th>
                        <th>Rating</th>
                        <th >Currency</th>
                        <th >Limit Amount</th>
                        <th >Issue Date</th>
                        <th >Valid Before</th>
                        <th >Expiry Date</th>
                        <th className="text-center">Verified</th>
                        <th className="text-center">Rating Letter</th>
                        <th > </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ICRA</td>
                        <td id="text-center">A1+</td>
                        <td id="text-center">INR</td>
                        <td>2,00,00,00,00,000</td>
                        <td>04/07/2019</td>
                        <td>04/08/2019</td>
                        <td>04/08/2019</td>
                        <td id="verify">
                            <i className="fa fa-circle" aria-hidden="true"></i>
                        </td>
                        <td id="pdf-logo">
                            <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                        </td>
                        <td>
                            <Dropdown drop="left">
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="1" disabled>Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Mark as Verified</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Reject</Dropdown.Item>
                                    <Dropdown.Item eventKey="4">Add Comments</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>CARE</td>
                        <td id="text-center">A1+</td>
                        <td id="text-center">INR</td>
                        <td>3,00,00,00,00,000</td>
                        <td>08/07/2019</td>
                        <td>08/08/2019</td>
                        <td>08/10/2019</td>
                        <td id="verify">
                            <i className="fa fa-circle" aria-hidden="true"></i>
                        </td>
                        <td id="pdf-logo">
                            <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                        </td>
                        <td>
                            <Dropdown drop="left">
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="1" disabled>Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Mark as Verified</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Reject</Dropdown.Item>
                                    <Dropdown.Item eventKey="4">Add Comments</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default CreditLimits
