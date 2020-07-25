import React, { Component } from 'react'
import { Button, Form, Col, Input, Label, FormGroup, Card, CardTitle } from 'reactstrap';
import { connect } from 'react-redux';
import { addLeave } from '../../../redux/actions/authActions';

class AddLeaveType extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addLeave: {
                leave_Type: '',
                leave_ShortName: '',
            },
            msg: ''
        }
    }
    handleOnChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addLeaveType = (e) => {
        e.preventDefault();
        const addleaveData = {
            leave_type: this.state.leave_type,
            leave_shortname: this.state.leave_shortname
        }
        this.props.addLeave(addleaveData)
            .then((res) => {
                this.setState({ msg: res.data.message, errMsg: '' })
                setTimeout(() => { this.props.history.push('/dashboard'); }, 2000);
            })
            .catch((err) => {
                console.log('err', err);
            })
    }

    render() {
        return (
            <Card body outline color="secondary" style={{ width: '50%' }}>
                <CardTitle><h3>ADD LEAVE TYPE</h3></CardTitle>
                <hr />
                <Form onSubmit={this.addLeaveType}>
                    <FormGroup row >
                        <Label sm={10}>Leave Type </Label>
                        <Col sm={8}>
                            <Input type="text" name="leave_type" onChange={this.handleOnChange}>
                            </Input>
                        </Col>
                    </FormGroup >

                    <FormGroup row>
                        <Label sm={10}>Leave Short Name </Label>
                        <Col sm={8}>
                            <Input type="text" name="leave_shortname" onChange={this.handleOnChange}></Input>
                        </Col>
                    </FormGroup >

                    <Col xs="6">
                        <Button color="primary">Add</Button>
                    </Col>
                    <div style={{ textAlign: 'center' }}>
                        {
                            this.state.msg &&
                            <b style={{ fontSize: '20px', color: 'blue' }}>
                                {this.state.msg}
                            </b>
                        }
                        {/*  {
                            this.state.errMsg &&
                            <b style={{ fontSize: '20px', color: 'red' }}>
                                {this.state.errMsg}
                            </b>
                        } */}
                    </div>
                </Form>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return { data: state }
}

export default connect(mapStateToProps, { addLeave })(AddLeaveType);
