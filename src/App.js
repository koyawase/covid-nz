import React from "react";

import {
  CountryPicker,
  LineChart,
  RadialBarChart,
  StackedHorizontalBarChart
} from "./components";

import { fetchData } from './api';

import './App.css';

class App extends React.Component {
  
  async componentDidMount() {
    const data = await fetchData();
    console.log(data)
  }

  render() {
    return (
      <div className="container">
        <CountryPicker />
      </div>
    );
  }
}

export default App;
