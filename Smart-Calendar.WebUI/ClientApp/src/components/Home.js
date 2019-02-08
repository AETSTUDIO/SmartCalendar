import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


export default class Home extends Component {
    state = {
        data: null
    }
    componentDidMount() {
        axios.get("https://localhost:44314/api/calendar/user")
            .then(res => {
                debugger
                this.setState({ data: JSON.stringify(res.data) });

            });
    }
    render() {
        return (
            <div>
                {this.state.data}
                </div>
            )
    }
}
