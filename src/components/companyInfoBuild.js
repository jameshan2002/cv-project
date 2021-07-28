import React from "react";
import uniqid from "uniqid";
import { Button, Form, Row, Col } from "react-bootstrap";

const Items = (props) => {
  const { companyInfo } = props;

  return companyInfo.map((companyInfo) => {
    return (
      <div key={companyInfo.id}>
        <h5>{companyInfo.companyName}</h5>
        <p>{companyInfo.positionTitle}</p>
        <li>{companyInfo.mainTasks}</li>
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
      editMode: false,
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
    this.setState((prevState) => ({
      companyInfo: this.state.companyInfo.concat(this.state.companyInfoInput),
      companyInfoInput: {
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        id: uniqid(),
      },
      editMode: !prevState.editMode,
    }));
  };

  changeEditMode = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  };

  render() {
    const { companyInfoInput, companyInfo } = this.state;
    const companyForm = (
      <Form onSubmit={this.onSubmitTask}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="company01">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={companyInfoInput.companyName}
              name="companyName"
              type="text"
              placeholder="Enter Your Company"
              id="companyName"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="company02">
            <Form.Label>Position</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={companyInfoInput.positionTitle}
              name="positionTitle"
              type="text"
              placeholder="Enter Your Position"
              id="positionTitle"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="company03">
            <Form.Label>Main Task</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={companyInfoInput.mainTasks}
              name="mainTasks"
              type="text"
              placeholder="Enter Your Main Task"
              id="mainTasks"
              required
            />
          </Form.Group>
        </Row>
        <Button
          onClick={this.changeEditMode}
          size="sm"
          variant="secondary"
          className="closeButton"
        >
          Close
        </Button>
        <Button type="submit" size="sm">
          Add
        </Button>
      </Form>
    );
    const companyItems = (
      <>
        <Items companyInfo={companyInfo} />
        <Button
          onClick={this.changeEditMode}
          variant="outline-primary"
          size="sm"
          className="addNewBtn"
        >
          Add new
        </Button>
      </>
    );
    const whatToDisplay =
      this.state.editMode === true ? companyForm : companyItems;
    return (
      <>
        <hr />
        {whatToDisplay}
      </>
    );
  }
}

export default companyInfoBuild;
