import { Handle, Position } from "reactflow";
import "@reactflow/node-resizer/dist/style.css";
import { useState } from "react";

export function Diamond() {
  const [text, setText] = useState("Texto Inicial");

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "200px",
          border: "none",
          resize: "none",
          background: "transparent",
          outline: "none",
          textAlign: "center",
          marginBottom: "20px",
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100px",
          height: "100px",
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <polygon
            points="50,0 100,50 50,100 0,50"
            style={{ fill: "#FFD552" }}
          />
        </svg>
        <Handle
          id="right"
          type="source"
          position={Position.Right}
          className="-right-5 w-3 h-3 bg-blue-400/80"
        />
        <Handle
          id="left"
          type="source"
          position={Position.Left}
          className="-left-5 w-3 h-3 bg-blue-400/80"
        />
        <Handle
          id="top"
          type="source"
          position={Position.Top}
          className="-top-5 w-3 h-3 bg-blue-400/80"
        />
        <Handle
          id="bottom"
          type="source"
          position={Position.Bottom}
          className="-bottom-5 w-3 h-3 bg-blue-400/80"
        />
      </div>
    </div>
  );
}
