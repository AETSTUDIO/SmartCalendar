import React, { Component } from "react";
import { Form, Radio } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddLeave extends Component {
    state = {
        startDate: new Date(),
        endDate: new Date(),
        leaveType: 1
    }

    handleStDate = (date) => {
        this.setState({ startDate: date }, () => {
            if (this.state.endDate < this.state.startDate) {
                this.setState({ endDate: this.state.startDate }, () => this.props.onEndDateChange(this.state.endDate));
            }
            this.props.onStDateChange(this.state.startDate);
        });
    }

    handleEndDate = (date) => {
        if (date >= this.state.startDate) {
            this.setState({ endDate: date }, () => this.props.onEndDateChange(this.state.endDate));
        } else {
            this.setState({ endDate: this.state.startDate }, () => this.props.onEndDateChange(this.state.endDate));
        }
    }

    onFormChange = (e, { value }) => {
        this.setState({ leaveType: value }, () => this.props.onTypeChange(this.state.leaveType));
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group inline>
                        <label>Leave Type</label>
                        <Form.Field
                            control={Radio}
                            label='Sick'
                            value={1}
                            checked={this.state.leaveType === 1}
                            onChange={this.onFormChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Casual'
                            value={2}
                            checked={this.state.leaveType === 2}
                            onChange={this.onFormChange}
                        />
                    </Form.Group>

                    <Form.Group inline>
                        <Form.Field>
                            <label>Start Date</label>
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                onChange={this.handleStDate}
                                selected={this.state.startDate}
                                tabIndex={1}
                                minDate={new Date()}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>End Date</label>
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                onChange={this.handleEndDate}
                                selected={this.state.endDate}
                                tabIndex={1}
                                minDate={new Date()}
                            />
                        </Form.Field>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}
export default AddLeave;