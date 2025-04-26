import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PageContainer from './PageContainer';

const meta: Meta<typeof PageContainer> = {
  title: 'Layout/PageContainer',
  component: PageContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageContainer>;

export const Default: Story = {
  render: () => (
    <PageContainer>
      <div style={{ background: '#e0e7ef', padding: 24, borderRadius: 8 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#071D3B' }}>PageContainer Example</h2>
        <p style={{ color: '#526176' }}>
          This content is wrapped in a PageContainer. Resize the Storybook window to see responsive padding and max width.
        </p>
      </div>
    </PageContainer>
  ),
};
