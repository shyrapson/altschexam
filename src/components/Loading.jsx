import React from "react";
import {BallTriangle} from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="loading">
      
      <div>	<BallTriangle color="#00BFFF" height={120} width={120} /></div>
    </div>
  );
};

export default Loading;