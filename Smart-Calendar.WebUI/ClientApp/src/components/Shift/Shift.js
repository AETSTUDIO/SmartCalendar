import React from "react";
import { List } from "semantic-ui-react";
import AddShift from "../Shift/AddShift/AddShift";


const Shift = props => (
    !props.editable ?
        <List bulleted>
            {props.userShifts.map(shift => (
                <List.Item key={shift.userShiftId}>
                    <List.Header>{shift.day}</List.Header>
                    {shift.shift.timeSlot}
                </List.Item>
            ))}
        </List >
        :
        <React.Fragment>
        <List horizontal>
            {props.userShifts.map(shift => (
                <List.Item key={shift.userShiftId}>
                    <List.Header>{shift.day}</List.Header>
                    {shift.shift.timeSlot}
                </List.Item>
                ))}
                <List.Item>
                    <AddShift />
                </List.Item>
        </List >
        </React.Fragment>
);


export default Shift;
