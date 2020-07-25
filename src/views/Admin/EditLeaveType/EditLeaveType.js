import React, { Component } from 'react'
import { Button, Form, Col, Input, Label, FormGroup, Card, CardTitle } from 'reactstrap';

class EditLeaveType extends Component {
    constructor(props){
        super(props)
        this.state={
            leaveType : '',
            leave_ShortName :''
        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editLeaveApply = (e) => {
        e.preventDefault();
        const editLeaveData = {
            leaveType: this.state.leaveType,
            leave_ShortName: this.state.leave_ShortName
            }
    }
    render() {
        return (
            <Card body outline color="secondary" style={{ width: '50%' }}>
                <CardTitle><h3>UPDATE LEAVE TYPE</h3></CardTitle>
                <hr />

                <Form>
                    <FormGroup row onSubmit={this.editLeaveApply}>
                        <Label sm={10}>Leave Type </Label>
                        <Col sm={8}>
                            <Input type="text" name="leaveType" onChange={this.handleOnChange}>
                            </Input>
                        </Col>
                    </FormGroup >

                    <FormGroup row>
                        <Label sm={10}>Leave Short Name </Label>
                        <Col sm={8}>
                            <Input type="text" name="leave_ShortName" onChange={this.handleOnChange}></Input>
                        </Col>
                    </FormGroup >

                    <Col xs="6">
                        <Button color="primary">Update</Button>
                    </Col>

                </Form>
            </Card>
        )
    }
}
export default EditLeaveType;