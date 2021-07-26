import React from "react";
import uniqid from "uniqid";

const Items = (props) => {
  const { companyInfo } = props;

  return companyInfo.map((companyInfo) => {
    return (
      <div key={companyInfo.id}>
        <h3>{companyInfo.companyName}</h3>
        <p>{companyInfo.positionTitle}</p>
        <p>{companyInfo.mainTasks}</p>
      </div>
    );
  });
};

class companyInfoBuild extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companyInfoInput: {
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        id: uniqid(),
      },
      companyInfo: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      companyInfoInput: {
        ...this.state.companyInfoInput,
        [name]: value,
        id: this.state.companyInfoInput.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      companyInfo: this.state.companyInfo.concat(this.state.companyInfoInput),
      companyInfoInput: {
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        id: uniqid(),
      },
    });
  };

  render() {
    const { companyInfoInput, companyInfo } = this.state;
    return (
      <>
        <Items companyInfo={companyInfo} />
        <form onSubmit={this.onSubmitTask}>
          <input
            onChange={this.handleChange}
            value={companyInfoInput.companyName}
            name="companyName"
            type="text"
            placeholder="Company Name"
            id="companyName"
          />
          <br />
          <input
            onChange={this.handleChange}
            value={companyInfoInput.positionTitle}
            name="positionTitle"
            type="text"
            placeholder="Position Title"
            id="positionTitle"
          />
          <br />
          <input
            onChange={this.handleChange}
            value={companyInfoInput.mainTasks}
            name="mainTasks"
            type="text"
            placeholder="Main Tasks"
            id="mainTasks"
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}

export default companyInfoBuild;
