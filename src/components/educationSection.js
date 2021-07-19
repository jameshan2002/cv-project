import React from "react";
import TextSection from "./textSection";

class educationSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eduList: [],
      education: { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
      isEditing: true,
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      education: {
        ...this.state.edu,
        [name]: value,
      },
    });
  };

  editButton = (e) => {
    this.setState((prevState) => ({
      education: {
        schoolName: prevState.schoolName,
        titleOfStudy: prevState.titleOfStudy,
        dateOfStudy: prevState.dateOfStudy,
      },
      isEditing: true,
    }));
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      eduList: [...this.state.eduList, e],
      education: { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
      isEditing: false,
    });

    console.log(this.state.eduList);
  };

  render() {
    const { isEditing, eduList } = this.state;
    const { schoolName, titleOfStudy, dateOfStudy } = this.state.education;

    const educationEdit = (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">School Name:</label>
          <br />
          <input
            name="schoolName"
            onChange={this.handleChange}
            value={schoolName}
            type="text"
            id="taskInput"
            required
          />
          <br />
          <label htmlFor="taskInput">Title of Study:</label>
          <br />
          <input
            name="titleOfStudy"
            onChange={this.handleChange}
            value={titleOfStudy}
            type="text"
            id="taskInput"
            required
          />
          <br />
          <label htmlFor="taskInput">Date Of Study:</label>
          <br />
          <input
            name="dateOfStudy"
            onChange={this.handleChange}
            value={dateOfStudy}
            type="date"
            id="taskInput"
            required
          />
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    );

    const educationDisplay = eduList.map((edu) => {
      return (
        <div>
          <TextSection
            schoolName={edu.schoolName}
            titleOfStudy={edu.titleOfStudy}
            dateOfStudy={edu.dateOfStudy}
          />
          <button onClick={this.editButton}>Edit</button>
        </div>
      );
    });

    const displayDiv = isEditing ? educationEdit : educationDisplay;

    return (
      <div>
        <h2>Education</h2>
        {displayDiv}
      </div>
    );
  }
}
export default educationSection;
