import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import ImpactPill from "./ImpactPill";

test("it renders the correct impact level", () => {
  const wrapper = shallow(<ImpactPill impactLevel="high" />);
  const impactPill = findByTestAttr(wrapper, "impact-pill");

  expect(impactPill.text()).toBe("HIGH IMPACT");
});
