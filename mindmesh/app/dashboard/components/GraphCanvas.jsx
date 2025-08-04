import dynamic from 'next/dynamic';
import { useRef } from 'react';
import ForceGraph2D from 'force-graph';

// const ForceGraph2D = dynamic(
//   () => import('force-graph').then(mod => mod.ForceGraph2D),
//   { ssr: false }
// );

export default function GraphCanvas({ data }) {
  const fgRef = useRef();

  return (
    <div className="h-[600px] w-full bg-gray-800 rounded-xl p-2">
      <ForceGraph2D
        ref={fgRef}
        graphData={data}
        nodeAutoColorBy="group"
        linkDirectionalParticles={2}
        nodeCanvasObjectMode={() => 'before'}
        width={800}
        height={600}
      />
    </div>
  );
}
