import React, { Component } from "react";
import { Card, Row, Col } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Button, Form, Input, Label, FormGroup, CardTitle } from "reactstrap";

export default class CompanyHolidayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [
        {
          "SL NO": 1,
          Date: "10 Apr 2020",
          Day: "Friday",
          Optional: "No",
          Description: "Good Friday",
        },
      ],
    };
  }

  render() {
    console.log('jjj',this.state.List)
    return (
      <div>
        <div>
          <h4>View Holidays</h4>
        </div>{" "}
        <br />
        <div>
          <Form row>
            <Col sm="6">
              <Row>
                <Col>
                  <Label>
                    <strong>Holiday Calender of:</strong>Fork India Bangalore
                  </Label>
                </Col>

                <Label>
                  <strong>Year: </strong>
                </Label>
                <Col sm={3}>
                  <Input type="select" name="selectYear">
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                  </Input>
                </Col>
              </Row>
            </Col>
          </Form>
        </div>
        <br />
        
        <div>
          
          <BootstrapTable pagination data={this.state.List}>
            
            <TableHeaderColumn dataField="SL NO" dataFormat={this.indexN} isKey>
              Sl.No
            </TableHeaderColumn>
            <TableHeaderColumn dataField="Date">Date</TableHeaderColumn>
            <TableHeaderColumn dataField="Day">Day</TableHeaderColumn>
            <TableHeaderColumn dataField="Optional">OPTIONAL</TableHeaderColumn>
            <TableHeaderColumn dataField="Description">
              DESCRIPTION
            </TableHeaderColumn>

            <TableHeaderColumn dataField="Optional">Optional</TableHeaderColumn>
            <TableHeaderColumn dataField="Description">
              Description
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}
