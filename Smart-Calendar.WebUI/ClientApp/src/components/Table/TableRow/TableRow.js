import React from "react";
import { Table, ButtonGroup } from "semantic-ui-react";
import Shift from "../../Shift/Shift";
import ModalUI from "../../UI/ModalUI"

const TableRow = props => {
  return (
    <Table.Row>
      <Table.Cell>{props.user.firstName}</Table.Cell>
      <Table.Cell>{props.user.lastName}</Table.Cell>
      <Table.Cell>{props.user.gender}</Table.Cell>
      <Table.Cell>{props.user.department.deptName}</Table.Cell>
      <Table.Cell>{props.user.position.posName}</Table.Cell>
      <Table.Cell>
        <Shift userShift={props.user.userShift} />
      </Table.Cell>
      <Table.Cell>
        <ButtonGroup>
          <ModalUI icon="edit" header="Edit Staff">
            <h3>Edit Staff</h3>
          </ModalUI>
          <ModalUI icon="remove user" header="Delete Staff" deleteUser={props.deleteUser}>
            <h3>Delete all information about {props.user.firstName} {props.user.lastName}?</h3>
          </ModalUI>
        </ButtonGroup>
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRow;