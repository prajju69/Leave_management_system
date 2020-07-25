import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class LeaveRequestList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            LeaveDetails: [
                {

                    id: 1,
                    requestedBy: 'Mahantesh',
                    leaveDate: '21/12/2019',
                    leaveReason: 'Festival',
                    AppliedOn: '28/11/2019',
                    status: 'pending',
                    leaveType: ' earned leave',
                },
                {
                    id: 2,
                    requestedBy: 'Ramesh',
                    leaveDate: '1/01/2020',
                    leaveReason: 'Newyear',
                    AppliedOn: '28/12/2019',
                    status: 'pending',
                    leaveType: ' earned leave',
                },
                {
                    id: 3,
                    requestedBy: 'Rachan',
                    leaveDate: '08/06/2018',
                    leaveReason: 'Festival',
                    AppliedOn: '02/06/2018',
                    status: 'pending',
                    leaveType: ' earned leave',
                },

            ]
        }
    }


    cancel = (cell, row) => {
        return (
            <div>
                <span>
                    <button type="button" value={row.id} className="btn btn-success" data-toggle="modal" data-target={"#active" + row._id} style={{ marginLeft: '5px', paddingLeft: '10px', paddingRight: '10px' }} >View</button>
                </span>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Leave Request List</h1>
                <br></br>
                <BootstrapTable data={this.state.LeaveDetails}>
                    <TableHeaderColumn width='50' isKey dataField='id' hidden>Sl No.</TableHeaderColumn>
                    <TableHeaderColumn width='100' dataField='requestedBy'>RequestedBy</TableHeaderColumn>
                    <TableHeaderColumn width='100' dataField='leaveDate'>LeaveDate</TableHeaderColumn>
                    <TableHeaderColumn width='60' dataField='leaveType'>LeaveType</TableHeaderColumn>
                    <TableHeaderColumn width='60' dataField='leaveReason'>LeaveReason</TableHeaderColumn>
                    <TableHeaderColumn width='100' dataField='AppliedOn'>AppliedON</TableHeaderColumn>
                    <TableHeaderColumn width='100' aderAlign='center' dataField='status' dataAlign='center'> Current Status</TableHeaderColumn>
                    <TableHeaderColumn width='80' dataField='id,id' headerAlign='center' dataFormat={this.cancel} dataAlign='center'>Action</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}
