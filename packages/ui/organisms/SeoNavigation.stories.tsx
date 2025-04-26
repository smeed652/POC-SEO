import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SeoNavigation } from './SeoNavigation';
import { IconMenu, IconArrow } from '../atoms/icons';

const meta: Meta<typeof SeoNavigation> = {
  title: 'Organisms/SeoNavigation',
  component: SeoNavigation,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SeoNavigation>;

export const Default: Story = {
  render: () => <SeoNavigation />, // Uses default icons
};

export const CustomIcons: Story = {
  render: () => (
    <SeoNavigation icons={[<IconMenu key="menu" />, <IconArrow key="arrow" />, <IconArrow key="arrow2" />]} />
  ),
};
