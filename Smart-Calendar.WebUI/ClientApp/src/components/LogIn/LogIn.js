import React, { Component } from "react";
import {Button, Modal,Form} from 'semantic-ui-react';


class LogIn extends Component {
  constructor(props){
    super(props);
    this.state={
      modalOpen: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlesignupopen = this.handlesignupopen.bind(this);
  }
   // state = { modalOpen: false }

   handleOpen(){
     this.props.login(true);
     //this.setState({ modalOpen: true });

    }
  
  handleClose(){
    //this.setState({ modalOpen: false });
    this.props.login(false);
  }

  handlesignupopen(){
    this.props.login(false);
    this.props.signUp(true);
  }
  render() {
    return (
      <div>
         
        <Modal
        trigger={<Button inverted color='blue' onClick={this.handleOpen}>LogIn</Button>}
        open={this.props.loginstate}
        onClose={this.handleClose}
        size='small' >
         <div className="content one column stackable center aligned page grid">
        <Modal.Content>
        <Form>
        <Form.Field>
        <input placeholder='Email Address' />
        </Form.Field>
        <Form.Field>
        <input placeholder='Passowrd' />
        </Form.Field>
        <Form.Field>
        <Button onClick={this.handleClose} inverted type="submit" className="fluid ui blue button">
            Log In</Button>
        </Form.Field>
        </Form>
        </Modal.Content>
       
        <div className="text center form-footer">
         <a>Forgot your Password?</a>
         <p>Haven't got an Account?<a onClick={this.handlesignupopen}>SignUp</a></p>
         </div>
        </div>
      </Modal>
      </div>
    );
  }
}

export default LogIn;