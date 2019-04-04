import React, { Component } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

class ModalUI extends Component {
    state = { open: false, dimmer: null };

    closeConfigShow = (closeOnEscape, closeOnDimmerClick, dimmer) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, dimmer, open: true });
    };

    confirm = () => {
        if (this.props.formvalid) {
            this.setState({ open: false });
            switch (this.props.header) {
                case "Delete Employee Info":
                    return this.props.deleteEmployeeInfo();
                case "Add Employee Info":
                    return this.props.addEmployeeInfo();
                case "Edit Employee Info":
                    return this.props.editEmployeeInfo();
                case "Create Account":
                    return this.props.addAccount();
                case "Account Settings":
                    return this.props.accountSettings();
                case "Personal Profile":
                    return this.props.personalProfile();
                case "Delete Leave Record":
                    return this.props.deleteLeaveInfo();
                case "Apply Leave":
                    return this.props.addLeaveInfo();
                case "Leave Request List":
                    return this.props.updateLeaveInfo();
                case "Sign In":
                    return this.props.signin();
                case "Sign Out":
                    return this.props.signout();
                default:
                    return null;
            }
        }
        this.props.showNotice();
    };

    cancel = () => {
        this.setState({ open: false });
        this.props.reset();
    };

    render() {
        const { open, dimmer, closeOnEscape, closeOnDimmerClick } = this.state;
        let trigger = this.props.trigger === "category" ? <span onClick={this.closeConfigShow(false, false, "blurring")}>{this.props.category}</span>
            : this.props.animated ?
                <Button animated="vertical"
                    circular={this.props.circular}
                    basic={this.props.basic}
                    inverted={this.props.inverted}
                    size={this.props.size}
                    floated={this.props.floated}
                    color={this.props.color}
                    onClick={this.closeConfigShow(false, false, "blurring")}
                >
                    <Button.Content visible>
                        {this.props.category}
                    </Button.Content>
                    <Button.Content hidden>
                        <Icon name={this.props.icon} />
                    </Button.Content>
                </Button> :
                <Button
                    basic={this.props.basic}
                    inverted={this.props.inverted}
                    color={this.props.color}
                    size={this.props.size}
                    icon={this.props.icon}
                    circular={this.props.circular}
                    floated={this.props.floated}
                    onClick={this.closeConfigShow(false, false, "blurring")}
                >{this.props.category}
                </Button>;
            

        return (
            <React.Fragment>
                {trigger}
                <Modal
                    dimmer={dimmer}
                    size={this.props.modalSize}
                    open={open}
                    closeOnEscape={closeOnEscape}
                    closeOnDimmerClick={closeOnDimmerClick}
                    onClose={this.close}
                >
                    <Modal.Header>{this.props.header}</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>{this.props.children}</Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.cancel} >Cancel</Button>
                        <Button primary onClick={this.confirm}>Done</Button>
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ModalUI;