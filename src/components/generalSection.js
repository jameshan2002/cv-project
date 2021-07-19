import React from "react";
import TextSection from "./textSection";

class generalSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      isEditing: true,
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  };

  editButton = (e) => {
    this.setState({
      isEditing: true,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      isEditing: false,
    });
  };

  render() {
    const { firstName, lastName, email, phoneNumber, isEditing } = this.state;

    const generalEdit = (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">First Name:</label>
          <br />
          <input
            name="firstName"
            onChange={this.handleChange}
            value={firstName}
            type="text"
            id="taskInput"
            required
          />{" "}
          <br />
          <label htmlFor="taskInput">Last Name:</label>
          <br />
          <input
            name="lastName"
            onChange={this.handleChange}
            value={lastName}
            type="text"
            id="taskInput"
            required
          />
          <br />
          <label htmlFor="taskInput">Email:</label>
          <br />
          <input
            name="email"
            onChange={this.handleChange}
            value={email}
            type="text"
            id="taskInput"
          />
          <br />
          <label htmlFor="taskInput">Phone Number:</label>
          <br />
          <input
            name="phoneNumber"
            onChange={this.handleChange}
            value={phoneNumber}
            type="text"
            id="taskInput"
          />
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    );

    const generalDisplay = (
      <div>
        <TextSection
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
        />
        <button onClick={this.editButton}>Edit</button>
      </div>
    );

    const displayDiv = isEditing ? generalEdit : generalDisplay;

    return (
      <div>
        <h2>General Information</h2>
        {displayDiv}
      </div>
    );
  }
}

export default generalSection;
