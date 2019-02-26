import React from "react";
import { Form, Select, Input } from "semantic-ui-react";


const AddShift = props => {
    const shiftOptions = [
        { key: '1', text: '8:00am - 4:00pm', value: '1' },
        { key: '2', text: '9:00am - 5:00pm', value: '2' },
        { key: '3', text: '10:00am - 6:00pm', value: '3' }
    ];
    const dayOptions = [
        { key: '1', text: 'Monday', value: 'Monday' },
        { key: '2', text: 'Tuesday', value: 'Tuesday' },
        { key: '3', text: 'Wednesday', value: 'Wednesday' },
        { key: '3', text: 'Thursday', value: 'Thursday' },
        { key: '3', text: 'Friday', value: '5' },
    ];

    return (
        <div>
            <Form>
                <Form.Group widths="equal">
                    <Form.Field
                        control={Select}
                        name="selectedDay"
                        label="Available Day"
                        options={dayOptions}
                        placeholder="Select Available Day"
                        onChange={props.onFormChange}
                    />
                    <Form.Field
                        control={Select}
                        name="selectedShift"
                        label="Available Shift"
                        options={shiftOptions}
                        placeholder="Select Available Shift"
                        onChange={props.onFormChange}
                    />
                </Form.Group>
                
                
                
            </Form>
        </div>
    );
};

export default AddShift;
