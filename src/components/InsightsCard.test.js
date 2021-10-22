import { mount } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import InsightsCard from "./InsightsCard";

const HEADING = "Electoral Role";
const BODY = "Being on the electoral roll can improve your score";

const defaultsetup = {
  onTrack: true,
  heading: HEADING,
  body: BODY,
  impactLevel: "medium",
};

describe("card on a small screen", () => {
  test("it renders without error", () => {
    const wrapper = mount(<InsightsCard {...defaultsetup} />);
    const insightsCard = findByTestAttr(
      wrapper,
      "component-insights-card"
    ).hostNodes();
    expect(insightsCard.length).toBe(1);
  });
  test("it renders an onTrack pill", () => {
    const wrapper = mount(<InsightsCard {...defaultsetup} />);
    const onTrackPill = findByTestAttr(wrapper, "on-track-pill").hostNodes();
    expect(onTrackPill.length).toBe(1);
  });
  test("it renders an impact pill on top", () => {
    const wrapper = mount(<InsightsCard {...defaultsetup} />);
    const topImpactPill = findByTestAttr(
      wrapper,
      "impact-pill-top"
    ).hostNodes();
    expect(topImpactPill.length).toBe(1);
  });
  test("it renders a heading", () => {
    const wrapper = mount(<InsightsCard {...defaultsetup} />);
    const heading = findByTestAttr(wrapper, "heading").hostNodes();
    expect(heading.length).toBe(1);
  });
  test("it renders a text body", () => {
    const wrapper = mount(<InsightsCard {...defaultsetup} />);
    const textBody = findByTestAttr(wrapper, "text").hostNodes();
    expect(textBody.length).toBe(1);
  });
});

describe("card on a large screen", () => {
  test("it renders an impact pill on the bottom", () => {
    const props = { ...defaultsetup };
    const wrapper = mount(<InsightsCard {...props} />);
    const bottomImpactPill = findByTestAttr(
      wrapper,
      "impact-pill-bottom"
    ).hostNodes();
    expect(bottomImpactPill.length).toBe(1);
  });
});
