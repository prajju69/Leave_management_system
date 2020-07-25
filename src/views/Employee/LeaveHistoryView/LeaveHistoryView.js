import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class LeaveHistoryView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List: [
                {
                    "SL NO": 1,
                    "Form_Date": "03-03-2020",
                    "To_Date": "01-03-2020",
                    "Applied_On": "1-03-2020",
                    "days": 2,
                    "status": "Accepted"
                },
                {
                    "SL NO": 1,
                    "Form_Date": "05-03-2020",
                    "To_Date": "08-03-2020",
                    "Applied_On": "1-03-2020",
                    "days": 3,
                    "status": "Rejected"
                },

            ]
        }}

    render() {
        return (
            <div>
                <h4>LIST OF LEAVES HISTORY</h4>
                <br />
                <br />
                <div>
                    <BootstrapTable data={this.state.List} >
                        <TableHeaderColumn dataField='SL NO' dataFormat={this.indexN} isKey>SL. NO</TableHeaderColumn>
                        <TableHeaderColumn dataField='Form_Date'>FORM DATE</TableHeaderColumn>
                        <TableHeaderColumn dataField='To_Date'>TO DATE</TableHeaderColumn>
                        <TableHeaderColumn dataField='Applied_On'>APPLIED ON</TableHeaderColumn>
                        <TableHeaderColumn dataField='days'>No. of Days</TableHeaderColumn>
                        <TableHeaderColumn dataField='status'>STATUS</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        )
    }
}
export default LeaveHistoryView;