import { CheckBox } from "components";
export default {
  title: "growthly/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  shape: "RoundedBorder4",
  variant: "OutlineBluegray600",
  size: "sm",
  inputClassName: "mr-1",
};
