import React, { Component } from "react";
import { Table, Button, ButtonGroup, Form, Radio } from "semantic-ui-react";
import moment from 'moment';
import ModalUI from "../../components/UI/ModalUI";

class LeaveTableRow extends Component {
    state = {
        showForm: false,
        leaveStatus: this.props.leaveData.status === 1 ? "Approved" : this.props.leaveData.status === 2 ? "Rejected" : "Pending"
    }

    toggleForm = () => {
        this.setState({ showForm: true });
    }

    handleChange = (e, { value }) => {
        this.setState({
            leaveStatus: value,
            showForm: false
        }, () => {
            let updatedRow = {
                leaveRequestId: this.props.leaveData.leaveRequestId,
                startDate: this.props.leaveData.startDate,
                endDate: this.props.leaveData.endDate,
                leaveCategoryId: this.props.leaveData.leaveCategoryId,
                userId: this.props.leaveData.userId,
                isApproved: this.state.leaveStatus
            };
            this.props.updateLeaveInfo(updatedRow);
        });
    }

    render() {
        let startDate = moment(this.props.leaveData.startDate);
        let endDate = moment(this.props.leaveData.endDate);
        let days = endDate.diff(startDate, "days") + 1;
        let positive = this.state.leaveStatus === "Approved";
        let negative = this.state.leaveStatus === "Rejected";
        let warning = this.state.leaveStatus === "Pending";
        let form = this.props.isDisplay ?
            (<React.Fragment>
                <Form.Group>
                    <Form.Field
                        control={Radio}
                        label='Approved'
                        name='check'
                        value="Approved"
                        checked={this.state.leaveStatus === 'Approved'}
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={Radio}
                        label='Rejected'
                        name='check'
                        value="Rejected"
                        checked={this.state.leaveStatus === 'Rejected'}
                        onChange={this.handleChange}
                    />
                </Form.Group>
            </React.Fragment>) : this.state.leaveStatus;

        return (
            <Table.Row>
                <Table.Cell>{this.props.leaveData.userName.charAt(0).toUpperCase() + this.props.leaveData.userName.slice(1)}</Table.Cell>
                <Table.Cell>{this.props.leaveData.dept}</Table.Cell>
                <Table.Cell>{this.props.leaveData.leavetype}</Table.Cell>
                <Table.Cell>{startDate.format('DD/MM/YYYY')}</Table.Cell>
                <Table.Cell>{endDate.format('DD/MM/YYYY')}</Table.Cell>
                <Table.Cell>{days}</Table.Cell>
                {!this.state.showForm ?
                    <Table.Cell positive={positive} negative={negative} warning={warning} >{this.state.leaveStatus}
                        {this.props.isDisplay && <ButtonGroup >
                            <Button icon="edit" basic onClick={this.toggleForm} />
                        </ButtonGroup>}
                    </Table.Cell> :
                    <Table.Cell>{form}</Table.Cell>
                }
                {this.props.isDisplay && <Table.Cell>
                    <ButtonGroup >
                        <ModalUI modalSize="tiny" basic icon="trash alternate outline"
                            header="Delete Leave Record"
                            deleteLeaveInfo={this.props.deleteLeaveInfo}
                            formvalid
                            reset={() => null}
                        >
                            <h3>Do you want to Delete the Leave Record?</h3>
                            <h4>Deleted record CAN NOT be recovered!</h4>
                        </ModalUI>
                    </ButtonGroup>
                </Table.Cell>}
            </Table.Row>
        );
    }
}

export default LeaveTableRow;