import React from "react";
import { RadialChart } from "../../components";

import "./CaseDisplay.css";

const CaseDisplay = ({
  data: { active, confirmed, recovered, deaths }
}) => {
  if (!confirmed) {
    return null;
  }

  return (
    <div className="radial-chart-case-display">
      <RadialChart category={active} total={confirmed.value} color={"#FFA500"} label="Active" />
      <RadialChart category={deaths.value} total={confirmed.value} color={"#D66679"} label="Deaths" />
      <RadialChart category={recovered.value} total={confirmed.value} color={"#71FF2F"} label="Recovered" />
    </div>
  );
};

export default CaseDisplay;
