import React from "react";

import {
  CaseDisplay,
  CountryPicker,
  LineChartTracker,
  StackedHorizontalBarChart
} from "./components";

import logo from "./logo.svg";

import { fetchData } from "./api";

import "./App.css";

class App extends React.Component {
  state = {
    data: {}
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <div className="title">
          <div className="title-covid"><p className="title-c">C</p> <img src={logo} className="App-logo" /><p className="title-vid">VID-19</p></div>

          <p className="title-tracker">Tracker</p>
        </div>
        <CaseDisplay data={data} />
        <LineChartTracker />
      </div>
    );
  }
}

export default App;
