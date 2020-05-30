import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const LineChartTracker = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  if (!dailyData[0]) return null;

  var data = [];
  dailyData.map(({ reportDate, totalConfirmed, deaths }) =>
    data.push({
      name: new Date(reportDate).toDateString(),
      cases: totalConfirmed,
      deaths: deaths.total
    })
  );

  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="name" tick={false}/>
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="cases"
        stroke="#FFA500"
      />
      <Line type="monotone" dataKey="deaths" stroke="#D66679" />
    </LineChart>
  );
};

export default LineChartTracker;
