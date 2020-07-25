import React, { Component } from 'react';
import { Button, Form, Col, Input, Label, FormGroup, Card } from 'reactstrap';

class LeaveRequestView extends Component {

    constructor(props) {
        super(props)
         this.state = {
            addLeave: {
                emp_name: '',
                emp_id: '',
                gender: '',
                emp_emailid: '',
                mob_number: '',
                selectLeave: '',
                date: '',
                posting_date: '',
                description: '',
                status: '',
                remarks: '',
                hr_actiontakendate: ''

            }
        }
    }

    handleOnChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    LeaveRequestapply = (e) => {

        e.preventDefault();
        const leaveRequestData = {

            emp_name: this.state.emp_name,
            emp_id: this.state.emp_id,
            gender: this.state.gender,
            emp_emailid: this.state.emp_emailid,
            mob_number: this.state.mob_number,
            selectLeave: this.state.selectLeave,
            date: this.state.date,
            posting_date: this.state.posting_date,
            description: this.state.description,
            status: this.state.status,
            remarks: this.state.remarks,
            hr_actiontakendate: this.state.hr_actiontakendate,
        }
}

    render() {

        return (

            <Card body outline color="secondary">
                <Form onSubmit={this.LeaveRequestapply}>
                    <Col md={8}>
                        <h3>LEAVE REQUEST VIEW</h3>
                        <hr></hr>

                        <FormGroup row>
                            <Col sm={4}>
                                <Label for="exampleSelect" sm={0}><h5>Employee Name </h5></Label>
                                <Input type="text" name="emp_name" onChange={this.handleOnChange}></Input>
                            </Col>
                            <Col sm={4}>
                                <Label sm={0}><h5>EmpId</h5></Label>
                                <Input type="text" name="emp_id" onChange={this.handleOnChange}></Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col sm={4}>
                                <Label><h5>LeaveType</h5></Label>
                                <Input type="select" name="selectLeave" onChange={this.handleOnChange}>
                                    <optio>Leave Type</optio>
                                    <option>Sick Leave</option>
                                    <option>Personal Leave</option>
                                    <option>Casual Leave</option>
                                    <option>optional Leave</option>
                                </Input>
                            </Col>

                            <Col sm={4}>
                                <Label sm={0}><h5>Leave Date </h5></Label>
                                <Input type="date" name="date" onChange={this.handleOnChange}></Input>
                            </Col>
                            <Col sm={4}>
                                <Label sm={0}><h5>Reason for leave </h5></Label>
                                <Input type="text" name="posting_date" onChange={this.handleOnChange}></Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col sm={6}>
                                <Label><h5>Choose Your Option</h5></Label>

                                <Input type="select" name="selectLeave" onChange={this.handleOnChange}>
                                    <option>Approve</option>
                                    <option>Reject</option>
                                </Input>
                            </Col>
                            <Col sm={6}>
                                <Label><h5>Approved Date</h5></Label>
                                <Input type="date" name="selectLeave" onChange={this.handleOnChange}>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col sm={12}>
                                <Label><h5>Remarks</h5></Label>
                                <Input type="textarea" name="description" onChange={this.handleOnChange}></Input>
                            </Col>
                        </FormGroup>

                        <Button color="primary">TakeAction</Button>
                    </Col>
                </Form>

            </Card>
        )
    }
}


export default LeaveRequestView;