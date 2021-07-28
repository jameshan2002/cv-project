import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

class generalInfoBuild extends React.Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        firstName: "Jeff",
        lastName: "Bezos",
        email: "jeffbezos@amazon.com",
      },
      editMode: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      generalInfo: {
        ...this.state.generalInfo,
        [name]: value,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
  };

  changeEditMode = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  };

  render() {
    const { generalInfo } = this.state;
    const generalForm = (
      <Form onSubmit={this.onSubmitTask}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={generalInfo.firstName}
              name="firstName"
              type="text"
              placeholder="First Name"
              id="firstName"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={generalInfo.lastName}
              name="lastName"
              type="text"
              placeholder="Last Name"
              id="lastName"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={generalInfo.email}
              name="email"
              type="email"
              placeholder="Email"
              id="email"
            />
          </Form.Group>
        </Row>
        <Button onClick={this.changeEditMode} size="sm">
          Close
        </Button>
      </Form>
    );
    const generalItem = (
      <>
        <div>
          <h1>
            {generalInfo.firstName} {generalInfo.lastName}
          </h1>
          <p>{generalInfo.email}</p>

          <Button
            onClick={this.changeEditMode}
            variant="outline-primary"
            size="sm"
            className="generalEdit"
          >
            Edit
          </Button>
        </div>
      </>
    );
    const whatToDisplay =
      this.state.editMode === true ? generalForm : generalItem;
    return <div>{whatToDisplay}</div>;
  }
}

export default generalInfoBuild;
