import React, { Component } from "react";
import { Form, Select } from "semantic-ui-react";

class AddShift extends Component {
  
  render() {
    return (
      <div>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Select}
              label="Staff Name"
              //options={Staffs}
              placeholder="Staff Name"
            />
          </Form.Group>
          <h3>Add Shift Configuration Component Here</h3>
        </Form>
      </div>
    );
  }
}

export default AddShift;
