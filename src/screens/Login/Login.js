import React, { Component, Fragment } from "react";
import {
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button
} from "reactstrap";
import Header from "../../components/Header/Header";
import "./Login.scss";
export class Login extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Container className="content">
          <h2 className="main-header">Treasury Debt Issuance</h2>
          <p className="sub-header">Login To Your Account</p>
          <Form className="form-container">
            <InputGroup size="lg" className="mb-2">
              <InputGroupAddon addonType="prepend" className="text-input">
                @
              </InputGroupAddon>
              <Input placeholder="User ID / Email" className="text-input" />
            </InputGroup>
            <InputGroup size="lg" className="mb-3">
              <InputGroupAddon addonType="prepend" className="text-input">
                @
              </InputGroupAddon>
              <Input placeholder="Password" className="text-input" />
            </InputGroup>
            <div>
              <a className="float-left forgot-password">Forgot password?</a>
              <Button className="float-right" color="primray">
                Sign In
              </Button>
            </div>
          </Form>
        </Container>
      </Fragment>
    );
  }
}

export default Login;
