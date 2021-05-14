import React from "react";
import "./MeSidebar.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PromotedContainer from "./PromotedContainer";
import Contacts from "./Contacts";

const MeSidebar = (props) => {
  return (
    <div className="main-wrapper">
      <div className="top-container-wrapper">
        <div className="top-container-item">
          <p>Edit public profile & URL</p>
          <HelpOutlineIcon style={{ cursor: "pointer" }} />
        </div>
        <hr style={{ width: "95%", margin: "10px auto" }} />
        <div className="top-container-item">
          <p>Add profile in another language</p>
          <HelpOutlineIcon />
        </div>
      </div>
      <div className="advertisment">
        <PromotedContainer style={{ cursor: "pointer" }} />
      </div>

      <Contacts users={props.users} />
    </div>
  );
};

export default MeSidebar;
