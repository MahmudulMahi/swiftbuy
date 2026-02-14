'use client';

import { useState } from 'react';

interface ProductDetailsTabsProps {
  description: string;
  features?: string[];
}

export default function ProductDetailsTabs({
  description,
  features = [],
}: ProductDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'shipping'>(
    'description'
  );

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'features', label: 'Features' },
    { id: 'shipping', label: 'Shipping & Returns' },
  ];

  return (
    <div className="border-t border-gray-200 pt-8 mt-12">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

 
    </div>
  );
}