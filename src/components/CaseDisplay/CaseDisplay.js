import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import CountUp from "react-countup";

import "./CaseDisplay.css";

const CaseDisplay = ({
  data: { active, confirmed, recovered, deaths, lastUpdate }
}) => {
  if (!confirmed) {
    return null;
  }

  const activeData = [{ uv: active, fill: "#FFA500" }];
  const deathsData = [{ uv: deaths.value, fill: "#D66679" }];
  const recoveredData = [{ uv: recovered.value, fill: "#71FF2F" }];

  return (
    <div className="radial-chart-case-display">
      <div className="radial-chart-container">
        <RadialBarChart
          width={140}
          height={140}
          cx={70}
          cy={70}
          innerRadius={50}
          outerRadius={150}
          barSize={20}
          data={activeData}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, confirmed.value]}
            angleAxisId={0}
            tick={false}
          />{" "}
          <RadialBar dataKey="uv" angleAxisId={0} data={[activeData[0]]} />
        </RadialBarChart>

        <CountUp
          className="case-category-number"
          start={0}
          end={active}
          duration={1}
          separator=","
        />
        <p className="radial-chart-label">Active</p>
      </div>

      <div className="radial-chart-container">
        <RadialBarChart
          width={140}
          height={140}
          cx={70}
          cy={70}
          innerRadius={50}
          outerRadius={150}
          barSize={20}
          data={deathsData}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, confirmed.value]}
            angleAxisId={0}
            tick={false}
          />{" "}
          <RadialBar dataKey="uv" angleAxisId={0} data={[deathsData[0]]} />
        </RadialBarChart>
        <CountUp
          className="case-category-number"
          start={0}
          end={deaths.value}
          duration={1}
          separator=","
        />
        <p className="radial-chart-label">Deaths</p>
      </div>

      <div className="radial-chart-container">
        <RadialBarChart
          width={140}
          height={140}
          cx={70}
          cy={70}
          innerRadius={50}
          outerRadius={150}
          barSize={20}
          data={recoveredData}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, confirmed.value]}
            angleAxisId={0}
            tick={false}
          />{" "}
          <RadialBar dataKey="uv" angleAxisId={0} data={[recoveredData[0]]} />
        </RadialBarChart>
        <CountUp
          className="case-category-number"
          start={0}
          end={recovered.value}
          duration={1}
          separator=","
        />
        <p className="radial-chart-label">Recovered</p>
      </div>
    </div>
  );
};

export default CaseDisplay;

// Radial Barcharts with percentages can be done like the following:
// https://github.com/recharts/recharts/issues/1100#issuecomment-354202584
