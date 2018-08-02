import React, { Component } from 'react';

class NewContactBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      phoneNumber: '',
      email: '',
    }
  }

  //    HANDLE CHANGES
  handleChangeName(e) {
    this.setState({
      fullName: e.target.value
    })
  }
  handleChangeNumber(e) {
    this.setState({
      phoneNumber: e.target.value
    })
  }
  handleChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }


  //    HANDLE CLICK
  handleClick() {
    console.log('clicked button');
    var contact = {
      fullName: this.state.fullName,
      phoneNumber:this.state.phoneNumber,
      email: this.state.email
    }
    console.log("input fields: ", contact);
    this.props.saveContact(contact);
  }

  render() {
    return(
      <div className={this.props.className}>
          Full Name <input type="text" value={this.state.fullName} onChange={(e) => {this.handleChangeName(e)}}></input> {"  "}
          Phone Number <input type="number" value={this.state.phoneNumber} onChange={(e) => {this.handleChangeNumber(e)}}></input> {"  "}
          Email Address <input type="text" value={this.state.email} onChange={(e) => {this.handleChangeEmail(e)}}></input> {"  "}
         <button onClick={() => {this.handleClick()}} >Save Contact</button>
      </div>
    )
  }

}

export default NewContactBar;
