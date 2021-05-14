import React, { Component } from "react";
import Contact from "./Contact";
import "./Contacts.css";

export default class Contacts extends Component {
  render() {
    return (
      <div className="contacts-wrapper mt-3">
        <h6 className="p-3">People also viewed</h6>
        {this.props.users.map((user) => (
          <Contact key={user._id} user={user} />
        ))}
      </div>
    );
  }
}
