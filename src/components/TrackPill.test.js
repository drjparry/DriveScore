import { mount } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import TrackPill from "./TrackPill";

test("it renders off track pill when onTrack is false", () => {
  const wrapper = mount(<TrackPill onTrack={false} />);
  const offTrackPill = findByTestAttr(wrapper, "off-track-pill");
  expect(offTrackPill.length).toBe(1);
});

test("it renders on track pill when onTrack is true", () => {
  const wrapper = mount(<TrackPill onTrack={true} />);
  const onTrackPill = findByTestAttr(wrapper, "on-track-pill");
  expect(onTrackPill.length).toBe(1);
});
