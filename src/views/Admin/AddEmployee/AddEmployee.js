import React, { Component } from 'react';
import { Card, Row, Col, Container } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { getRolesAction } from '../../../redux/actions/rolesAction';
import { addEmployee } from '../../../redux/actions/employeeAction';

class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eid: '',
            efname: '',
            elname: '',
            egender: '',
            emob: '',
            edob: '',
            edoj: '',
            eemail: '',
            password: '',
            eaddr: '',
            eimage: '',
            emaritalstatus: '',
            eleaves: '',
            // esickLeave: '',
            // ecasualLeave: '',
            role: '',
            bloodgroup: '',
            designation: ''
        }
    }

    componentDidMount() {
        this.props.getRolesAction();
    }

    submitData = (e) => {
        e.preventDefault();
        const data = {
            "first_name": this.state.efname,
            "last_name": this.state.elname,
            "mobile": this.state.emob,
            "email": this.state.eemail,
            "dob": this.state.edob,
            "doj": this.state.edoj,
            "marital_status": this.state.emaritalstatus == 'single' ? false : true,
            "No_of_leaves": this.state.eleaves,
            "address": this.state.eaddr,
            "image": this.state.eimage,
            "gender": this.state.egender,
            "location": this.state.eaddr,
            "designation": this.state.designation,
            "blood_group": this.state.bloodgroup,
            "password": this.state.password,
            "role_id": this.state.role,
            "rolesList" : []
        };

        this.props.addEmployee(data).then((res) => {
            alert("Success \n " + res.data.message);
            console.log("success", res.data.message);
            document.getElementById("addEmp").reset();
        }).catch((err) => {
            console.log('err', err);
            alert("Error", err);
        })
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const rolesList = this.props.data.data
        return (
            <div>
                <h1 style={{ color: "#9c9797" }}>Add Employee Data</h1>
                <Card body outline color="primary">
                    <Form id="addEmp" onSubmit={this.submitData}>
                        <Container>
                            <Row>
                                {/* <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="exampleName">Employee ID</Label>
                                        <Input type="text" name="eid" placeholder="Enter EID" pattern="^(?!(?:[A-Z]+|[0-9]+)$)[A-Z0-9]+$" onChange={(e) => this.handleChange(e)} required/>
                                    </FormGroup>
                                </Col> */}
                                <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="firstName">FirstName</Label>
                                        <Input type="text" name="efname" placeholder="Enter First Name" onChange={(e) => this.handleChange(e)} required />
                                    </FormGroup>
                                </Col>
                                <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="lastName">LastName</Label>
                                        <Input type="text" name="elname" placeholder="Enter Last Name " onChange={(e) => this.handleChange(e)} />
                                    </FormGroup>
                                </Col>
                                <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="dob">Date of Birth</Label>
                                        <Input type="date" name="edob" placeholder="Enter Date of Joining" onChange={(e) => this.handleChange(e)} required />
                                    </FormGroup>
                                </Col>
                                <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="egender">Gender</Label>
                                        <Input type="select" name="egender" id="exampleSelect" onChange={(e) => this.handleChange(e)} required>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="bloodgroup">Blood Group</Label>
                                        <Input type="text" name="bloodgroup" onChange={(e) => this.handleChange(e)} required>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="contactNumber">Contact Number</Label>
                                        <Input type="tel" name="emob" placeholder="Enter Contact Number" minLength="10" maxLength="10" onChange={(e) => this.handleChange(e)} required />
                                        {/* pattern="^\d{3}-\d{3}-\d{4}$" */}
                                    </FormGroup>
                                </Col>


                                <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="email" name="eemail" placeholder="Enter  Email" onChange={(e) => this.handleChange(e)} required />
                                    </FormGroup>
                                </Col>
                                <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password" name="password" placeholder="Enter password" minLength="6" maxLength="8" onChange={(e) => this.handleChange(e)} required />
                                    </FormGroup>
                                </Col>
                                <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="edoj">Date of Joining</Label>
                                        <Input type="date" name="edoj" placeholder="Enter Date of Joining" onChange={(e) => this.handleChange(e)} required />
                                    </FormGroup>
                                </Col>

                                <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="role">Employee Type</Label>
                                        <Input type="select" name="role" onChange={(e) => this.handleChange(e)} required>
                                            {rolesList && rolesList.map((role, i) => {
                                                return (
                                                    <option key={i} value={role.role_id}>{role.role}</option>
                                                )
                                            })}
                                        </Input>
                                    </FormGroup>
                                </Col>

                                <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="designation">Designation</Label>
                                        <Input type="text" name="designation" placeholder="Enter Designation" onChange={(e) => this.handleChange(e)} />
                                    </FormGroup>
                                </Col>

                                <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="eleaves">No. of  Leaves</Label>
                                        <Input type="number" name="eleaves" placeholder="Enter No. of Leaves" onChange={(e) => this.handleChange(e)} required />
                                    </FormGroup>
                                </Col>

                                {/* <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="ecasualLeave">No. of Casual Leaves</Label>
                                        <Input type="number" name="ecasualLeave" placeholder="Enter No. of Leaves" onChange={(e) => this.handleChange(e)} required/>
                                    </FormGroup>
                                </Col> */}

                                <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="emaritalstatus">Marital Status</Label>
                                        <Input type="text" name="emaritalstatus" placeholder="Enter Marital Status" onChange={(e) => this.handleChange(e)} />
                                    </FormGroup>
                                </Col>

                                <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="eaddr">Address</Label>
                                        <Input type="textarea" name="eaddr" id="exampleText" onChange={(e) => this.handleChange(e)} required />
                                    </FormGroup>
                                </Col>
                                <Col xs="12" md="4" sm="6">
                                    <FormGroup>
                                        <Label for="eimage">Image</Label>
                                        <Input type="file" name="eimage" placeholder="Choose Employee Image" onChange={(e) => this.handleChange(e)} required />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Container>
                        <Button color="success">Add</Button>
                    </Form>
                </Card>
            </div>
        )

    }
}


const mapStateToProps = (reduxState) => {
    return { data: reduxState.roles.roles }
}

export default connect(mapStateToProps, { getRolesAction, addEmployee })(AddEmployee);
