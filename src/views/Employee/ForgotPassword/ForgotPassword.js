import React, { Component } from 'react'
import { Button, Form, Col, Input, Label, FormGroup, Card } from 'reactstrap';

export default class ForotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    render() {
        return (
            <div>
                  <Card body outline color="secondary" style={{ width: '50%', height: '300px' }}>
                <Form className="form-group" onSubmit={this.addLeaveApply}>
                    <Col md={8}>
                        <h3>Forgot Password</h3>
                        <hr></hr>

                    {/* <FormGroup row>
                            <Label sm={10}><h5>OTP</h5> </Label>
                            <Col sm={8}>
                                <Input type="text" name="Otp" placeholder="Mobile Number" onChange={this.handleOnChange}>
                                    
                                </Input>
                            </Col>
                        </FormGroup >  */}

                        <FormGroup row>
                            <Col sm={8}>
                                <Label for="exampleSelect" sm={0}><h5>New Password</h5></Label>
                                <Input type="text" name="new_passwrd"  placeholder="Enter password"  onChange={this.handleOnChange}></Input>
                            </Col>
                           
                               
                        </FormGroup>

                        <FormGroup row>
                        <Col sm={8}>
                        <Label sm={0}><h5>Confirm Password</h5></Label>
                                <Input type="text" name="confirm_passwrd"placeholder="Enter comfirm" onChange={this.handleOnChange}></Input>
                            </Col>
                        </FormGroup>
                        
                        <Col sm={8}>
                        <Button color="btn btn-primary btn-block">Submit</Button>
                        </Col>
                    </Col>
                </Form>
            </Card>
                
                 
            </div>
        )
    }
}
