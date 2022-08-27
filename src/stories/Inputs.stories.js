import { Input } from "components";
export default {
  title: "growthly/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "RoundedBorder6",
  variant: "OutlineBluegray200",
  size: "lg",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
