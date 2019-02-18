import React, { Component } from "react";
import { Table, Loader } from "semantic-ui-react";
import TableRow from "../../components/Table/TableRow/TableRow";
import axios from "axios";

class StaffTable extends Component {
    state = {
        users: null
    };

    componentDidMount() {
        axios
            .get("https://localhost:44314/api/calendar/user")
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    deleteUser = id => {
        axios
            .delete("https://localhost:44314/api/calendar/user/" + id)
          .then(response => {
            let newUsers=this.state.users.filter(user => user.id !== id);
            this.setState({ users: newUsers });
          })
          .catch(error => {
            console.log(error);
          });
    };

    render() {
        let table = <Loader active inline="centered" size="massive" />;
        if (this.state.users) {
            table = (
                <Table celled striped size="large" color="grey">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                                <h3>First Name</h3>
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                <h3>Last Name</h3>
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                <h3>Gender</h3>
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                <h3>Department</h3>
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                <h3>Position</h3>
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                <h3>Shift Info</h3>
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                <h3>Action</h3>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.state.users.map(user => (
                            <TableRow
                                key={user.id}
                                user={user}
                                deleteUser={() => this.deleteUser(user.id)}
                            />
                        ))}
                    </Table.Body>

                    {/* <Table.Footer>
            <Table.Row>
              <Table.HeaderCell>Total</Table.HeaderCell>
              <Table.HeaderCell>100 Staffs</Table.HeaderCell>
            </Table.Row>
              </Table.Footer> */}
                </Table>
            );
        }

        return <div>{table}</div>;
    }
}

export default StaffTable;
