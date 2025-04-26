import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DishDetailPage from './DishDetailPage';

const meta: Meta<typeof DishDetailPage> = {
  title: 'Pages/DishDetailPage',
  component: DishDetailPage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DishDetailPage>;

export const Default: Story = {
  render: () => <DishDetailPage />,
};
