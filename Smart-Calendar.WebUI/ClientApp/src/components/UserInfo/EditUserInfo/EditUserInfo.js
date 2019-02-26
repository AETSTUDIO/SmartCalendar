import React from "react";
import { Form, Select, Input } from "semantic-ui-react";
import Shift from "../../Shift/Shift";
import AddShift from "../../Shift/AddShift/AddShift";

const EditUserInfo = props => {
    const deptOptions = [
        { key: 'it', text: 'IT', value: '1' },
        { key: 'marketing', text: 'Marketing', value: '2' },
        { key: 'accounting', text: 'Accounting', value: '3' }
    ];
    const posOptions = [
        { key: 'manager', text: 'Manager', value: '1' },
        { key: 'lead', text: 'Lead', value: '2' },
        { key: 'member', text: 'Member', value: '3' }
    ];
    return (
        <div>
            <h4>{props.user.firstName} {props.user.lastName}</h4>
            <Form>
                <Form.Group widths="equal">

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
               
                <h4>Shift Infomation</h4>
                <Shift userShifts={props.user.userShifts} />
                <AddShift />
            </Form>
           
        </div>
    );
};

export default EditUserInfo;
