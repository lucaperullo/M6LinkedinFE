import React, { useState } from "react";
import { FormControl, Dropdown } from "react-bootstrap";
import CardInfoDropdown from "./CardInfoDropdown";
import { Link } from "react-router-dom";

class DropDown extends React.Component {
  state = {
    userInfo: this.props.userInfo,
  };

  
  render() { 
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
      <a
        style={{
          backgroundColor: "white",
          color: "gray",
        }}
        href=""
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children}
        &#x25BE;
      </a>
    ));
    return (
      <Dropdown>
        <Dropdown.Toggle
          as={CustomToggle}
          variant="Secondary"
        ></Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className="text-muted px-0 py-0" eventKey="1">
            <CardInfoDropdown userInfo={this.props.userInfo} />
          </Dropdown.Item>
          <Dropdown.Header className="font-weight-bold text-reset">
            Account
          </Dropdown.Header>
          <Dropdown.Item className="text-muted" eventKey="1">
            Settings & Privacy
          </Dropdown.Item>
          <Dropdown.Item className="text-muted" eventKey="2">
            Help
          </Dropdown.Item>
          <Dropdown.Item className="text-muted" eventKey="3">
            Language
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header className="font-weight-bold text-reset">
            Manage
          </Dropdown.Header>
          <Dropdown.Item className="text-muted" eventKey="4">
            Posts and Activity
          </Dropdown.Item>
          <Dropdown.Item className="text-muted" eventKey="5">
            Job posting account
          </Dropdown.Item>
          <Dropdown.Item className="text-muted" eventKey="6">
            <Link to="/">
            Sign Out
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
export default DropDown;
