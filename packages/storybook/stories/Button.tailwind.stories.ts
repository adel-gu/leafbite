import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@leafbite/react-tailwind';
import '@leafbite/react-tailwind/lib/output.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Tailwind/Button',
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
