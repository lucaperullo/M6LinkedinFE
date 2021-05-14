import React from "react";
import "./HeaderOption.css";
import DropDown from "./DropDown";
import { Avatar } from "@material-ui/core";
function HeaderOption({ avatar, Icon, title, changing, userInfo }) {
  return (
    <div className="header_option">
      {Icon && <Icon className="options_icon" />}
      {avatar && <Avatar className="options_icon" src={avatar} />}
      <div className="d-flex" style={{ maxWidth: 100, alignItems: "center" }}>
        {" "}
        <h3 className="option_title text-center">{title}</h3>
        {avatar && <DropDown userInfo={userInfo}/>}
        {changing}
      </div>
    </div>
  );
}

export default HeaderOption;
