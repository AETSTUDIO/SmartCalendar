import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Menu, Header, Icon, Form, Input, Container, Divider, Loader, Label, Message } from "semantic-ui-react";
import ModalUI from "../../components/UI/ModalUI";
import Footer from "../../components/Footer/Footer";
//import banner from "./images/banner.jpg";
import * as actions from "../../store/actions/index";
import { checkValidity } from "../../shared/validation";

class Welcome extends Component {
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
        showFormNotice: false
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
        });
    }

    showNotice = () => {
        this.setState({ showFormNotice: true });
    }

    resetSignIn = () => {
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
            showFormNotice: false
        });
    }

    render() {

        let form = (<React.Fragment>
            <Form>
                <Form.Field
                    control={Input}
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Email Address"
                    onChange={this.handleFormChange}
                />
                {this.state.showFormNotice && !this.state.email.valid && <Label basic color="red" pointing>{this.state.email.error}</Label>}
                <Divider hidden />
                <Form.Field
                    control={Input}
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Password"
                    onChange={this.handleFormChange}
                />
                {this.state.showFormNotice && !this.state.password.valid && <Label basic color="red" pointing>{this.state.password.error}</Label>}
            </Form>
            <Divider hidden />
            <div className="text center form-footer">
                <a>New employee? Please contact admin for a registration form</a>
            </div>
        </React.Fragment>);

        let errorMessage = this.props.error &&
            <Message
                attached
                negative
                size="big"
                header="Credentials not valid"
            />;

        let formValid = this.state.email.valid && this.state.password.valid;

        return (
            <React.Fragment>
                {this.props.isAuthenticated && <Redirect to={this.props.authRedirectPath} />}
                <Menu fluid secondary>
                    <Menu.Item >
                        <Header as="h1" size="large">
                            <Icon name="calendar alternate outline" />
                            <Header.Content>
                                Smart Calendar
                            </Header.Content>
                        </Header>
                    </Menu.Item>

                    <Menu.Item position="right" style={{ fontSize: "1.3em" }}>
                        <ModalUI trigger="category" category="Sign In"
                            header="Sign In"
                            signin={() => this.props.onAuth(this.state.email.value, this.state.password.value)}
                            formvalid={formValid}
                            showNotice={this.showNotice}
                            reset={this.resetSignIn}
                            modalSize="tiny"
                        >
                            {form}
                        </ModalUI>
                    </Menu.Item>
                </Menu>

                {errorMessage}
                <Container>
                    <Header as="h1"
                        content="Welcome to Smart Calendar"
                        style={{
                            fontSize: "4em",
                            fontWeight: "normal",
                            marginBottom: 0,
                            marginTop: "1em"
                        }}
                    />
                    <Header as="h2"
                        content="The Next Generation Employee Management System"
                        style={{
                            fontSize: "1.7em",
                            fontWeight: "normal",
                            marginTop: "1.5em",
                            marginBottom: "1em"
                        }}
                    />
                    {this.props.loading ?
                        <Loader active inline="centered" size="massive" /> :
                        <ModalUI header="Sign In"
                            signin={() => this.props.onAuth(this.state.email.value, this.state.password.value)}
                            formvalid={formValid}
                            showNotice={this.showNotice}
                            reset={this.resetSignIn}
                            category="Get Started"
                            size="huge"
                            modalSize="tiny"
                            color="black"
                            basic
                        >
                            {form}
                        </ModalUI>}
                </Container>
                <Divider hidden />
                <Footer />
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Welcome);




