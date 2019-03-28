import React, { Component } from "react";
import { connect } from "react-redux";
import { Divider, Container, Loader } from "semantic-ui-react";
import Menubar from "../MenuBar/MenuBar";
import StaffTable from "../StaffTable/StaffTable";
import Footer from "../../components/Footer/Footer";
import * as actions from "../../store/actions/index";

class SmartCalender extends Component {
    componentDidMount() {
        this.props.onInitTable();
    }

    render() {
        return (
            <React.Fragment>
                {this.props.users && this.props.accounts ?
                    <div>
                        <Menubar />
                        <Divider hidden />
                        <Container>
                            <StaffTable users={this.props.users} accounts={this.props.accounts} />
                        </Container>
                        <Divider hidden />
                        <Footer /> 
                    </div>
                    : <Loader active inline="centered" size="massive" />}
            </React.Fragment >
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.staffTable.users,
        accounts: state.staffTable.accounts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitTable: () => dispatch(actions.initTable())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SmartCalender);
