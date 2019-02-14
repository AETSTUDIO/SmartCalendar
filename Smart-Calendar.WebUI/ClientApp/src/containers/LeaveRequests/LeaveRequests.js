import React, { Component } from "react";
import {Table,Checkbox} from "semantic-ui-react";

class LeaveRequests extends Component {
  render() {
    return (
      <div>
        <Table celled striped size="large" color="grey">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                <h3>Employee Name</h3>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <h3>Department</h3>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <h3>Leave Type</h3>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <h3>Start Date</h3>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <h3>End Date</h3>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <h3>No.of Days</h3>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <h3>Status</h3>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Terry</Table.Cell>
              <Table.Cell>IT</Table.Cell>
              <Table.Cell>Casual</Table.Cell>
              <Table.Cell>07-Jan-2019</Table.Cell>
              <Table.Cell>14-Jan-2019</Table.Cell>
              <Table.Cell>5</Table.Cell>
              <Table.Cell><Checkbox label='Approved' /></Table.Cell>
            </Table.Row>
          </Table.Body>

          {/* <Table.Footer>
          <Table.Row>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell>100 Staffs</Table.HeaderCell>
          </Table.Row>
        </Table.Footer> */}
        </Table>
      </div>
    );
  }
}

export default LeaveRequests;
