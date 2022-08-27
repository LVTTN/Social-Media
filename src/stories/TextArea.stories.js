import { TextArea } from "components";
export default {
  title: "growthly/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder6",
  variant: "OutlineBluegray200",
  size: "sm",
  placeholder: "placeholder",
};
