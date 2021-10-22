import React from "react";

const style = {
  color: "rgb(38, 54, 72)",
  fontSize: "16px",
  fontWeight: "bold",
  height: "20px",
  lineHeight: "20px",
};

const Heading = ({ size, text }) => {
  return (
    <div style={style} data-test="heading">
      {text}
    </div>
  );
};

export default Heading;
