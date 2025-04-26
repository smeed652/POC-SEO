import type { Meta, StoryObj } from '@storybook/react';
import { SampleAtom } from './SampleAtom';

const meta: Meta<typeof SampleAtom> = {
  title: 'Atoms/SampleAtom',
  component: SampleAtom,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof SampleAtom>;

export const Default: Story = {
  args: {
    label: 'Sample Atom',
  },
};
