import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { Menu, Icon, Header, Input, Button, Dropdown } from "semantic-ui-react";
import ModalUI from "../../components/UI/ModalUI";
import AddStaff from "../Profile/AddStaff";
import EditProfile from "../Profile/EditProfile";
import AccountSettings from "../Profile/AccountSettings";
import LeaveRequests from "../LeaveRequests/LeaveRequests";
import * as actions from "../../store/actions/index";
import axios from "axios";


class Menubar extends Component {
    state = {
        email: '',
        password: '',
        role: '',
        emailerror: '',
        pwderror: '',
        roleerror: '',
        formvalid: false
    }

    handleFormChange = (e, { name, value }) => {
        this.setState({ [name]: value }, () => { console.log(this.state); });
    }

    addStaffInfo = (e) => {
        let userInfo = {
            email: this.state.email,
            password: this.state.password,
            roleId: this.state.role
        };
        console.log(userInfo.email);
        axios({
            method: 'post',
            url: 'https://localhost:44314/api/Account/Register',
            data: userInfo
        }).then(function (res) {

            if (res.status === 200) {
                alert('Account Created');
            }
            else {
                alert('Account already Exists');
            }
            // debugger
            this.setState({
                email: '',
                password: '',
                role: ''
            });
        }.bind(this));
        //console.log("Staff info is added");
    }
    clearStaffInfo = () => {
        this.setState({
            email: '',
            password: '',
            role: '',
            emailerror: '',
            pwderror: '',
            roleerror: '',
            formvalid: true
        });
    }

    validateForm = () => {

        let formisvalid = false;
        let error, perror, rolemsg;
        let emailflg = true;
        let pwdflg = true;
        let roleflg = true;
        error = '';
        perror = '';
        rolemsg = '';

        if (!this.state.email) {
            emailflg = false;
            error = 'Please Enter Valid Email-ID';
        }
        else {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.email)) {
                emailflg = false;
                error = "*Please enter valid email-ID.";
            }
        }
        if (!this.state.password) {
            pwdflg = false;
            perror = 'Please Enter Password';
        }
        if (!this.state.role) {
            roleflg = false;
            rolemsg = 'Please Select Role';
        }
        if (emailflg && pwdflg && roleflg) { formisvalid = true; }
        else { formisvalid = false; }
        this.setState({
            emailerror: error,
            pwderror: perror,
            roleerror: rolemsg,
            formvalid: formisvalid
        });
        // console.log(this.state.formvalid);
        // console.log(formisvalid);
    }

    render() {
        const today = moment().format("DD MMMM YYYY, dddd");
        const currentWeek = moment().weeks();
        let isDisplay = this.props.roleId === "1";

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
                        {isDisplay && <ModalUI icon="add user" circular inverted header="Create New Account"
                            addStaffInfo={this.addStaffInfo}
                            validateForm={this.validateForm}
                            clearStaffInfo={this.clearStaffInfo}
                            formvalid={this.state.formvalid}>
                            <AddStaff onFormChange={this.handleFormChange}
                                emailerror={this.state.emailerror}
                                pwderror={this.state.pwderror}
                                roleerror={this.state.roleerror} />
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
                                    <ModalUI trigger="category" header="Sign Out" category="Sign Out" signout={() => this.props.onSignout()} formvalid>
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
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignout: () =>
            dispatch(actions.logout())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menubar);
