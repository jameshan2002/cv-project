import React from "react";
import uniqid from "uniqid";
import { Button, Form, Row, Col } from "react-bootstrap";

const Items = (props) => {
  const { schoolInfo } = props;

  return schoolInfo.map((schoolInfo) => {
    return (
      <div key={schoolInfo.id}>
        <h5>{schoolInfo.schoolName}</h5>
        <p>{schoolInfo.titleOfStudy}</p>
        <p>{schoolInfo.dateOfStudy}</p>
        {/* <Button size="sm" variant="secondary" className="closeButton">
          Edit
        </Button> */}
        <Button
          size="sm"
          variant="danger"
          onClick={() => props.onDelete(schoolInfo.id)}
        >
          Delete
        </Button>
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
      editMode: false,
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

  handleDelete = (itemId) => {
    const items = this.state.schoolInfo.filter((item) => item.id !== itemId);
    this.setState({ schoolInfo: items });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      schoolInfo: this.state.schoolInfo.concat(this.state.schoolInfoInput),
      schoolInfoInput: {
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: "",
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
    const { schoolInfoInput, schoolInfo } = this.state;
    const schoolForm = (
      <Form onSubmit={this.onSubmitTask}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>School Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={schoolInfoInput.schoolName}
              name="schoolName"
              type="text"
              placeholder="Enter Your School Name"
              id="schoolName"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Major</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={schoolInfoInput.titleOfStudy}
              name="titleOfStudy"
              type="text"
              placeholder="Enter Your Major"
              id="titleOfStudy"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Date of Study</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={schoolInfoInput.dateOfStudy}
              name="dateOfStudy"
              type="date"
              id="dateOfStudy"
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
    const schoolItems = (
      <>
        <Items schoolInfo={schoolInfo} onDelete={this.handleDelete} />
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
      this.state.editMode === true ? schoolForm : schoolItems;

    return (
      <>
        <hr />
        {whatToDisplay}
      </>
    );
  }
}

export default schoolInfoBuild;
