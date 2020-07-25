import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export default class LeaveStatus extends Component {

    constructor(props) {
        super(props)
        this.state = {
            LeaveDetails: [
                {
                    id: 1,
                    fromDate: '21/12/2019',
                    toDate: '23/12/2019',
                    days: 3,
                    appliedDate: '10/12/2019',
                    status: 'Accepted',
                },
                {
                    id: 2,
                    fromDate: '21/12/2019',
                    toDate: '23/12/2019',
                    days: 3,
                    appliedDate: '10/12/2019',
                    status: 'Rejected',
                },
                {
                    id: 3,
                    fromDate: '21/12/2019',
                    toDate: '23/12/2019',
                    days: 2,
                    appliedDate: '10/12/2019',
                    status: 'Pending',
                },

            ]

        }
    }


    cancel = (cell, row) => {
        return (
            <div>
                <span>
                    <button type="button" value={row.id} className="btn btn-success" data-toggle="modal" data-target={"#active" + row._id} style={{ marginLeft: '5px', paddingLeft: '10px', paddingRight: '10px' }} >Leave Cancel</button>
                </span>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Leave Status</h1>
                <BootstrapTable data={this.state.LeaveDetails} striped search pagination bordered hover condensed options={{ noDataText: 'Leave Table is Empty..' }}>
                    <TableHeaderColumn width='50' isKey dataField='id' hidden>Sl No.</TableHeaderColumn>
                    <TableHeaderColumn width='100' dataField='fromDate'>From Date</TableHeaderColumn>
                    <TableHeaderColumn width='100' dataField='toDate'>To Date</TableHeaderColumn>
                    <TableHeaderColumn width='100' dataField='days'>No. of Days</TableHeaderColumn>
                    <TableHeaderColumn width='120' headerAlign='center' dataAlign='center' dataField='appliedDate'>Applied ON</TableHeaderColumn>
                    <TableHeaderColumn width='100' aderAlign='center' dataField='status' dataAlign='center'> Current Status</TableHeaderColumn>
                    <TableHeaderColumn width='80' dataField='id,id' headerAlign='center' dataFormat={this.cancel} dataAlign='center'>Action</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}
