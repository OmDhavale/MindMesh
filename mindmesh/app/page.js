import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to MindMesh</h1>
      <p className="mb-6 text-lg">Organize and connect your thoughts with AI.</p>
      <Link href="/dashboard" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Go to Dashboard</Link>
    </main>
  );
}
