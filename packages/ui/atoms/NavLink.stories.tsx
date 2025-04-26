import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NavLink from './NavLink';

const meta: Meta<typeof NavLink> = {
  title: 'Atoms/NavLink',
  component: NavLink,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  render: () => <NavLink href="/menus">Explore Menus</NavLink>,
};

export const Bold: Story = {
  render: () => <NavLink href="/menus" fontWeight="bold">Explore Menus</NavLink>,
};

export const Medium: Story = {
  render: () => <NavLink href="/signin" fontWeight="medium">Sign in</NavLink>,
};

export const Active: Story = {
  render: () => <NavLink href="/menus" active>Active Link</NavLink>,
};
