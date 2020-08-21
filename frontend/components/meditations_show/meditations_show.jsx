import React from "react";
import { Link } from "react-router-dom";

import { ProtectedRoute } from "../../util/route_util";

const MeditationShow = ({ meditation, meditationId, fetchMeditation, duration }) => {
  const meditations = {
    [meditationId]: meditation,
  };

  return (
    <div className="single-meditation-show">
      <div className="meditation-details">
        {/* <BenchDetail bench={bench} reviews={reviews} /> */}
      </div>
    </div>
  );
};

export default MeditationShow;
