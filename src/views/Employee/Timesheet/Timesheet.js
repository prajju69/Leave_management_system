import React, { Component } from "react";
import {
  Button,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import "./Timesheet.css";

export default class Timesheet extends Component {
  state = {
    curdate: "",
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var curdate = new Date().toDateString();
    this.setState({ curdate });
  };

  render() {
    const { curdate } = this.state;
    return (
      <Col xs="16">
        <div className="animated fadeIn">
          <Row>
            <Col xs="22" sm="11">
              <Card>
                <CardHeader>
                  <strong>
                    <h5>Timesheet Management</h5>
                  </strong>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="4">
                      <FormGroup>
                        <Label>
                          <strong>Select Todays's date:&nbsp;</strong>
                        </Label>
                        &nbsp;<br></br>
                        <Input
                          type="text"
                          value={curdate}
                          name="ccyear"
                          id="ccyear"
                        ></Input>
                      </FormGroup>
                     
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="ccnumber">
                          <b>PLEASE NOTE:</b> Give details of time spent on
                          tasks for each day on Hourly Basis.
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col xs="3">
                      <FormGroup>
                        <div
                          style={{
                            backgroundColor: "#d0d8d7",
                            borderRadius: 6,
                            marginBottom: 15,
                          }}
                        >
                          <Label htmlFor="ccmonth">
                            <h5>
                              <span style={{ paddingLeft: 15 }}>
                                Select Time
                              </span>
                            </h5>
                          </Label>
                        </div>
                        <Input type="select" name="ccmonth" id="ccmonth">
                          <option value="1">9 am - 10 am</option>
                          <option value="2">10 am - 11 am</option>
                          <option value="3">11 am - 12 pm</option>
                          <option value="4">12 pm - 1 pm</option>
                          <option value="6"> 1 pm - 2 pm</option>
                          <option value="7"> 2 pm - 3 pm</option>
                          <option value="8"> 3 pm - 4 pm</option>
                          <option value="9"> 4 pm - 5 pm</option>
                          <option value="10">5 pm - 6 pm</option>
                          <option value="11">6 pm - 7 pm</option>
                          <option value="12">7 pm - 8 pm</option>
                          <option value="13">8 pm - 9 pm</option>
                          <option value="14">9 pm - 10 pm</option>
                          <option value="15">10 pm - 11 pm</option>
                          <option value="16">11 pm - 12 am</option>
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col xs="3">
                      <FormGroup>
                        <div
                          style={{
                            backgroundColor: "#d0d8d7",
                            borderRadius: 6,
                            marginBottom: 15,
                          }}
                        >
                          <Label htmlFor="ccmonth">
                            <h5>
                              <span style={{ paddingLeft: 15 }}>
                                Select Topic
                              </span>
                            </h5>
                          </Label>
                        </div>
                        <Input type="select" name="ccmonth" id="ccmonth">
                          <option value="1">Development</option>
                          <option value="2">Debugging</option>
                          <option value="3">Testing</option>
                          <option value="4">Discussing</option>
                          <option value="6">Team Meeting</option>
                          <option value="7">Team Discussion</option>
                          <option value="8">Documentation</option>
                          <option value="9">Others</option>
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col xs="4">
                      <FormGroup>
                        <div
                          style={{
                            backgroundColor: "#d0d8d7",
                            borderRadius: 6,
                            marginBottom: 15,
                          }}
                        >
                          <Label htmlFor="ccmonth">
                            <h5>
                              <span style={{ paddingLeft: 15 }}>
                                Enter Details
                              </span>
                            </h5>
                          </Label>
                        </div>
                        <Input
                          type="textarea"
                          name="ccmonth"
                          id="ccmonth"
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col xs="2" style={{ marginTop: 25 }}>
                      <FormGroup>
                        <Label>
                          <h5></h5>
                        </Label>
                      </FormGroup>
                      <Button type="submit" color="primary">
                        Save Changes
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Col>
    );
  }
}
