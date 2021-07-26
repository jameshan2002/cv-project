import React from "react";
import uniqid from "uniqid";

const Items = (props) => {
  const { schoolInfo } = props;

  return schoolInfo.map((schoolInfo) => {
    return (
      <div key={schoolInfo.id}>
        <h3>{schoolInfo.schoolName}</h3>
        <p>{schoolInfo.titleOfStudy}</p>
        <p>{schoolInfo.dateOfStudy}</p>
      </div>
    );
  });
};

class schoolInfoBuild extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolInfoInput: {
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: "",
        id: uniqid(),
      },
      schoolInfo: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      schoolInfoInput: {
        ...this.state.schoolInfoInput,
        [name]: value,
        id: this.state.schoolInfoInput.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      schoolInfo: this.state.schoolInfo.concat(this.state.schoolInfoInput),
      schoolInfoInput: {
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: "",
        id: uniqid(),
      },
    });
  };

  render() {
    const { schoolInfoInput, schoolInfo } = this.state;
    return (
      <>
        <Items schoolInfo={schoolInfo} />
        <form onSubmit={this.onSubmitTask}>
          <input
            onChange={this.handleChange}
            value={schoolInfoInput.schoolName}
            name="schoolName"
            type="text"
            placeholder="School Name"
            id="schoolName"
          />
          <br />
          <input
            onChange={this.handleChange}
            value={schoolInfoInput.titleOfStudy}
            name="titleOfStudy"
            type="text"
            placeholder="Title of study"
            id="titleOfStudy"
          />
          <br />
          <input
            onChange={this.handleChange}
            value={schoolInfoInput.dateOfStudy}
            name="dateOfStudy"
            type="date"
            id="dateOfStudy"
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}

export default schoolInfoBuild;
