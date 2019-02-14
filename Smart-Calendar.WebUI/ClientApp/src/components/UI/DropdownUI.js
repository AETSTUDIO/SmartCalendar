import React from "react";
import { Dropdown } from "semantic-ui-react";


const DropdownUI = props => {
  return (
    <Dropdown icon={props.icon} floating button basic className="icon">
      <Dropdown.Menu style={{ left: "auto", right: 0 }}>
        <Dropdown.Header icon={props.headerIcon} content={props.content} />
        <Dropdown.Divider />
        {props.children}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownUI;
