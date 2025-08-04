'use client';

import GraphCanvas from './components/GraphCanvas';
import ThoughtForm from './components/ThoughtForm';
import { useState } from 'react';

export default function Dashboard() {
  const [thoughts, setThoughts] = useState([]);

  const addThought = (newThought) => {
    setThoughts([...thoughts, newThought]);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="lg:w-1/3 p-4 bg-gray-800">
        <ThoughtForm onAdd={addThought} />
      </div>
      <div className="lg:w-2/3 p-4">
        <GraphCanvas thoughts={thoughts} />
      </div>
    </div>
  );
}
