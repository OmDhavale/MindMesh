import { useState } from 'react';

export default function ThoughtForm({ onAdd }) {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/summarize', {
      method: 'POST',
      body: JSON.stringify({ thoughtText: text }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    setSummary(data.summary);
    onAdd({ text, summary });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        className="w-full p-2 bg-gray-700 rounded"
        placeholder="Type your thought..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700" type="submit">
        Add Thought
      </button>
      {summary && (
        <div className="text-sm text-gray-300 mt-2">AI Summary: {summary}</div>
      )}
    </form>
  );
}
