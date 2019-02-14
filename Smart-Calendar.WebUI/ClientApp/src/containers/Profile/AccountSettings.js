import React, { Component } from "react";
import { Form, Input, Select } from "semantic-ui-react";

class AccountSettings extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="First name"
              placeholder="First Name"
            />
            <Form.Field
              control={Input}
              label="Last name"
              placeholder="Last Name"
            />
            <Form.Field
              control={Input}
              label="Password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Email"
              placeholder="Email"
            />
            <Form.Field
              control={Input}
              label="Phone Number"
              placeholder="Phone Number"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default AccountSettings;
