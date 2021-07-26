import React, { Component } from "react";
import GeneralInfoBuild from "./components/generalInfoBuild";
import SchoolInfoBuild from "./components/schoolInfoBuild";
import CompanyInfoBuild from "./components/companyInfoBuild";

class App extends Component {
  render() {
    return (
      <div>
        <h2>CV-Builder</h2>
        <h4>General Information</h4>
        <GeneralInfoBuild />
        <h4>School Information</h4>
        <SchoolInfoBuild />
        <h4>Company Information</h4>
        <CompanyInfoBuild />
      </div>
    );
  }
}

export default App;
