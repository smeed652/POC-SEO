import React from 'react';
import PageContainer from '../layout/PageContainer';
import SeoNavigation from '../organisms/SeoNavigation';

const SampleSeoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SeoNavigation />
      <PageContainer>
        {/* Example main content */}
        <div className="py-10">
          <h1 className="text-3xl font-bold text-zinc-800 mb-6">The Mediterranean Burger</h1>
          <p className="text-zinc-600 max-w-2xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example cards */}
            <div className="bg-white rounded-lg shadow p-6">Card 1</div>
            <div className="bg-white rounded-lg shadow p-6">Card 2</div>
            <div className="bg-white rounded-lg shadow p-6">Card 3</div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default SampleSeoPage;
