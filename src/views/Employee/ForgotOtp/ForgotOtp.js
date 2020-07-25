import React, { Component } from 'react'
import { Button, Form, Col, Input, Label, FormGroup, Card } from 'reactstrap';

export default class ForgotOtp extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    render() {
        return (
            <div>
                  <Card body outline color="secondary" style={{ width: '50%', height: '250px' }}>
                <Form className="form-group" onSubmit={this.addLeaveApply}>
                    <Col md={8}>
                        <h3>Reset Password</h3>
                        <hr></hr>

                         <FormGroup row>
                            <Label sm={10}><h5>Mobile Number</h5> </Label>
                            <Col sm={8}>
                                <Input type="text" name="mobileno" placeholder="Mobile Number" onChange={this.handleOnChange}>
                                    
                                </Input>
                            </Col>
                        </FormGroup >

                       
                        <Col sm={8}>
                        <Button color="btn btn-primary btn-block">Reset Password</Button>
                        </Col>
                    </Col>
                </Form>
            </Card>
                
                 
            </div>
        )
    }
}
