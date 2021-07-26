import React, { Component } from "react";
import GeneralInfoBuild from "./components/generalInfoBuild";
import SchoolInfoBuild from "./components/schoolInfoBuild";

class App extends Component {
  render() {
    return (
      <div>
        <h2>CV-Builder</h2>
        <h4>General Information</h4>
        <GeneralInfoBuild />
        <h4>School Information</h4>
        <SchoolInfoBuild />
      </div>
    );
  }
}

export default App;
