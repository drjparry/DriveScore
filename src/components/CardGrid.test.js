import { mount, shallow } from "enzyme";
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

describe("Card Grid", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  test("it renders without error", () => {
    const wrapper = shallow(<CardGrid cards={cards} />);
    const cardGrid = findByTestAttr(wrapper, "component-card-grid");
    expect(cardGrid.length).toBe(1);
  });

  test("it renders all the cards", () => {
    const wrapper = mount(<CardGrid cards={cards} />);
    const insightsCards = findByTestAttr(
      wrapper,
      "component-insights-card"
    ).hostNodes();
    expect(insightsCards.length).toBe(2);
  });
});
