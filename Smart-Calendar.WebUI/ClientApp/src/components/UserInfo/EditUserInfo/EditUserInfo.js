import React, { Component } from "react";
import { Form, Select, Input } from "semantic-ui-react";
import Shift from "../../Shift/Shift";


class EditUserInfo extends Component {
    state = {
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        departmentId: "",
        positionId: "",
        userShifts: this.props.user.userShifts
    }

    onFormChange = (e, { name, value }) => {
        this.setState({ [name]: value }, ()=> this.props.getUpdatedUser(this.state));
    };

    render() {
        const deptOptions = [
            { key: 'it', text: 'IT', value: 1 },
            { key: 'marketing', text: 'Marketing', value: 2 },
            { key: 'accounting', text: 'Accounting', value: 3 }
        ];
        const posOptions = [
            { key: 'manager', text: 'Manager', value: 1 },
            { key: 'lead', text: 'Lead', value: 2 },
            { key: 'member', text: 'Member', value: 3 }
        ];
        return (
            
            <div>
                
                <Form>
                    <Form.Group widths="equal">
                        <Form.Field
                            control={Input}
                            label='First Name'
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.onFormChange}
                        />
                        <Form.Field
                            control={Input}
                            label='Last Name'
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.onFormChange}
                        />
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Field
                            control={Select}
                            name="departmentId"
                            label="Department"
                            options={deptOptions}
                            defaultValue={this.props.user.departmentId}
                            onChange={this.onFormChange}
                        />
                        <Form.Field
                            control={Select}
                            name="positionId"
                            label="Position"
                            options={posOptions}
                            defaultValue={this.props.user.positionId}
                            onChange={this.onFormChange}
                        />
                    </Form.Group>
                    <h4>User Shifts</h4>
                    <Shift userShifts={this.state.userShifts} editable={true}/>
                </Form>
            </div>
        );
    }
}


export default EditUserInfo;
