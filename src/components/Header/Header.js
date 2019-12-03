import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <header className="header login">
        <Row around="xs">
          <Col xs={5} sm={7} md={8} lg={8}>
            <img className="brand" src="logo.png" alt="logo" />
          </Col>
          <Col xs={7} sm={5} md={4} lg={3} className="test">
            <div className="nav-item active">Sign In</div>
            <div className="nav-item"> Help</div>
          </Col>
        </Row>
      </header>
    );
  }
}
