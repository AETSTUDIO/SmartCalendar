import React from "react";
import { List } from "semantic-ui-react";


const Shift = props => (
    <List bulleted>
    {props.userShifts.map(shift => (
        <List.Item key={shift.userShiftId}>
            <List.Header>{shift.day}</List.Header>
                {shift.shift.timeSlot}
        </List.Item>
    ))}
    </List>
);


export default Shift;
