import { mount } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import CardGallery from "./CardGallery";

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
  const wrapper = mount(<CardGallery cards={cards} screenSize="small" />);
  const cardGallery = findByTestAttr(wrapper, "component-card-gallery");
  expect(cardGallery.length).toBe(1);
});

test("it renders all the cards", () => {
  const wrapper = mount(<CardGallery cards={cards} screenSize="small" />);
  const insightsCards = findByTestAttr(wrapper, "component-insights-card");
  expect(insightsCards.length).toBe(2);
});
