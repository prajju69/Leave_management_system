import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class LeaveTypesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List: [
                { "id": 1, "leave_type": "CASUAL LEAVES", "short_name": "CL" },
                { "id": 2, "leave_type": "SICK LEAVES", "short_name": "SL" }
            ]
        }
    }

    action = (cell, Row) => {
        return (<div><Link>Edit</Link> | <Link>Delete</Link></div>)
    }

    render() {
        return (
            <div>
                <div>
                    <h4>All Leave Types</h4>
                </div>
                <div>
                    <BootstrapTable data={this.state.List} striped search pagination bordered hover condensed options={{ noDataText: 'Table is Empty..' }}>
                        <TableHeaderColumn dataField='id' isKey dataField='id'>SL. NO</TableHeaderColumn>
                        <TableHeaderColumn dataField='leave_type'>Leave Type</TableHeaderColumn>
                        <TableHeaderColumn dataField='short_name'>Short Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='' dataFormat={this.action}>Action</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                {/* <div class="flex-container">
                    <Button color="success">Add Leave Type</Button>
                </div> */}

            </div>
        )
    }
}
export default LeaveTypesList;