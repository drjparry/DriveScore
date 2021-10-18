import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import Heading from "./Heading";

test("it renders the correct text", () => {
  const wrapper = shallow(<Heading size="20px" text="Some header text" />);
  const heading = findByTestAttr(wrapper, "heading");

  expect(heading.text()).toBe("Some header text");
});
