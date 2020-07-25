import React, { Component } from 'react';
import { Button, Form, Col, Input, Label, FormGroup, Card } from 'reactstrap';

class LeaveRequest extends Component {

    constructor(props) {
        super(props)
        this.state = {
            addLeave: {
                selectLeave: '',
                from_date: '',
                to_date: '',
                reason: '',
                description: ''
            }
        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addLeaveApply = (e) => {
        e.preventDefault();
        const addLeaveData = {
            selectLeave: this.state.selectLeave,
            from_date: this.state.from_date,
            to_date: this.state.to_date,
            reason : this.state.reason,
            description: this.state.description
        }
    }

    render() {
        return (
            <Card body outline color="secondary" style={{ width: '80%', height: '450px' }}>
                <Form onSubmit={this.addLeaveApply}>
                    <Col md={8}>
                        <h3>LEAVE REQUEST</h3>
                        <hr></hr>

                        <FormGroup row>
                            <Label sm={10}><h5>Select Leave Type </h5></Label>
                            <Col sm={8}>
                                <Input type="select" name="selectLeave" onChange={this.handleOnChange}>
                                    <optio>Leave Type</optio>
                                    <option>Sick Leave</option>
                                    <option>Personal Leave</option>
                                    <option>Casual Leave</option>
                                    <option>optional Leave</option>
                                </Input>
                            </Col>
                        </FormGroup >

                        <FormGroup row>
                            <Col sm={4}>
                                <Label for="exampleSelect" sm={0}><h5>From </h5></Label>
                                <Input type="date" name="from_date" onChange={this.handleOnChange}></Input>
                            </Col>
                            <Col sm={4}>
                                <Label sm={0}><h5>To</h5></Label>
                                <Input type="date" name="to_date" onChange={this.handleOnChange}></Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={10}><h5>Reason for Leave</h5></Label>
                            <Col sm={8}>
                                <Input type="text" name="reason" onChange={this.handleOnChange}></Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={10}><h5>Description </h5></Label>
                            <Col sm={8}>
                                <Input type="textarea" name="description" onChange={this.handleOnChange}></Input>
                            </Col>
                        </FormGroup>

                        <Button color="primary">Apply</Button>
                    </Col>
                </Form>
            </Card>
        )
    }
}


export default LeaveRequest;