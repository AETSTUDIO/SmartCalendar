import React, { Component } from "react";
import { Table, Loader, ButtonGroup } from "semantic-ui-react";
import _ from 'lodash';
import { connect } from "react-redux";
import TableRow from "../../components/Table/TableRow/TableRow";
import ModalUI from "../../components/UI/ModalUI";
import AddUserInfo from "../../components/UserInfo/AddUserInfo/AddUserInfo";
import { checkValidity } from "../../shared/validation";
import axios from "../../axios-api";

class StaffTable extends Component {
    state = {
        selectedAccountId: {
            value: null,
            validation: null,
            error: "Please select an user email",
            valid: false
        },
        firstName: {
            value: null,
            validation: {
                required: true
            },
            error: "Please enter first name",
            valid: false
        },
        lastName: {
            value: null,
            validation: {
                required: true
            },
            error: "Please enter last name",
            valid: false
        },
        selectedGender: {
            value: null,
            validation: null,
            error: "Please select gender",
            valid: false
        },
        selectedDept: {
            value: null,
            validation: null,
            error: "Please select Department",
            valid: false
        },
        selectedPos: {
            value: null,
            validation: null,
            error: "Please select position",
            valid: false
        },
        updatedUser: {
            firstName: null,
            lastName: null
        },
        showFormNotice: false,
        column: null,
        direction: null,
        data: this.props.users
    };

    handleSort = clickedColumn => () => {
        const { column, data, direction } = this.state;

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: 'ascending'
            });
            return;
        }

        this.setState({
            data: data.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending'
        });
    };

    onFormChange = (e, { name, value }) => {
        this.setState({
            [name]: {
                ...this.state[name],
                value: value,
                valid: checkValidity(
                    value,
                    this.state[name].validation
                )
            },
            showFormNotice: false
        });
    };

    showNotice = () => {
        this.setState({ showFormNotice: true });
    }

    addUserInfo = () => {
        const userInfo = {
            accountId: this.state.selectedAccountId.value,
            firstName: this.state.firstName.value,
            lastName: this.state.lastName.value,
            gender: this.state.selectedGender.value,
            departmentId: this.state.selectedDept.value,
            positionId: this.state.selectedPos.value
        };
        axios
            .post("calendar/user", userInfo)
            .then(response => {
                this.setState({ data: response.data.value });
            })
            .catch(error => {
                console.log(error);
            });
    }

    deleteUserInfo = id => {
        axios
            .delete("calendar/user/" + id)
            .then(response => {
                const newData = this.state.data.filter(user => user.id !== id);
                this.setState({ data: newData });
            })
            .catch(error => {
                console.log(error);
            });
    }

    editUserInfo = updatedUser => {
        axios.put("calendar/user/" + updatedUser.userId, updatedUser)
            .then(response => {
                this.setState({ data: response.data.value });
            }).catch(error => {
                console.log(error);
            });
    }

    getUpdatedUser = (updatedUser) => {
        this.setState({ updatedUser: updatedUser });
    }

    resetUserInfo = () => {
        this.setState({
            selectedAccountId: {
                value: null,
                validation: null,
                error: "Please select an user email",
                valid: false
            },
            firstName: {
                value: null,
                validation: {
                    required: true
                },
                error: "Please enter first name",
                valid: false
            },
            lastName: {
                value: null,
                validation: {
                    required: true
                },
                error: "Please enter last name",
                valid: false
            },
            selectedGender: {
                value: null,
                validation: null,
                error: "Please select gender",
                valid: false
            },
            selectedDept: {
                value: null,
                validation: null,
                error: "Please select Department",
                valid: false
            },
            selectedPos: {
                value: null,
                validation: null,
                error: "Please select position",
                valid: false
            },
            updatedUser: {
                firstName: null,
                lastName: null
            },
            showFormNotice: false,
            column: null,
            direction: null,
            data: this.props.users
        });
    }

    render() {
        let table = <Loader active inline="centered" size="massive" />;
        let isDisplay = this.props.roleId === "1";
        let addUserValid = this.state.selectedAccountId.value && this.state.selectedGender.value &&
            this.state.firstName.valid && this.state.lastName.valid &&
            this.state.selectedDept.value && this.state.selectedPos.value;
        let editUserValid = this.state.updatedUser.firstName && this.state.updatedUser.lastName;

        const { column, data, direction } = this.state;

        const availableAccounts = this.props.accounts.filter(account => data.every(user => user.accountId !== account.accountId));
        let filteredUsers = data.filter(user => user.firstName.toLowerCase().includes(this.props.searchField.toLowerCase()) ||
            user.lastName.toLowerCase().includes(this.props.searchField.toLowerCase()) ||
            user.gender.toLowerCase().includes(this.props.searchField.toLowerCase()) ||
            user.department.toLowerCase().includes(this.props.searchField.toLowerCase()) ||
            user.position.toLowerCase().includes(this.props.searchField.toLowerCase()) ||
            user.email.toLowerCase().includes(this.props.searchField.toLowerCase()));

        table = (
            <React.Fragment>
                <Table sortable celled striped size="large" >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell
                                sorted={column === 'firstName' ? direction : null}
                                onClick={this.handleSort('firstName')}
                            >
                                <h3>First Name</h3>
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'lastName' ? direction : null}
                                onClick={this.handleSort('lastName')}
                            >
                                <h3>Last Name</h3>
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'gender' ? direction : null}
                                onClick={this.handleSort('gender')}
                            >
                                <h3>Gender</h3>
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'department' ? direction : null}
                                onClick={this.handleSort('department')}
                            >
                                <h3>Department</h3>
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'position' ? direction : null}
                                onClick={this.handleSort('position')}
                            >
                                <h3>Position</h3>
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'email' ? direction : null}
                                onClick={this.handleSort('email')}
                            >
                                <h3>Email</h3>
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                <h3>Shift Info</h3>
                            </Table.HeaderCell>
                            {isDisplay && <Table.HeaderCell>
                                <h3>Action
                                   <ButtonGroup>
                                        <ModalUI basic icon="add" header="Add Employee Info" addEmployeeInfo={this.addUserInfo} formvalid={addUserValid} showNotice={this.showNotice} reset={this.resetUserInfo}>
                                            <AddUserInfo accounts={availableAccounts} onFormChange={this.onFormChange} formControls={this.state} />
                                        </ModalUI>
                                    </ButtonGroup>
                                </h3>
                            </Table.HeaderCell>}
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {filteredUsers.map(user => (
                            <TableRow
                                key={user.id}
                                user={user}
                                isDisplay={isDisplay}
                                deleteUserInfo={() => this.deleteUserInfo(user.id)}
                                onFormChange={this.onFormChange}
                                getUpdatedUser={this.getUpdatedUser}
                                editUserValid={editUserValid}
                                showNotice={this.showNotice}
                                showFormNotice={this.state.showFormNotice}
                                editUserInfo={() => this.editUserInfo(this.state.updatedUser)}
                                reset={this.resetUserInfo}
                            />
                        ))}
                    </Table.Body>
                </Table>
            </React.Fragment>
        );


        return <div>{table}</div>;
    }
}

const mapStateToProps = state => {
    return {
        searchField: state.staffTable.searchField,
        roleId: state.auth.roleId,
        accountId: state.auth.accountId
    };
};

export default connect(
    mapStateToProps,
    null
)(StaffTable);