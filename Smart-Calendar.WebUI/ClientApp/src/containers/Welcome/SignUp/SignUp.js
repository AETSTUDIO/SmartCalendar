import React, { Component } from "react";
import {Button, Modal,Form} from 'semantic-ui-react';


class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      modalOpen: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleloginopen = this.handleloginopen.bind(this);
  }
   // state = { modalOpen: false }

   handleOpen(){
     //this.setState({ modalOpen: true });
     this.props.signup(true);
    }
  
  handleClose(){
   // this.setState({ modalOpen: false });
   this.props.signup(false);
  }

  handleloginopen(){
    this.props.signup(false);
    this.props.login(true);
  }
  render() {
    return (
      <div>
         
        <Modal
        trigger={<Button inverted color='blue' onClick={this.handleOpen}>Sign Up</Button>}
        open={this.props.signupstate}
        onClose={this.handleClose}
        size='small' >
        <Modal.Content>
        <Form>
        <Form.Field>
            <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
        <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
        <input placeholder='Email Address' />
        </Form.Field>
        <Form.Field>
        <input placeholder='Passowrd' />
        </Form.Field>
        <Form.Field>
        <input placeholder='Confirm Passowrd' />
        </Form.Field>
        <Form.Field>
        <Button onClick={this.handleClose} inverted type="submit" className="fluid ui blue button">
            Sign Up</Button>
        </Form.Field>
        <Form.Field className='center'>
        <p>Already have an Account?<a onClick= {this.handleloginopen}>LogIn</a></p>
        </Form.Field>
        </Form>
        </Modal.Content>
        <Modal.Actions>
         
        </Modal.Actions>
      </Modal>
      </div>
    );
  }
}

export default SignUp;