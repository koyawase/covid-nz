import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import CountUp from "react-countup";

import "./RadialChart.css";

const RadialChart = ({category, total, color, label}) => {

    const data = [{ uv: category, fill: color }];

    return (
        <div className="radial-chart-container">
        <RadialBarChart
          width={140}
          height={140}
          cx={70}
          cy={70}
          innerRadius={50}
          outerRadius={150}
          barSize={20}
          data={data}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, total]}
            angleAxisId={0}
            tick={false}
          />{" "}
          <RadialBar dataKey="uv" angleAxisId={0} data={[data[0]]} />
        </RadialBarChart>

        <CountUp
          className="case-category-number"
          start={0}
          end={category}
          duration={1}
          separator=","
        />
        <p className="radial-chart-label">{label}</p>
      </div>
    );
}

export default RadialChart;