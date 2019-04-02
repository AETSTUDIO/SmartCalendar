import React from "react";
import { Form, Select, Input, Label } from "semantic-ui-react";


const AddUserInfo = props => {

    const genderOptions = [
        { key: 'm', text: 'Male', value: 'Male' },
        { key: 'f', text: 'Female', value: 'Female' }
    ];
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
                        control={Select}
                        search
                        selection
                        name="selectedAccountId"
                        label="Employee Email Account"
                        options={props.accounts.map(acc => ({ key: acc.accountId, text: acc.email, value: acc.accountId }))}
                        placeholder="Select an Account"
                        onChange={props.onFormChange}
                    />

                    <Form.Field
                        control={Input}
                        name="firstName"
                        label="First name"
                        placeholder="First Name"
                        onChange={props.onFormChange}
                    />

                    <Form.Field
                        control={Input}
                        name="lastName"
                        label="Last name"
                        placeholder="Last Name"
                        onChange={props.onFormChange}
                    />
                </Form.Group>
                {props.formControls.showFormNotice &&
                    <Form.Group widths="equal">
                        <Form.Field>
                            {!props.formControls.selectedAccountId.value && <Label basic color="red" pointing>{props.formControls.selectedAccountId.error}</Label>}
                        </Form.Field>
                        <Form.Field>
                        {!props.formControls.firstName.valid && <Label basic color="red" pointing>{props.formControls.firstName.error}</Label>}
                        </Form.Field>
                        <Form.Field>
                        {!props.formControls.lastName.valid && <Label basic color="red" pointing>{props.formControls.lastName.error}</Label>}
                        </Form.Field>
                    </Form.Group>
                }
                <Form.Group widths="equal">
                    <Form.Field
                        control={Select}
                        name="selectedGender"
                        label="Gender"
                        options={genderOptions}
                        placeholder="Gender"
                        onChange={props.onFormChange}
                    />

                    <Form.Field
                        control={Select}
                        name="selectedDept"
                        label="Department"
                        options={deptOptions}
                        placeholder="Department Name"
                        onChange={props.onFormChange}
                    />
                    <Form.Field
                        control={Select}
                        name="selectedPos"
                        label="Position"
                        options={posOptions}
                        placeholder="Position Name"
                        onChange={props.onFormChange}
                    />
                </Form.Group>
                {props.formControls.showFormNotice &&
                    <Form.Group widths="equal">
                        <Form.Field>
                        {!props.formControls.selectedGender.value && <Label basic color="red" pointing>{props.formControls.selectedGender.error}</Label>}
                        </Form.Field>
                        <Form.Field>
                        {!props.formControls.selectedDept.value && <Label basic color="red" pointing>{props.formControls.selectedDept.error}</Label>}
                        </Form.Field>
                        <Form.Field>
                        {!props.formControls.selectedPos.value && <Label basic color="red" pointing>{props.formControls.selectedPos.error}</Label>}
                        </Form.Field>
                    </Form.Group>
                }
            </Form>
        </div>
    );
};

export default AddUserInfo;
