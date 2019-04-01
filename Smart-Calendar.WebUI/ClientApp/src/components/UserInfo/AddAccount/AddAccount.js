import React from "react";
import { Form, Input, Select, Label } from "semantic-ui-react";

const AddAccount = props => {
    const roleOptions = [
        { key: 'a', text: 'Admin', value: '1' },
        { key: 'm', text: 'Member', value: '2' }
    ];
    
    return (
        <div>
            <Form>
                <Form.Group widths="equal">
                    <Form.Field
                        control={Input}
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={props.onFormChange}
                    />
                    <Form.Field
                        control={Input}
                        label="Password"
                        name='password'
                        type="password"
                        placeholder="Password"
                        onChange={props.onFormChange}
                    />
                    <Form.Field
                        control={Select}
                        label="Role"
                        name='roleId'
                        options={roleOptions}
                        placeholder="Role Name"
                        onChange={props.onFormChange}
                    />
                </Form.Group>
                {props.formControls.showFormNotice && 
                    <Form.Group widths="equal">
                        <Form.Field>
                        {!props.formControls.email.valid && <Label basic color="red" pointing>{props.formControls.email.error}</Label> }
                        {props.formControls.duplicatedEmail && <Label basic color="red" pointing>Email already registered</Label>}
                        </Form.Field>
                        <Form.Field>
                        {!props.formControls.password.valid && <Label basic color="red" pointing>{props.formControls.password.error}</Label>}
                        </Form.Field>
                        <Form.Field>
                        {!props.formControls.roleId.value && <Label basic color="red" pointing>{props.formControls.roleId.error}</Label>}
                        </Form.Field>
                    </Form.Group>}
            </Form>
        </div>
    );
};


export default AddAccount;
