import React from "react";

class generalInfoBuild extends React.Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        firstName: "",
        lastName: "",
        email: "",
      },
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

  render() {
    const { generalInfo } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <input
            onChange={this.handleChange}
            value={generalInfo.firstName}
            name="firstName"
            type="text"
            placeholder="First Name"
            id="firstName"
            required
          />
          <br />
          <input
            onChange={this.handleChange}
            value={generalInfo.lastName}
            name="lastName"
            type="text"
            placeholder="Last Name"
            id="lastName"
            required
          />
          <br />
          <input
            onChange={this.handleChange}
            value={generalInfo.email}
            name="email"
            type="text"
            placeholder="Email"
            id="email"
          />
          <br />
          <button type="submit">Add</button>
        </form>

        <h1>{generalInfo.firstName}</h1>
        <p>{generalInfo.lastName}</p>
        <p>{generalInfo.email}</p>
      </div>
    );
  }
}

export default generalInfoBuild;
