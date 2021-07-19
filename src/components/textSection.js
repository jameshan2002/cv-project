import React from "react";

const textSection = (props) => {
  if (props.firstName) {
    return (
      <div>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Email: {props.email}</p>
        <p>Phone Number: {props.phoneNumber}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>School Name: {props.schoolName}</p>
        <p>Title of Study: {props.titleOfStudy}</p>
        <p>Date of Study: {props.dateOfStudy}</p>
      </div>
    );
  }
};

export default textSection;
