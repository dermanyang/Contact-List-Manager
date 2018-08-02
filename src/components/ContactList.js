import React, { Component } from 'react';
import NewContactBar from './newContactBar'


class ContactList extends Component {
    render() {
    return(
    <div className='container col-lg-12'>
      {this.props.contactList.map((item, index) =>
        <div className="list contact">
          <span className="col-md-4">{item.fullName}</span>
          <span className="col-md-4">{item.phoneNumber}</span>
          <span className="col-md-4">{item.email}</span>
        </div>
        )}
    </div>
    )
  }
}


export default ContactList;
