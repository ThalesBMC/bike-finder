'use client';

import dynamic from 'next/dynamic';

const BikeFlowMap = dynamic(() => import('@/components/BikeFlowMap'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto mb-4"></div>
        <p className="text-white text-xl">Loading Bike Flow Map...</p>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="w-full h-screen">
      <BikeFlowMap />
    </main>
  );
}
