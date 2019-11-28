import React, { Component } from 'react'
import {
	Table,
	Dropdown,
	Row,
	Col,
	Form,
	FormControl,
	InputGroup,
	Button,
	Tab,
	Nav,
	Container
} from 'react-bootstrap'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	NavLink
} from 'react-router-dom'
import '../App.css'
import DropZone from './DropZone'

export class Settlement extends Component {
	constructor(props) {
		super(props)

		this.state = {
			test: false
		}

		this.setTest = this.setTest.bind(this)
	}

	setTest(bool) {
		this.setState({ test: bool })
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
		// const samp = this.state
		return (
			<>
				<Container>
					{/* {console.log(this)} */}
					{this.state.test ? (
						<RecordPayment />
					) : (
						<Tab.Container id='left-tabs-example' defaultActiveKey='placement'>
							<Row className='pt-3'>
								<Col sm={2} id='border-r-1'>
									<Nav variant='pills' className='flex-column'>
										<Nav.Item id='settle-menu'>
											<Nav.Link eventKey='placement'>Placement</Nav.Link>
										</Nav.Item>
										<Nav.Item id='settle-menu'>
											<Nav.Link eventKey='redemption'>Redemption</Nav.Link>
										</Nav.Item>
									</Nav>
								</Col>
								<Col sm={10}>
									<Tab.Content>
										<Tab.Pane eventKey='placement'>
											<Placement func={this.setTest} />
										</Tab.Pane>
										<Tab.Pane eventKey='redemption'>
											<Redemption />
										</Tab.Pane>
									</Tab.Content>
								</Col>
							</Row>
						</Tab.Container>
					)}
				</Container>
			</>
		)

		function Placement(props) {
			return (
				<Table responsive hover size='sm' className='overflow-hidden table-borderless' id='settle-table'>
					<thead>
						<tr>
							<th>Investor</th>
							<th>Deal Date</th>
							<th>Value Data</th>
							<th className='text-right'>Total Face Value</th>
							<th className='text-right'>Total Net Proceeds</th>
							<th id='text-center'>Settled</th>
							<th> </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Mutual Fund Of India</td>
							<td>08/07/2019</td>
							<td>09/07/2019</td>
							<td className='text-right'>50,00,00,000 INR</td>
							<td className='text-right'>48,72,12,500 INR</td>
							<td id='verify'>
								<i className='fa fa-circle' aria-hidden='true'></i>
							</td>
							<td>
								<Dropdown drop='left'>
									<Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
										<i className='fa fa-ellipsis-v' aria-hidden='true'></i>
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item disabled>Action</Dropdown.Item>
										<Dropdown.Item onSelect={() => alert('View')}>View Full Details</Dropdown.Item>
										<Dropdown.Item onClick={() => {
																		// console.log(props.func(true))
																		props.func(true)
																	}}>
											Record Payment
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</td>
						</tr>
						<tr>
							<td>UTI</td>
							<td>08/07/2019</td>
							<td>09/07/2019</td>
							<td className='text-right'>20,00,00,000 INR</td>
							<td className='text-right'>19,48,85,000 INR</td>
							<td id='verify'>
								<i className='fa fa-circle' aria-hidden='true'></i>
							</td>
							<td>
								<Dropdown drop='left'>
									<Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
										<i className='fa fa-ellipsis-v' aria-hidden='true'></i>
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item eventKey='1' disabled>Action</Dropdown.Item>
										<Dropdown.Item onSelect={() => alert('View')}>View Full Details</Dropdown.Item>
										<Dropdown.Item onClick={() => {
																		// console.log(props.func(true))
																		props.func(true)
																	}}>
											Record Payment
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</td>
						</tr>
						<tr>
							<td>Capital Partners</td>
							<td>08/07/2019</td>
							<td>09/07/2019</td>
							<td className='text-right'>30,00,00,000 INR</td>
							<td className='text-right'>29,23,27,500 INR</td>
							<td id='verify'>
								<i className='fa fa-circle' aria-hidden='true'></i>
							</td>
							<td>
								<Dropdown drop='left'>
									<Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
										<i className='fa fa-ellipsis-v' aria-hidden='true'></i>
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item eventKey='1' disabled>
											Action
										</Dropdown.Item>
										<Dropdown.Item onSelect={() => alert('View')}>
											View Full Details
										</Dropdown.Item>
										<Dropdown.Item onClick={() => {
																		// console.log(props.func(true))
																		props.func(true)
																	}}>
											Record Payment
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</td>
						</tr>
						<tr className='bg-white'>
							<td></td>
							<td></td>
							<td></td>
							<td className="border-top text-right">1,00,00,00,000 INR</td>
							<td className="border-top text-right">97,44,25,000 INR</td>
							<td className="border-top"></td>
							<td></td>
						</tr>
						<tr className='bg-white'>
							<td></td>
							<td></td>
							<td>IPA Fee Rate</td>
							<td className="border-bottom text-right">IPA Fees</td>
							<td className="border-bottom text-right">Final Proceeds</td>
							<td className="border-bottom"></td>
							<td></td>
						</tr>
						<tr className='bg-white'>
							<td></td>
							<td></td>
							<td>
								<Form inline>
									<Form.Group controlId='exampleForm.ControlSelect1'>
										<Form.Control as='select'>
											<option>1 bps</option>
											<option>2 bps</option>
											<option>3 bps</option>
											<option>4 bps</option>
											<option>5 bps</option>
										</Form.Control>
									</Form.Group>
								</Form>
							</td>
							<td className='text-right'>10,00,00,000 INR</td>
							<td className='text-right'>97,44,25,000 INR</td>
							<td className='text-center'>
								{/*<Button variant="primary">Finalise</Button>*/}
								<Button variant='secondary' size='sm' disabled>
									Finalise
								</Button>
							</td>
							<td></td>
						</tr>
					</tbody>
				</Table>
			)
		}

		function RecordPayment() {
			return (
				<Container className='w-75'>
					<Col xs={12} md={12}>
						<Table responsive size='sm' id='recordpayment'>
							<thead></thead>
							<tbody>
								<tr>
									<td>Investor</td>
									<td>Currency</td>
									<td id='text-right'>Total Amount Due</td>
								</tr>
								<tr>
									<th>Mutual Fund of India</th>
									<th>Indian Rupees (INR)</th>
									<th id='text-right'>48,72,12,500</th>
								</tr>
								<tr>
									<td className='pb-0'>Recieved Date</td>
									<td className='pb-0'>Payment Referrence (UTR)</td>
									<td className='pb-0' id='text-right'>Amount Recieved</td>
								</tr>
								<tr>
									<td className='pt-0'>
										<Form inline>
											<Form.Control type='text' className='mr-sm-2' value='09/08/2019'/>
										</Form>
									</td>
									<td className='pt-0'>
										<Form inline>
											<Form.Control type='text' className='mr-sm-2' value=''/>
										</Form>
									</td>
									<td className='pt-0 text-right'>
										<InputGroup size="sm" className="mb-3 w-50 float-right">
												<FormControl className="text-right input-left" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value='48,72,12,500' />
											<InputGroup.Append>
												<InputGroup.Text id="inputGroup-sizing-sm" className="bg-white input-span">INR</InputGroup.Text>
											</InputGroup.Append>
										</InputGroup>
									</td>
								</tr>
								<tr>
									<td>
										<Button variant='primary' size='sm'>
											Cancel
										</Button>
									</td>
									<td></td>
									<td id='text-right'>
										{/*<Button variant="primary" size="sm">Submit</Button>*/}
										<Button variant='secondary' size='sm' disabled>
											Submit
										</Button>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Container>
			)
		}

		function Redemption() {
			return <DropZone />
		}
	}
}
