import React, { Component } from 'react'
import MainNavBar from './MainNavBar'
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import OpsNotif1 from './OpsNotif1'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { userActions } from '../Redux/_actions/user.actions'

const Cards = styled.div`
	background-color: rgb(245, 245, 245);
	transition: all 0.2s ease-in -out;
	text-align: center;
	width: 100%;
	height: 100%;
	margin-top: 10px;
`

class DashboardMain extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col align='right'>
						<span style={{ cursor: 'pointer', color: '#919191', lineHeight: '30px', verticalAlign: '-webkit-baseline-middle'}}>
							Reports &nbsp;
							<FontAwesomeIcon icon={faChevronRight}/>
						</span>
					</Col>
				</Row>

				<Row>
					<Col xs={12} md={6} lg={4} xl={2}>
						<Cards id='cards'>
							<p id='pHead'>Total Client CP Outstanding</p>
							<p id='pBody'>15,42,000 Cr</p>
							<p id='pFooter'>INR</p>
						</Cards>
					</Col>
					<Col xs={12} md={6} lg={4} xl={2}>
						<Cards id='cards'>
							<p id='pHead'>Avg Yield of Outstanding</p>
							<p id='pBody'>9.78%</p>
							<p id='pFooter'>APY</p>
						</Cards>
					</Col>
					<Col xs={12} md={6} lg={4} xl={2}>
						<Cards id='cards'>
							<p id='pHead'>Maturing Today</p>
							<p id='pBody'>3</p>
							<p id='pFooter'>Count</p>
						</Cards>
					</Col>
					<Col xs={12} md={6} lg={4} xl={2}>
						<Cards id='cards'>
							<p id='pHead'>Placements In Progress</p>
							<p id='pBody'>37,200 Cr</p>
							<p id='pFooter'>INR</p>
						</Cards>
					</Col>
					<Col xs={12} md={6} lg={4} xl={2}>
						<Cards id='cards'>
							<p id='pHead'>Client MTD Issued</p>
							<p id='pBody'>3,01,000 Cr</p>
							<p id='pFooter'>INR</p>
						</Cards>
					</Col>
					<Col xs={12} md={6} lg={4} xl={2}>
						<Cards id='cards'>
							<p id='pHead'>Total Market CP Outstanding</p>
							<p id='pBody'>35,54,800 Cr</p>
							<p id='pFooter'>INR</p>
						</Cards>
					</Col>
				</Row>

				<Row className='mt-4'>
					<Col xs={12} md={6} lg={4} xl={2}>
						<Cards id='cards'>
							<p id='pHead'>Client ISINs Outstanding</p>
							<p id='pBody'>135</p>
							<p id='pFooter'>Count</p>
						</Cards>
					</Col>
					<Col xs={12} md={6} lg={4} xl={2}>
						<Cards id='cards'>
							<p id='pHead'>Avg Term Of Outstanding</p>
							<p id='pBody'>94</p>
							<p id='pFooter'>Days</p>
						</Cards>
					</Col>
					<Col xs={12} md={6} lg={4} xl={2}>
						<Cards id='cards'>
							<p id='pHead'>Value Date Today</p>
							<p id='pBody'>5</p>
							<p id='pFooter'>Count</p>
						</Cards>
					</Col>
					<Col xs={12} md={6} lg={4} xl={2}>
						<Cards id='cards'>
							<p id='pHead'>Placements In Progress</p>
							<p id='pBody'>12</p>
							<p id='pFooter'>Count</p>
						</Cards>
					</Col>
					<Col xs={12} md={6} lg={4} xl={2}>
						<Cards id='cards'>
							<p id='pHead'>Avg Client Issued Value</p>
							<p id='pBody'>11,400 Cr</p>
							<p id='pFooter'>INR</p>
						</Cards>
					</Col>
					<Col xs={12} md={6} lg={4} xl={2}>
						<Cards id='cards'>
							<p id='pHead1'>Total Market ISINs Outstanding</p>
							<p id='pBody'>398</p>
							<p id='pFooter'>INR</p>
						</Cards>
					</Col>
				</Row>
				<br />
				<OpsNotif1 />
			</Container>
		)
	}
}

function mapState(state) {
	const { users, authentication } = state
	const { user } = authentication
	return { user, users }
}

const actionCreators = {
	getUsers: userActions.getAll,
	deleteUser: userActions.delete
}

export default connect(mapState, actionCreators)(DashboardMain)
// export { connectedHomePage as DashboardMain }

// export default DashboardMain
