import { useState } from "react";
import { EdgeProps, getSmoothStepPath } from "reactflow";

export default function ArrowEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}: EdgeProps) {
  const [text, setText] = useState("Texto Opcional");
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const edgeStyle = {
    strokeWidth: 2,
    stroke: "#747373",
    fill: "none",
  };

  const arrowMarkerId = `arrow-${id}`;

  const midX = (sourceX + targetX) / 2;
  const midY = (sourceY + targetY) / 2;

  return (
    <>
      <defs>
        <marker
          id={arrowMarkerId}
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,8 L8,4 z" fill="#747373" />
        </marker>
      </defs>

      <path
        id={id}
        style={edgeStyle}
        className="react-flow__edge-Path stroke-2 stroke-zinc-500"
        d={edgePath}
        markerEnd={`url(#${arrowMarkerId})`}
      />

      <foreignObject x={midX - 50} y={midY - 15} width="150" height="60">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "150px",
            height: "60px",
            resize: "none",
            border: "none",
            background: "transparent",
            outline: "none",
            textAlign: "center",
          }}
        />
      </foreignObject>
    </>
  );
}
