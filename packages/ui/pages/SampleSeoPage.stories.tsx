import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SeoNavigation } from '../organisms/SeoNavigation';
import PageContainer from '../layout/PageContainer';

const meta: Meta<typeof SeoNavigation> = {
  title: 'Pages/SampleSeoPageWithNav',
  component: SeoNavigation,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50">
      <SeoNavigation />
      <PageContainer>
        <div style={{ background: '#e0e7ef', padding: 24, borderRadius: 8, color: '#526176', textAlign: 'center' }}>
          Main content goes here…
        </div>
      </PageContainer>
    </div>
  ),
};
