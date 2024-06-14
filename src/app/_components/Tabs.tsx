// components/Tabs.tsx
"use client"; 
import { useState } from 'react';

type TabProps = {
  tabs: string[];
};

const Tabs = ({ tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="flex space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              tab === activeTab ? 'bg-blue-500 text-white' : 'bg-white text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 border rounded">
        {activeTab} content
      </div>
    </div>
  );
};

export default Tabs;
