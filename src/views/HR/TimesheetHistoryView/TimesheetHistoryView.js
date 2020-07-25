
import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap'

export default class TimesheetHistoryView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            EmployeeTimeSheetHistory: [
                {
                    empId: 'Emp001',
                    date: '21/12/2019',
                    time: '10.30am',
                    topic: 'development',
                    Description: 'iuhhwe dcdsf',
                },
                {
                    empId: 'Emp2034',
                    date: '01/11/2018',
                    time: '11.45am',
                    topic: 'development',
                    Description: 'sdfsdfdsf',
                },
                {
                    empId: 'Emp306',
                    date: '02/05/2020',
                    time: '12pm',
                    topic: 'development',
                    Description: 'asdd sdfdsfsd',
                },

            ]
        }
    }


    cancel = (cell, row) => {
        return (
            <div>
                <span>
                    <button type="button" value={row.id} className="btn btn-success" data-toggle="modal" data-target={"#active" + row._id} style={{ marginLeft: '5px', paddingLeft: '10px', paddingRight: '10px' }} >Submit</button>
                </span>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h4>Employee TimeSheetHistory</h4>
                <br />
                <Row>
                    <Col xs="3">
                        <FormGroup>
                            <Label><h5><span style={{ paddingLeft: 15 }}>Select Employee</span></h5></Label>
                            <Input type="select" name="name" id="name">
                                <option value="1">Mahantesh</option>
                                <option value="2">Prajwal</option>
                                <option value="3">Amith.j</option>
                                <option value="4">Mitun</option>
                                <option value="6">Dixit</option>
                                <option value="7">Lavanya</option>
                                <option value="8">Aishwarya</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label><h5><span style={{ paddingLeft: 15 }}>Select Date</span></h5></Label>
                            <Input type="date" name="date" id="name">
                            </Input>
                        </FormGroup>

                    </Col>
                </Row>
                <br />
                <div >
                    <BootstrapTable data={this.state.EmployeeTimeSheetHistory} style={{ backgroundColor: '#d0d8d7', borderRadius: 6, marginBottom: 15 }} >
                        <TableHeaderColumn width='50' isKey dataField='empId'>EmployeeId</TableHeaderColumn>
                        <TableHeaderColumn width='80' dataField='date'>Date</TableHeaderColumn>
                        <TableHeaderColumn width='80' dataField='time'>Time</TableHeaderColumn>
                        <TableHeaderColumn width='80' dataField='topic'>Topic</TableHeaderColumn>
                        <TableHeaderColumn width='60' dataField='Description'>Description</TableHeaderColumn>

                    </BootstrapTable>
                </div>
            </div>
        )
    }
}
