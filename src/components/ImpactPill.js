import React from "react";

const ImpactPill = ({ impactLevel }) => {
  const text = `${impactLevel.toUpperCase()} IMPACT`;

  return <div data-test="impact-pill">{text}</div>;
};

export default ImpactPill;
