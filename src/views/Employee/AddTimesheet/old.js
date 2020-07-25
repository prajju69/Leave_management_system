import React, { Component } from "react";
import '../Timesheet/Timesheet.css'
import { Card, CardHeader, CardBody, Row, Col, FormGroup, Label, Input, Button, Container } from "reactstrap";

export default class AddTimesheet extends Component {
  state = {
    rows: [{}],
    curdate: ''
  };
  
  getDate = () => {
    var curdate = new Date().toDateString();
    this.setState({ curdate });
  };

  submitData = () =>{
    console.log("rowData",this.state.rows);
  }

  handleChange = idx => e => {
    //console.log("object", e.target.value);
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
  };
  handleAddRow = () => {
    const item = {
      time: "",
      topic: "",
      details:""
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows]
    rows.splice(idx, 1)
    this.setState({ rows })
  }
  render() {
    const { curdate } = this.state;
    return (
      <div>
        <Card>
          <CardHeader>
            <strong><h5>Add Timesheet</h5></strong>
          </CardHeader>


          <CardBody>
            <Row>
              <Col xs="8" md="4" sm="6">
                <FormGroup>
                  <Label><strong>Select Todays's date:&nbsp;</strong></Label>&nbsp;<button onClick={this.getDate}> <i className="cui-arrow-bottom icons font-1xl d-block mt-1"></i></button><br></br>
                  <Input type="text" value={curdate} name="ccyear" id="ccyear" onChange={this.handleChange}>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Label htmlFor="ccnumber"><b>PLEASE NOTE:</b> Give details of time spent on tasks for each day on Hourly Basis.</Label>
            <br></br><br></br>

            {this.state.rows.map((item, idx) => (
              <Container key={idx}>
                <Row>
                  <Col xs="12" md="4" sm="6">
                    <FormGroup>
                      <div style={{ backgroundColor: '#d0d8d7', borderRadius: 6, marginBottom: 15 }}>
                        <Label htmlFor="time"><h5><span style={{ paddingLeft: 15 }}>Select Time</span></h5></Label>
                      </div>
                      <Input type="select" name="time" id="time" value={this.state.rows[idx].time}
                        onChange={this.handleChange(idx)}>
                        <option value="12 am - 01 am">12 am - 01 am</option>
                        <option value="01 am -  02 am">01 am -  02 am</option>
                        <option value="02 am -  03 am">02 am -  03 am</option>
                        <option value="03 am - 04 am">03 am - 04 am</option>
                        <option value="04 am - 05 am">04 am - 05 am</option>
                        <option value="05 am - 06 am">05 am - 06 am</option>
                        <option value="06 am - 07 am">06 am - 07 am</option>
                        <option value="07 am - 08 am">07 am - 08 am</option>
                        <option value="08 am - 09 am">08 am - 09 am</option>
                        <option value="09 am - 10 am">09 am - 10 am</option>
                        <option value="10 am - 11 am">10 am - 11 am</option>
                        <option value="11 am - 12 pm">11 am - 12 pm</option>
                        <option value="12 pm - 01 pm">12 pm - 01 pm</option>
                        <option value="01 pm - 02 pm">01 pm - 02 pm</option>
                        <option value="02 pm - 03 pm"> 02 pm - 03 pm</option>
                        <option value="03 pm - 04 pm"> 03 pm - 04 pm</option>
                        <option value="04 pm - 05 pm"> 04 pm - 05 pm</option>
                        <option value="05 pm - 06 pm">05 pm - 06 pm</option>
                        <option value="06 pm - 07 pm">06 pm - 07 pm</option>
                        <option value="07 pm - 08 pm">07 pm - 08 pm</option>
                        <option value="08 pm - 09 pm">08 pm - 09 pm</option>
                        <option value="09 pm - 10 pm<">09 pm - 10 pm</option>
                        <option value="10 pm - 11 pm">10 pm - 11 pm</option>
                        <option value="11 pm - 12 am">11 pm - 12 am</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="4" sm="6">
                    <FormGroup>
                      <div style={{ backgroundColor: '#d0d8d7', borderRadius: 6, marginBottom: 15 }}>
                        <Label htmlFor="topic"><h5><span style={{ paddingLeft: 15 }}>Select Topic</span></h5></Label>
                      </div>
                      <Input type="select" name="topic" id="topic" value={this.state.rows[idx].topic}
                        onChange={this.handleChange(idx)}>
                        <option value="Development">Development</option>
                        <option value="Debugging">Debugging</option>
                        <option value="Testing">Testing</option>
                        <option value="Discussing">Discussing</option>
                        <option value="Team Meeting">Team Meeting</option>
                        <option value="Team Discussion">Team Discussion</option>
                        <option value="Documentation">Documentation</option>
                        <option value="Others">Others</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="4" sm="6">
                    <FormGroup>
                      <div style={{ backgroundColor: '#d0d8d7', borderRadius: 6, marginBottom: 15 }}>
                        <Label htmlFor="details"><h5><span style={{ paddingLeft: 15 }}>Enter Details</span></h5></Label>
                      </div>
                      <Input type="textarea" name="details" id="details" value={this.state.rows[idx].details}
                        onChange={this.handleChange(idx)}>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="4" sm="6">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={this.handleRemoveSpecificRow(idx)}
                    >
                      Remove
                        </button>
                  </Col>
                </Row>
                <hr></hr>
              </Container>
              
            ))}

            
            <button onClick={this.handleAddRow} className="btn btn-primary" style={{marginLeft:'20px'}}> Add Row </button>
            <button  onClick={this.handleRemoveRow}  className="btn btn-danger float-left" >
              Delete Last Row
            </button>
            <button onClick={this.submitData} className="btn btn-success float-right"> Submit Timesheet </button>

          </CardBody>
        </Card>

      </div>
    );
  }
}

