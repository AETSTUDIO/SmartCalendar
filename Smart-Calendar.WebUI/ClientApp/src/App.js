import React, { Component } from "react";
import SmartCalender from "./containers/SmartCalendar/SmartCalendar";
import "./containers/StaffTable/StaffTable";
import StaffTable from "./containers/StaffTable/StaffTable";

class App extends Component {
  render() {
    return (
      <div>
        <SmartCalender>
          <StaffTable />
        </SmartCalender>
      </div>
    );
  }
}

export default App;
