import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@leafbite/react/src/';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Leafbite/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    color: 'danger',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Button',
    color: 'warning',
  },
};
