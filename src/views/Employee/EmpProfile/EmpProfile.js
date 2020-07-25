import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardHeader, CardBody, Container } from 'reactstrap';
import logo from '../../../assets/img/brand/logo.svg';

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

export default class EmpProfile extends Component {
    render() {
        return (
            <div>
                <Card body outline color="primary">
                    <CardHeader><h1>Employee Profile</h1></CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="8" sm="8">
                                <Card body outline color="secondary" style={{ width: '40%', height: '100%' }}>
                                    <img src={logo} alt="img det" style={{ width: '100%', height: '100%' }}></img>
                                    {/* <i class="fa fa-user-circle" aria-hidden="true" ></i> */}
                                </Card>
                            </Col>
                            <Col xs="4" sm="4">
                                <Button color="primary"><i className="fa fa-edit" aria-hidden="true" ></i> &nbsp;&nbsp;
                            Edit{/* <i class="fa fa-chevron-circle-right" aria-hidden="true"></i> */}
                                </Button>
                            </Col>
                        </Row>
                        <br></br>
                        <br></br>

                        <Container>
                            <Row style={style.row}>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Employee ID :</Col>
                                <Col xs="12" md="3" sm="6">F000049</Col>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Employee Name :</Col>
                                <Col xs="12" md="3" sm="6">Lavanya</Col>
                            </Row>

                            <Row style={style.row}>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Email :</Col>
                                <Col xs="12" md="3" sm="6">lavanya@forktechnologies.com</Col>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Contact Number :</Col>
                                <Col xs="12" md="3" sm="6">9740167125</Col>
                            </Row>

                            <Row style={style.row}>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Gender :</Col>
                                <Col xs="12" md="3" sm="6">Female</Col>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>DOB :</Col>
                                <Col xs="12" md="3" sm="6">14/9/95</Col>
                            </Row>

                            <Row style={style.row}>
                                <Col xs="12" md="3" sm="6" style={style.boldName} >Date Of Join:</Col>
                                <Col xs="12" md="3" sm="6">11/11/19</Col>
                                <Col xs="12" md="3" sm="6" style={style.boldName}>Address :</Col>
                                <Col xs="12" md="3" sm="6">#18, XYZ, ABC(P), SKP(Tq), SMG(D), Karnnataka- 577427</Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
