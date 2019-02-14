import React from 'react';
import {Grid} from 'semantic-ui-react';


const Footer = () =>(
    <Grid columns={3}>
    <Grid.Row>
        <Grid.Column>
            <h3 align="left">@Copyright by SmartCalender</h3>
            {/* <h3 align= "right">About</h3>
            <h3 align= "right">Contact Us</h3> */}
        </Grid.Column>
        <Grid.Column >
            <h3 align= "center">About</h3>
        </Grid.Column>
        <Grid.Column >
            <h3 align= "right">Contact Us</h3>
        </Grid.Column>
    </Grid.Row>
    </Grid>

);

export default Footer;