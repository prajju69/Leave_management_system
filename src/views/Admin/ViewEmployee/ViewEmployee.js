import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardHeader, CardBody, Container } from 'reactstrap';
import logo from '../../../assets/img/brand/logo.svg';
import { getEmployeeDataAction } from '../../../redux/actions/employeeAction';
import { connect } from 'react-redux';

const style = {
    row: {
        margin: '5px',
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    boldName: {
        fontWeight: 'bold',
        fontFamily: ''
    },
    Col: { fontSize: '14' }
}

class ViewEmployee extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getEmployeeDataAction(id)
    }

    render() {
        const empDetails = this.props.data.employee.empData
        return (
            <div>
                <Card body outline color="primary">
                    <CardHeader><h1>Employee Profile</h1></CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="8" sm="8">
                                <Card body outline color="secondary" style={{ width: '40%', height: '100%' }}>
                                    <img src={empDetails.image} alt="No_Image" style={{ width: '100px', height: '100px' }} />
                                </Card>
                            </Col>
                            <Col xs="4" sm="4">
                                Employee ID : <b>{empDetails.empId}</b>
                            </Col>
                        </Row>
                        <br></br>
                        <br></br>

                        <Container>
                            <Row style={style.row}>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>First Name :</Col>
                                <Col xs="12" md="3" sm="6">{empDetails.first_name}</Col>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Last Name :</Col>
                                <Col xs="12" md="3" sm="6">{empDetails.last_name}</Col>
                            </Row>

                            <Row style={style.row}>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Date of Birth :</Col>
                                <Col xs="12" md="3" sm="6">{empDetails.dob}</Col>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Gender :</Col>
                                <Col xs="12" md="3" sm="6">{empDetails.gender}</Col>
                            </Row>

                            <Row style={style.row}>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Contact Number :</Col>
                                <Col xs="12" md="3" sm="6">{empDetails.mobile}</Col>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Email :</Col>
                                <Col xs="12" md="3" sm="6">{empDetails.email}</Col>
                            </Row>

                            <Row style={style.row}>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Designation :</Col>
                                <Col xs="12" md="3" sm="6">{empDetails.designation}</Col>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Blood Group :</Col>
                                <Col xs="12" md="3" sm="6">{empDetails.blood_group}</Col>
                            </Row>

                            <Row style={style.row}>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Date of Join :</Col>
                                <Col xs="12" md="3" sm="6">{empDetails.doj}</Col>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Marital status:</Col>
                                <Col xs="12" md="3" sm="6">{empDetails.marital_status}</Col>
                            </Row>

                            <Row style={style.row}>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Location:</Col>
                                <Col xs="12" md="3" sm="6">{empDetails.location}</Col>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Address :</Col>
                                <Col xs="12" md="3" sm="6">{empDetails.address}</Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </div>
        )
    }
}


const mapStateToProps = (reduxState) => {
    return { data: reduxState }
}

export default connect(mapStateToProps, { getEmployeeDataAction })(ViewEmployee);
