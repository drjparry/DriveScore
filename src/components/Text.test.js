import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import Text from "./Text";

test("it renders the correct text", () => {
  const wrapper = shallow(<Text size="12px" text="Some body text" />);
  const text = findByTestAttr(wrapper, "text");

  expect(text.text()).toBe("Some body text");
});
