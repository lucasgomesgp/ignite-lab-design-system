import { Button, ButtonProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Compomonents/Button",
  component: Button,
  args: {
    children: "Create account",
  },
  argTypes: {},
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
