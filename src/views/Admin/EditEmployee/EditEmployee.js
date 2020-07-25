import React, { Component } from 'react';
import { Card, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { getEmployeeById ,updateEmployee } from '../../../redux/actions/employeeAction';
import { connect } from 'react-redux';

class EditEmployee extends Component {
    constructor() {
        super();

        this.state = {
            empById: {
                No_of_leaves: '',
                address: '',
                blood_group: '',
                designation: '',
                dob: '',
                doj: '',
                email: '',
                empId: '',
                first_name: '',
                gender: '',
                id: '',
                image: '',
                last_name: '',
                location: '',
                marital_status: '',
                mobile: ''
            }
        }
    }
 
    componentDidMount() {
        const id = this.props.match.params.id;

        console.log("idddd....",   id)
        this.props.getEmployee(id)
       /*  .then((res)=> {
          this.setState({
            editEmp: {
              ...this.state.editEmp,
             efname: res.data.efname,
             elname: res.data.elname,
            egender: res.data.egender,
            emob: res.data.emob,
            edoj: res.data.edoj,
            password: res.data.password,
            eemail: res.data.eemail,
            eaddr: res.data.eaddr,
            eimage: res.data.eimage
            }
          })
        }).catch((err)=> {
          console.log('err', err);
        }) */
      }
    editEmployeeSubmit = (e) => {
        e.preventDefault();
        console.log("Dataa", this.state);
        const dataa = {
            id: this.state.empById.id,
            updateData : {
                "first_name": this.state.empById.first_name,
                    "last_name": this.state.empById.last_name,
                    "mobile": this.state.empById.mobile,
                    "email": this.state.empById.email,
                    "dob": this.state.empById.dob,
                    "doj": this.state.empById.doj,
                    "marital_status": this.state.empById.marital_status == 'single' ? true : false,
                    "No_of_leaves": this.state.empById.No_of_leaves,
                    "address": this.state.empById.address,
                    "image": "",
                    "gender": this.state.empById.gender,
                    "location": this.state.empById.location,
                    "designation": this.state.empById.designation,
                    "blood_group": this.state.empById.blood_group
            }
        };
        this.props.updateEmployee(dataa).then((res)=> {
            alert("Success \n" + res.data.message);
            this.props.history.push('/employeeList');
        }).catch((err)=> {
              console.log('err', err);
            })
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            empById: {
                ...this.state.empById,
                [e.target.name]: e.target.value
            }
        })
    }
   
    render() {
        return (
            <div>
                <h1 style={{ color: "#9c9797" }}>Update Employee Data</h1>
                <Card body outline color="primary">
                    <Form onSubmit={this.editEmployeeSubmit}>
                        <Row>
                            <Col xs="12" md="4" sm="6">
                                <FormGroup>
                                    <Label for="empId">Employee ID</Label>
                                    <Input type="text" name="empId"  onChange={this.handleChange}  value={this.state.empById.empId} disabled />
                                </FormGroup>
                            </Col>
                            <Col xs="12" md="4" sm="6">
                                <FormGroup>
                                    <Label for="first_name">FirstName</Label>
                                    <Input type="text" name="first_name"   onChange={this.handleChange} value={this.state.empById.first_name} />
                                </FormGroup>
                            </Col>
                            <Col xs="12" md="4" sm="6">
                                <FormGroup>
                                    <Label for="last_name">LastName</Label>
                                    <Input type="text" name="last_name"  onChange={this.handleChange} value={this.state.empById.last_name} />
                                </FormGroup>
                            </Col>
                            <Col xs="12" md="4" sm="6">
                                <FormGroup>
                                    <Label for="gender">Gender</Label>
                                    <Input type="select" name="select"  onChange={this.handleChange} value={this.state.empById.gender}>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs="12" md="4" sm="6">
                                <FormGroup>
                                    <Label for="mobile">Contact Number</Label>
                                    <Input type="number" name="mobile" onChange={this.handleChange} value={this.state.empById.mobile} />
                                </FormGroup>
                            </Col>
                            <Col xs="12" md="4" sm="6">
                                <FormGroup>
                                    <Label for="dob">Date of Birth</Label>
                                    <Input type="date" name="dob" onChange={this.handleChange} value={this.state.empById.dob} />
                                </FormGroup>
                            </Col>

                            <Col xs="12" md="4" sm="6">
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email"  onChange={this.handleChange} value={this.state.empById.email} />
                                </FormGroup>
                            </Col>
                            <Col xs="12" md="4" sm="6">
                                <FormGroup>
                                    <Label for="doj">Date of Joining</Label>
                                    <Input type="date" name="edoj" onChange={this.handleChange}  value={this.state.empById.doj} />
                                </FormGroup>
                            </Col>

                            <Col xs="12" md="4" sm="6">
                                <FormGroup>
                                    <Label for="marital_status">Marital Status</Label>
                                    <Input type="text" name="marital_status"  onChange={this.handleChange} value={this.state.empById.marital_status} />
                                </FormGroup>
                            </Col>

                            <Col xs="12" md="4" sm="6">
                                <FormGroup>
                                    <Label for="No_of_leaves">No. of Leaves</Label>
                                    <Input type="text" name="No_of_leaves"  onChange={this.handleChange} value={this.state.empById.No_of_leaves} />
                                </FormGroup>
                            </Col>

                            <Col xs="12" md="4" sm="6">
                                <FormGroup>
                                    <Label for="address">Address</Label>
                                    <Input type="textarea" name="address"  onChange={this.handleChange} value={this.state.empById.address} /> 
                                </FormGroup>
                            </Col>
                            <Col xs="12" md="4" sm="6">
                                <FormGroup>
                                    <Label for="image">Image</Label>
                                    <Input type="file" name="image"  onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button color="success">Update</Button>
                    </Form>
                </Card>
            </div>
        )
    }


    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getEmployeeById(id).then((res) => {
            //console.log("date", res.data.dob.substr(0, 10));
            this.setState({
                empById: {
                  ...this.state.empById,
                  No_of_leaves: res.data.No_of_leaves,
                  address: res.data.address,
                  blood_group: res.data.blood_group,
                  designation: res.data.designation,
                  dob: res.data.dob.substr(0, 10),
                  doj: res.data.doj.substr(0, 10),
                  email: res.data.email,
                  empId: res.data.empId,
                  first_name: res.data.first_name,
                  gender: res.data.gender,
                  id: res.data.id,
                  image: null,
                  last_name: res.data.last_name,
                  location: res.data.location,
                  marital_status: res.data.marital_status ? 'single' : 'married',
                  mobile: res.data.mobile
                }
              })
            }).catch((err)=> {
              console.log('err', err);
            })
    }
}

const mapStateToProps = (reduxState) => {
    console.log("byid", reduxState.employee.getEmployeeById.data);
    return { data: reduxState.employee.getEmployeeById.data }
}


export default connect(mapStateToProps, { getEmployeeById, updateEmployee })(EditEmployee)
