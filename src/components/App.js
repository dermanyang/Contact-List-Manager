import React, { Component } from 'react';
import logo from './logo.svg';
import ContactList from './ContactList'
import NewContactBar from './newContactBar'
import './App.css';

var dummyData = [
  {fullName: "Sean Derman",
phoneNumber: "6262433867",
email: "seanderman@gmail.com"},
{fullName: "Timothy",
phoneNumber: "1234567891",
email: "timchang@gmail.com"},
{fullName: "Juan Diego",
phoneNumber: "7894561235",
email: "jdjdjdjd@gmail.com"},
{fullName: "Asheesh Chopra",
phoneNumber: "7789456132",
email: "thechopra123@gmail.com"},
]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      contacts: []
    }
  }


  //    ON RENDERING
  loadStuff() {
    console.log('calling loadstuff...');
    fetch('/contact/load', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then((res) =>{
        if (res.status == 200){
          return res.json()
        }
        else {
          return []
        }
      })
      .then((res)=> {
      if(res.success) {
        console.log("res", res.contacts);
        this.setState({
          contacts: res.contacts
        })
      } else {
        console.log("couldn't load", res);
      }
      }).catch((err) => {
      // network error
      console.log(err);
      })
  }
  componentDidMount() {
    //1) grab all items from mongo database
    console.log('component did mount');
    this.loadStuff()
  }

  //save contact
  saveContact(contact) {
    let name = contact.fullName;
    let phone = contact.phoneNumber;
    let email = contact.email

    fetch('/contact/create', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        phone,
        email
      })
      }).then((res)=> {
      if(res.status === 200) {
        // worked
        console.log('saved  contact', contact);
        this.loadStuff()
      } else {
        console.log("couldn't save");
      }
      }).catch((err) => {
      // network error
      console.log(err);
      })
}


  render() {
    return (
      <div className="App">
        <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contact Manager</h1>
        </header>
        <div className="container outerBox" >
          <NewContactBar saveContact={this.saveContact.bind(this)} className="newContactBar"/>
          <ContactList contactList={this.state.contacts} styling="ContactList"/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
