import { NodeProps, Handle, Position, NodeResizer } from "reactflow";
import "@reactflow/node-resizer/dist/style.css";
import { useState } from "react";

export function Sphere({ selected }: NodeProps) {
  const [text, setText] = useState("Texto Inicial");

  return (
    <div
      style={{ backgroundColor: "#22c55e" }}
      className="rounded-full w-full h-full min-w-[100px] min-h-[100px] relative"
    >
      <NodeResizer
        minWidth={100}
        minHeight={100}
        isVisible={selected}
        lineClassName="border-blue-400"
        handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
      />

      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "90%",
          height: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-zinc-100"
          style={{
            fontWeight: "bolder",
            resize: "none",
            width: "100%",
            padding: "8px",
            boxSizing: "border-box",
            border: "none",
            background: "transparent",
            outline: "none",
            textAlign: "center",
          }}
        />
      </div>

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
  );
}
