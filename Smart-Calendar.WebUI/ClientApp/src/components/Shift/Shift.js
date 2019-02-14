import React from "react";
import { List } from "semantic-ui-react";

const Shift = props => (
  <List bulleted>
    {props.userShift.map(shift => (
      <List.Item key={shift.userShiftId}>
        <List.Header>{shift.day}</List.Header>
        {shift.shift.startTime} - {shift.shift.endTime}
      </List.Item>
    ))}
  </List>
);

export default Shift;
