import React, { Component } from 'react'
import { Card, CardBody, CardText, CardHeader, Col, Row, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const role = this.props.data.userData.role;
    if (role === 'Admin') {
      return (
        <div className="animated fadeIn">

          <h1>Admin Dashboard</h1>
          <Row>
            <Col sm="3">
              <Card body className="text-center">
                <CardHeader tag="h4" style={{ background: "#c0bce3" }}>EMPLOYEES</CardHeader>
                <CardBody>
                  <CardText tag="h6">The total number of employees work in your organization is : 50.</CardText>
                  <Link to="/employeeList"><Button color="primary">VIEW</Button></Link>
                </CardBody>
              </Card>
            </Col>
            <Col sm="3">
              <Card body className="text-center">
                <CardHeader tag="h4" style={{ background: "#c0bce3" }}>HR/MANAGER</CardHeader>
                <CardBody>
                  <CardText tag="h6">The total number of HR/MANAGERS work in your organization is : 4.</CardText>
                  <Button color="primary">VIEW</Button>
                </CardBody>
              </Card>
            </Col>
            {/* <Col sm="3">
            <Card body className="text-center">
              <CardHeader tag="h4" style={{ background: "#c0bce3" }}>LEAVE TYPES</CardHeader>
              <CardBody>
                <CardText tag="h6">Total number of leave types specified is : 2</CardText>
                <Link to="/leaveTypeList"><Button color="primary">VIEW</Button></Link>
              </CardBody>
            </Card>
          </Col> */}
            <Col sm="3">
              <Card body className="text-center">
                <CardHeader tag="h4" style={{ background: "#c0bce3" }}>HOLIDAYS</CardHeader>
                <CardBody>
                  <CardText tag="h6">The company granted holidays per year is : 13</CardText>
                  <Link to="/companyHolidayList"><Button color="primary">VIEW</Button></Link>
                </CardBody>
              </Card>
            </Col>
          </Row >
        </div >
      )
    } else if (role === "Hr") {
      return (
        <div>
          {/* <Row>
            <Col xs="12" sm="6" md="3">
              <Card className="text-white bg-info">
                <CardHeader>
                  <b>Total Employees</b>
                </CardHeader>
                <CardBody>
                  <h1>50</h1>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" sm="6" md="6">
            </Col>

            <Col xs="12" sm="6" md="3">
              <Card className="text-white bg-info">
                <CardHeader>
                  <b>Total Leaves</b>
                </CardHeader>
                <CardBody>
                  <h1>5</h1>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
          <h1>Hr Dashboard</h1>
        </div>
      )
    } else {
      return (
        <div>
          {/* <Row>
            <Col xs="12" sm="6" md="3">
              <Card className="text-white bg-info">
                <CardHeader>
                  <b>Total Employees</b>
                </CardHeader>
                <CardBody>
                  <h1>50</h1>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" sm="6" md="6">
            </Col>

            <Col xs="12" sm="6" md="3">
              <Card className="text-white bg-info">
                <CardHeader>
                  <b>Total Leaves</b>
                </CardHeader>
                <CardBody>
                  <h1>5</h1>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
          <h1>Employee Dashboard</h1>
        </div>
      )
    }

  }
}

const mapStateToProps = (reduxState) => {
  const data = reduxState.auth;
  return { data };
};

export default connect(mapStateToProps, null)(Dashboard);
