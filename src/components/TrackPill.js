import React from "react";

const OffTrackPill = () => <div data-test="off-track-pill">OFF TRACK</div>;

const OnTrackPill = () => <div data-test="on-track-pill">ON TRACK</div>;

const TrackPill = ({ onTrack }) => {
  if (onTrack) {
    return <OnTrackPill />;
  }

  return <OffTrackPill />;
};

export default TrackPill;
