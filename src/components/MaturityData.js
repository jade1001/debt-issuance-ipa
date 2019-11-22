import React, { Component } from 'react';
import {Row, Col, Container, Table} from 'react-bootstrap'

class MaturityData extends Component {
    render() {
        return (
            <Container>
                <Table id="firstMainTable">
                    <thead >
                        <tr id="firstTable">
                        <th id="firstTableHeader">ISIN</th>
                        <th id="firstTableHeader">Currency</th>
                        <th id="firstTableHeader">Total Redemption Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="firstTableData">
                            <td id="firstData">INE0987654321</td>
                            <td id="firstData">Indian Rupees (INR)</td>
                            <td id="firstData">1,00,00,00.000</td>
                        </tr>
                    </tbody>
                    <thead >
                        <tr id="firstTable">
                        <th id="firstTableHeader">Maturity Date</th>
                        <th id="firstTableHeader">Tenor</th>
                        <th id="firstTableHeader">Currently Allocated</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="firstTableData">
                            <td id="firstData">17/10/2019</td>
                            <td id="firstData">101 Days</td>
                            <td id="firstData">1,00,00,00.000</td>
                        </tr>
                    </tbody>
                </Table>
                <Table id="secondMainTable">
                    <thead>
                        <tr id="secondTable">
                        <th id="secondTableHeader">Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="secondTableData">
                            <td id="secondData">None</td>
                        </tr>
                    </tbody>
                    <tbody style={{borderTop:'none'}}>
                        <tr>
                            <td id="btntd"><button id="btnadd">+add</button></td>
                        </tr>
                    </tbody>
                </Table>
                
            </Container>
        );
    }
}

export default MaturityData;