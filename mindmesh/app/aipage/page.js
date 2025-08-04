// components/MobileThoughtGraph.js
"use client";
import React, { useState } from 'react';

const MobileThoughtGraph = () => {
  const [thought, setThought] = useState('');
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!thought.trim()) return;
    setLoading(true);
    
    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: thought }),
      });
      const data = await response.json();
      setSummary(data.summary);
    } catch (err) {
      console.error(err);
      setSummary('Error generating summary.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">MindMesh</h1>
        <p className="italic text-sm">"Ignite your mind pulse of the day"</p>
      </header>

      <div className="flex-1 bg-gray-800 rounded-2xl mb-4 p-2">
        {/* Placeholder for interactive graph */}
        <p className="text-center text-gray-400 mt-16">[Interactive Thought Graph]</p>
      </div>

      <textarea
        className="w-full h-20 bg-gray-700 rounded-xl p-2 mb-2 text-base"
        placeholder="Enter a thought..."
        value={thought}
        onChange={(e) => setThought(e.target.value)}
      />

      <button
        className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium mb-4"
        onClick={handleSummarize}
      >
        {loading ? 'Summarizing...' : 'Summarize Thought'}
      </button>

      {summary && (
        <div className="bg-gray-800 rounded-2xl p-4">
          <h2 className="text-lg font-semibold mb-2">Summary</h2>
          <p>{summary}</p>
        </div>
      )}

      <button className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 p-4 rounded-full shadow-lg">
        +
      </button>
    </div>
  );
};

export default MobileThoughtGraph;
