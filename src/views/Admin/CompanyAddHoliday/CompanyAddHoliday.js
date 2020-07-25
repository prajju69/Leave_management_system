import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import { Button, Form, Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { addHoliday } from '../../../redux/actions/authActions';

class CompanyAddHoliday extends Component {
    constructor(props) {
        super(props)

        this.state = {
            holiday_name: '',
            holiday_date: '',
            holiday_day: '',
            is_opional: false,
            msg: ''
        }
    }

    onHandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandle = (e) => {
        e.preventDefault();
        const holidaydata = {
            holiday_name: this.state.holiday_name,
            holiday_date: this.state.holiday_date,
            holiday_day: this.state.holiday_day,
            is_opional: this.state.is_opional
        }
        console.log("aass", holidaydata);
        this.props.addHoliday(holidaydata)
            .then((res) => {
                this.setState({ msg: res.data.message })
                setTimeout(() => { this.props.history.push('/dashboard'); }, 2000);
            })
            .catch((err) => {
                console.log('err', err);
            })
    }

  
    render() {
        return (
            <div className="flex-container">
                <Col xs="8">
                    <Form id="Leaves" onSubmit={this.onSubmitHandle}>
                        <Row>
                            <Col style={{ backgroundColor: '#5dd9d1', borderRadius: 4, marginBottom: 15, textAlign: 'center' }}>
                                <h3>Add Holiday</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3" style={{ backgroundColor: '#d0d8d7', borderRadius: 4, marginBottom: 15 }}>
                                <Label><strong>Holiday Name</strong></Label>
                            </Col>
                            <Col>
                                <Input type="text"
                                    name="holiday_name"
                                    onChange={this.onHandleChange}
                                    placeholder="Ex:Holi" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3" style={{ backgroundColor: '#d0d8d7', borderRadius: 4, marginBottom: 15 }}>
                                <Label><strong>Holiday Date</strong></Label>
                            </Col>
                            <Col>
                                <Input type="date"
                                    name="holiday_date"
                                    onChange={this.onHandleChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3" style={{ backgroundColor: '#d0d8d7', borderRadius: 4, marginBottom: 15 }}>
                                <Label><strong>Holiday Day</strong></Label>
                            </Col>
                            <Col>
                                <Input type="text"
                                    name="holiday_day"
                                    onChange={this.onHandleChange}
                                    placeholder="Enter Day" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3" style={{ backgroundColor: '#d0d8d7', borderRadius: 4, marginBottom: 15 }}>
                                <Label><strong>Is Optional ?</strong></Label>
                            </Col>
                            <Col>
                                <Input type="select"
                                    name="is_opional"
                                    onChange={this.onHandleChange}>
                                    <option value="">Select</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </Input>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ size: 3, offset: 6 }}>
                                <Button type="submit" color="primary">
                                    <strong>Add Holiday</strong>
                                </Button>
                            </Col>
                        </Row>
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
                </Col>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { data: state }
}

export default connect(mapStateToProps, { addHoliday })(CompanyAddHoliday);

