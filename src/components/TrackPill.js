import React from "react";

const style = {
  fontSize: "12px",
  fontWeight: "normal",
  lineHeight: "20px",
  textAlign: "center",
  borderRadius: "4px",
  padding: "0px 4px",
  letterSpacing: "0.4px",
};

const OffTrackPill = () => (
  <div
    style={{ ...style, color: "#764C25", backgroundColor: "#FDEFE2" }}
    data-test="off-track-pill"
  >
    OFF TRACK
  </div>
);

const OnTrackPill = () => (
  <div
    style={{ ...style, color: "#15693B", backgroundColor: "#DDF9EA" }}
    data-test="on-track-pill"
  >
    ON TRACK
  </div>
);

const TrackPill = ({ onTrack }) => {
  if (onTrack) {
    return <OnTrackPill />;
  }

  return <OffTrackPill />;
};

export default TrackPill;
