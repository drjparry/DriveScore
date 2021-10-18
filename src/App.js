import React from "react";
import getWindowWidth from "./utils/getWindowWidth";

const App = () => {
  const { width } = getWindowWidth();

  console.log(width);

  return (
    <div className="App">
      <div>Insights</div>
    </div>
  );
};

export default App;
