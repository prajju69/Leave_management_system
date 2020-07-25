import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { loginAction } from '../../../redux/actions/authActions';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      login: {
        email: '',
        password: '',
      }
    }
  }

  login = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.login.email,
      password: this.state.login.password
    }
    this.props.loginAction(data)
      .then((res) => {
        this.props.history.push('/dashboard')
      })
      .catch((err) => {
        //this.setState({ errMsg: err.response.data.error.message});
      })
  }

  handleOnChange = (e) => {
    this.setState({
      login: {
        ...this.state.login,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                {/* <Card style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h1>image</h1>
                    </div>
                  </CardBody>
                </Card> */}
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.login}>
                      <p style={{ textAlign: 'center', fontWeight: 'bold', color: 'red', fontSize: '22px', fontFamily: 'Comic Sans MS' }}>Fork Technologies</p>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Enter email" name="email" onChange={this.handleOnChange} required autoComplete="email" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" name="password" onChange={this.handleOnChange} required autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>

              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return { data: reduxState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: data => dispatch(loginAction(dispatch, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
