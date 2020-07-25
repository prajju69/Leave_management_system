import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEmployee, deleteEmployee } from '../../../redux/actions/employeeAction';

class EmployeeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }

    componentDidMount = () => {
        this.props.getEmployee();
    }

    edit = (e) => {
        console.log("edit", e);
        this.props.history.push(`/editEmployee/${e}`);
    }

    delete = (id) => {
        console.log("delete", id);
        if (window.confirm('Are you sure!!! you wish to delete this item?')) {
            this.props.deleteEmployee(id)
                .then((res) => {
                    alert("Employee Deleted Successfully");
                    this.props.getEmployee();
                }).catch((err) => {
                    console.log('err', err);
                    alert("Something went wrong");
                })
        }
        else {
            console.log("not deleted");
        }
    }

    viewInfo = (e) => {
        console.log("viewInfo", e);
    }

    view = (cell, row) => {
        return (
            <div>
                <span>

                    <Link to={{ pathname: 'viewEmployee/' + row.id }}><button type="button" value={row.id} className="btn btn-success" style={{ marginLeft: '5px', paddingLeft: '10px', paddingRight: '10px' }} >View Details</button></Link>
                    <button className="btn btn-primary" onClick={(e) => this.edit(row.id)} style={{ marginLeft: '5px', paddingLeft: '10px', paddingRight: '10px' }}><i className="fa fa-edit i-icon" aria-hidden="true" ></i></button>
                    <button className="btn btn-danger" onClick={(e) => this.delete(row.id)} style={{ marginLeft: '5px', paddingLeft: '10px', paddingRight: '10px' }}><i className="fa fa-trash i-icon" aria-hidden="true" ></i></button>
                </span>
            </div>
        )
    }

    render() {
     
        return (
            <div>
                <div>
                    <h4>VIEW ALL EMPLOYEES</h4>
                </div>
                <div>
                
                    <BootstrapTable data={this.props.data.employee.employees.data} striped search pagination bordered hover condensed options={{ noDataText: 'Employee is Empty..' }}>
                       
                        <TableHeaderColumn width='70' isKey dataField='empId'>Emp.ID</TableHeaderColumn>
                        <TableHeaderColumn width='110' dataField='first_name'>First name</TableHeaderColumn>
                        <TableHeaderColumn width='110' dataField='last_name'>Last name</TableHeaderColumn>
                        <TableHeaderColumn width='90' dataField='emp_type'>Emp Type</TableHeaderColumn>
                        <TableHeaderColumn width='140' dataField='email'>E-mail</TableHeaderColumn>
                        <TableHeaderColumn width='150' dataField='id,id' headerAlign='center' dataFormat={this.view} dataAlign='center'>Action</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => { console.log('heyy',reduxState)  
    return { data: reduxState }
}

export default connect(mapStateToProps, { getEmployee, deleteEmployee })(EmployeeList);

