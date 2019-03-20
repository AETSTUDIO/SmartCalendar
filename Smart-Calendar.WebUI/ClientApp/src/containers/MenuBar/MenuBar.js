import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { Menu, Icon, Header, Input, Button, Dropdown } from "semantic-ui-react";
import ModalUI from "../../components/UI/ModalUI";
import AddAccount from "../../components/UserInfo/AddAccount/AddAccount";
import EditProfile from "../Profile/EditProfile";
import AccountSettings from "../Profile/AccountSettings";
import LeaveRequests from "../LeaveRequests/LeaveRequests";
import * as actions from "../../store/actions/index";
import { checkValidity } from "../../shared/validation";


class Menubar extends Component {
    state = {
        email: {
            value: null,
            validation: {
                required: true,
                isEmail: true
            },
            error: "Please enter a valid email",
            valid: false
        },
        password: {
            value: null,
            validation: {
                required: true,
                minLength: 4
            },
            error: "Password must be greater than or equal to 4 digits",
            valid: false
        },
        roleId: {
            value: null,
            validation: null,
            error: "Please select a role",
            valid: false
        },
        showFormNotice: false,
        duplicatedEmail: false
    }

    handleFormChange = (e, { name, value }) => {
        this.setState({
            [name]: {
                ...this.state[name],
                value: value,
                valid: checkValidity(
                    value,
                    this.state[name].validation
                )
            },
            showFormNotice: false
        }, () => {
            if (!this.props.accounts.every(account => account.email !== this.state.email.value)) {
                this.setState({ duplicatedEmail: true });
            }
        });

    }

    addAccount = () => {
        console.log("add");
        let newAccount = {
            email: this.state.email.value,
            password: this.state.password.value,
            roleId: this.state.roleId.value
        };
        this.props.onAddAccount(newAccount);
    }

    showNotice = () => {
        this.setState({ showFormNotice: true });
    }

    resetState = () => {
        this.setState({
            email: {
                value: null,
                validation: {
                    required: true,
                    isEmail: true
                },
                error: "Please enter a valid email",
                valid: false
            },
            password: {
                value: null,
                validation: {
                    required: true,
                    minLength: 4
                },
                error: "Password must be greater than or equal to 4 digits",
                valid: false
            },
            roleId: {
                value: null,
                validation: null,
                error: "Please select a role",
                valid: false
            },
            showFormNotice: false,
            duplicatedEmail: false
        });
    }

    render() {
        const today = moment().format("DD MMMM YYYY, dddd");
        const currentWeek = moment().weeks();
        let isDisplay = this.props.roleId === "1";
        let formValid = this.state.email.value && this.state.password.value && this.state.roleId.value &&
            this.state.email.valid && this.state.password.valid && !this.state.duplicatedEmail;

        return (
            <React.Fragment>
                {!this.props.isAuthenticated && <Redirect to={this.props.authRedirectPath} />}
                <Menu secondary>
                    <Menu.Item >
                        <Header as="h1" size="large">
                            <Icon name="calendar alternate outline" />
                            <Header.Content>
                                Smart Calendar
                            </Header.Content>
                        </Header>
                    </Menu.Item>
                    <Menu.Item position="right" style={{ "letterSpacing": "0.2em" }}>
                        THE NEXT GENERATION EMPLOYEE MANAGEMENT SYSTEM
                    </Menu.Item>
                </Menu>

                <Menu inverted size="tiny" borderless>
                    <Menu.Item style={{ "fontSize": "1.3em" }}>
                        Current Week: {currentWeek}
                    </Menu.Item>
                    <Menu.Item style={{ "fontSize": "1.3em" }}>
                        {today}
                    </Menu.Item>
                    <Menu.Item position="right">
                        <Input
                            icon="users"
                            iconPosition="left"
                            placeholder="Search Staff..."
                        />
                    </Menu.Item>
                    <Menu.Item>
                        {isDisplay && <ModalUI icon="add user" circular inverted header="Add Account" addAccount={this.addAccount} formvalid={formValid} showNotice={this.showNotice} reset={this.resetState}>
                            <AddAccount onFormChange={this.handleFormChange} formControls={this.state} />
                        </ModalUI>
                        }

                        <ModalUI icon="bell" inverted circular header="Leave Request List">
                            <LeaveRequests />
                        </ModalUI>

                        <Dropdown trigger={<Button icon="settings" inverted circular size="tiny" />} floating icon={null}>
                            <Dropdown.Menu style={{ left: "auto", right: 0, fontSize: "1.3em" }}>
                                <Dropdown.Header icon="user" content={this.props.accountEmail} />
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    <ModalUI trigger="category" header="Personal Profile" category="Profile">
                                        <EditProfile />
                                    </ModalUI>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <ModalUI trigger="category" header="Account Settings" category="Account">
                                        <AccountSettings />
                                    </ModalUI>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <ModalUI trigger="category" header="Sign Out" category="Sign Out" signout={() => this.props.onSignout()} reset={() => null} formvalid>
                                        <h3>Do you want to sign out?</h3>
                                    </ModalUI>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                </Menu>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        roleId: state.auth.roleId,
        accountId: state.auth.accountId,
        accountEmail: state.auth.email,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
        accounts: state.staffTable.accounts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignout: () => dispatch(actions.logout()),
        onAddAccount: newAccount => dispatch(actions.addAccount(newAccount))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menubar);
