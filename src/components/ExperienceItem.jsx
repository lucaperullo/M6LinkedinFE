import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import "./ExperienceItem.css";
import { format, parseISO } from "date-fns";
import EditExperienceModal from "./EditExperienceModal";
import { withRouter } from "react-router";

const ExperienceItem = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const { area, company, description, endDate, role, startDate, image, _id } =
    props.experience;

  return (
    <>
      <div className="experience-item mb-3">
        <div className="d-flex">
          <div className="experience-item-image">
            <img
              draggable="false"
              src={
                image
                  ? image
                  : "data:image/png;base64,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"
              }
              alt="experience-img"
            />
          </div>

          <div className="experience-item-text">
            <h5>{role}</h5>
            <p>
              {format(parseISO(startDate), "MM/yyyy")} -{" "}
              {endDate && format(parseISO(endDate), "MM/yyyy")}
            </p>
            <p>{description}</p>
            <p>London, United Kingdom</p>
          </div>
        </div>
        <div className="experience-item-edit-icon">
          {!props.location.pathname === "/user" && (
            <CreateIcon onClick={() => setModalShow(true)} />
          )}
          {props.location.pathname === "/me" && (
            <CreateIcon onClick={() => setModalShow(true)} />
          )}
        </div>
      </div>
      <EditExperienceModal
        experience={props.experience}
        show={modalShow}
        editUserExperience={props.editUserExperience}
        deleteUserExperience={props.deleteUserExperience}
        id={_id}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default withRouter(ExperienceItem);
