import React, { Component } from "react";
import GeneralSection from "./components/generalSection";
import EducationSection from "./components/educationSection";
import ExperienceSection from "./components/experienceSection";

class App extends Component {
  render() {
    return (
      <div>
        <h2>CV-Builder</h2>
        <GeneralSection />
        <EducationSection />
        <ExperienceSection />
      </div>
    );
  }
}

export default App;
