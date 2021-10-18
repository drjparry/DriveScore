import { mount } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import CardGrid from "./CardGrid";

const cards = [
  {
    onTrack: true,
    heading: "electoral role",
    body: "some body",
    impactLevel: "high",
    id: "erfewrfre",
  },
  {
    onTrack: false,
    heading: "hard searches",
    body: "some other body",
    impactLevel: "medium",
    id: "dfdfewrfer",
  },
];

test("it renders without error", () => {
  const wrapper = mount(<CardGrid cards={cards} screenSize="large" />);
  const cardGrid = findByTestAttr(wrapper, "component-card-grid");
  expect(cardGrid.length).toBe(1);
});

test("it renders all the cards", () => {
  const wrapper = mount(<CardGrid cards={cards} screenSize="large" />);
  const insightsCards = findByTestAttr(wrapper, "component-insights-card");
  expect(insightsCards.length).toBe(2);
});
