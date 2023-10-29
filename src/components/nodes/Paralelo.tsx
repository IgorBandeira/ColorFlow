import { Handle, Position } from "reactflow";
import "@reactflow/node-resizer/dist/style.css";
import { useState } from "react";

export function Paralelo() {
  const [text, setText] = useState("Texto Inicial");

  return (
    <div
      className="trapezoid  min-w-[180px] min-h-[50px]"
      style={paraleloStyle}
    >
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
          className="text-zinc-50"
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

const paraleloStyle = {
  width: "150px",
  height: "100px",
  "-webkit-transform": "skew(20deg)",
  "-moz-transform": "skew(20deg)",
  "-o-transform": "skew(20deg)",
  background: "#51CAE2",
};
