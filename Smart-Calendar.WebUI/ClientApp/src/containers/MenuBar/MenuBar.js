import React, { Component } from "react";
import moment from "moment";
import { Menu, Icon, Header, Input, Button } from "semantic-ui-react";
import ModalUI from "../../components/UI/ModalUI";
import DropdownUI from "../../components/UI/DropdownUI";
import AddStaff from "../Profile/AddStaff";
import EditProfile from "../Profile/EditProfile";
import AccountSettings from "../Profile/AccountSettings";
import LeaveRequests from "../LeaveRequests/LeaveRequests";
import axios from "axios";


export default class Menubar extends Component {
    state = {
        email: '',
        password: '',
        role: '',
        emailerror: '',
        pwderror: '',
        roleerror: '',
        formvalid: false
    }

    handleItemClick = () => { };


    handleChange = e => {
        e.preventDefault();
    };


    handleFormChange = (e, { name, value }) => {
        this.setState({ [name]: value }, () => { console.log(this.state); });
    }

    addStaffInfo = (e) => {
        // e.preventDefault();

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
        return (
            <Menu secondary>
                <Menu.Item>
                    <Header as="h1" size="large">
                        <Icon name="calendar alternate outline" />
                        <Header.Content>
                            Smart Calendar
                            <Header.Subheader>
                                The Next Generation HR Management System
                            </Header.Subheader>
                        </Header.Content>
                    </Header>
                </Menu.Item>
                <Menu.Item style={{ margin: "auto" }}>
                    <h3>
                        Current Week: {currentWeek} <br />
                        {today}
                    </h3>
                </Menu.Item>
                <Menu.Item position="right">
                    <Menu compact secondary>
                        <Menu.Item>
                            <Input
                                icon="users"
                                iconPosition="left"
                                placeholder="Search Staff..."
                            />
                        </Menu.Item>


                        <Menu.Item>
                            <Button.Group>
                                <ModalUI icon="add user" header="Create New Account"
                                    addStaffInfo={this.addStaffInfo}
                                    validateForm={this.validateForm}
                                    clearStaffInfo={this.clearStaffInfo}
                                    formvalid={this.state.formvalid}>
                                    <AddStaff onFormChange={this.handleFormChange}
                                        emailerror={this.state.emailerror}
                                        pwderror={this.state.pwderror}
                                        roleerror={this.state.roleerror} />
                                </ModalUI>
                                <ModalUI icon="bell outline" header="Leave Request List">
                                    <LeaveRequests />
                                </ModalUI>
                                <DropdownUI
                                    icon="settings"
                                    headerIcon="user"
                                    content="Staff Name"
                                >
                                    <Button.Group vertical>
                                        <ModalUI header="Personal Profile" category="Profile">
                                            <EditProfile />
                                        </ModalUI>
                                        <ModalUI header="Account Settings" category="Account">
                                            <AccountSettings />
                                        </ModalUI>
                                        <ModalUI header="Signout Confirmation" category="Sign out">
                                            <h3>Do you want to sign out?</h3>
                                        </ModalUI>
                                    </Button.Group>
                                </DropdownUI>
                            </Button.Group>
                        </Menu.Item>
                    </Menu>
                </Menu.Item>
            </Menu>
        );
    }

}
