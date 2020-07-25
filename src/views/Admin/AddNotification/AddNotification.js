import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap'

export default class AddNotification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      add: {
        subject: '',
        description: '',
        empType: ''
      }
    }
  }
  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addNotification = (e) => {
    e.preventDefault();
    const Notificationdata = {
      subject: this.state.subject,
      description: this.state.description,
      empType: this.state.empType
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div>
          <Row>
            <Col xs="12" sm="6">
              <br></br>
              <Card>

                <CardHeader>
                  <strong>Send Notifications</strong>
                </CardHeader>

                <CardBody>
                  <Form row onSubmit={this.addNotification}>
                    <FormGroup>
                      <Label htmlFor="company"><b>Subject</b></Label>
                      <Input type="text" name="subject" placeholder="Enter subject" onChange={this.handleOnChange} />
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="vat"><b>Description</b></Label>
                      <Input type="textarea" name="description" placeholder="Enter your Description here" onChange={this.handleOnChange} />
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="select"><b>Employee Type</b></Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="empType" id="select" onChange={this.handleOnChange}>
                          <option value="0">All</option>
                          <option value="1">HR</option>
                          <option value="2">Employees</option>
                        </Input>
                      </Col>
                    </FormGroup>
                  </Form>

                </CardBody>
                <CardFooter>
                  <Button type="Submit" size="sm" color="primary">{/* <i className="fa fa-dot-circle-o"></i> */}Send</Button>&nbsp;&nbsp;
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

