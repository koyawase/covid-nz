import React from "react";

import {
  CaseDisplay,
  CountryPicker,
  LineChartTracker,
  StackedHorizontalBarChart
} from "./components";

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
        <CaseDisplay data={data} />
        <LineChartTracker />
      </div>
    );
  }
}

export default App;
