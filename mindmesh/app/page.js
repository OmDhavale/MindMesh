// pages/index.js
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-950 via-gray-900 to-gray-800 text-white flex flex-col justify-center items-center p-8 text-center">
      <h1 className="text-5xl font-extrabold mb-6 text-indigo-500 drop-shadow">MindMesh</h1>
      <p className="text-xl text-gray-300 max-w-md mb-8">
        A futuristic space to capture, connect, and rediscover your thoughts — powered by AI.
      </p>
      <Link
        href="/aipage"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition duration-200"
      >
        Launch Your Mind Mesh
      </Link>
    </div>
  );
}
