import React, { Component } from "react";
import GeneralInfoBuild from "./components/generalInfoBuild";
import SchoolInfoBuild from "./components/schoolInfoBuild";
import CompanyInfoBuild from "./components/companyInfoBuild";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import logo from "./logo.svg";
import { Navbar, Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              CV-Builder
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>Made by James Han</Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="CVBuilder">
          <GeneralInfoBuild />
          <h3>Education</h3>
          <SchoolInfoBuild />
          <h3>Work Experience</h3>
          <CompanyInfoBuild />
        </div>
      </div>
    );
  }
}

export default App;
