import ReactFlow, {
  Background,
  Controls,
  ConnectionMode,
  useEdgesState,
  useNodesState,
  Connection,
  addEdge,
  Panel,
} from "reactflow";
import { Circle, Database, RectangleHorizontal } from "lucide-react";
import { zinc } from "tailwindcss/colors";
import "reactflow/dist/style.css";
import ArrowEdge from "./components/edges/ArrowEdge";
import { useCallback, useEffect, useState } from "react";
import * as Toolbar from "@radix-ui/react-toolbar";
import {
  Cylinder,
  Diamond,
  Paralelo,
  Rectangle,
  RoundRectangle,
  Sphere,
  Trapezoid,
} from "./components/nodes";
import DownloadButton from "./components/DownloadButton";

const NODE_TYPES = {
  rectangle: Rectangle,
  sphere: Sphere,
  diamond: Diamond,
  roundRectangle: RoundRectangle,
  trapezoid: Trapezoid,
  paralelo: Paralelo,
  cylinder: Cylinder,
};

const EDGE_TYPES = {
  default: ArrowEdge,
};

function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [selectedColor, setSelectedColor] = useState("transparent");

  const onConnect = useCallback((connection: Connection) => {
    return setEdges((edges) => addEdge(connection, edges));
  }, []);

  function addRectangleNode() {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: "rectangle",
        position: {
          x: 100,
          y: 50,
        },
        data: {},
      },
    ]);
  }

  function addSphereNode() {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: "sphere",
        position: {
          x: 100,
          y: 180,
        },
        data: {},
      },
    ]);
  }

  function addDiamondNode() {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: "diamond",
        position: {
          x: 280,
          y: 100,
        },
        data: {},
      },
    ]);
  }
  function addRoundRectangleNode() {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: "roundRectangle",
        position: {
          x: 550,
          y: 180,
        },
        data: {},
      },
    ]);
  }
  function addTrapezoidNode() {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: "trapezoid",
        position: {
          x: 150,
          y: 310,
        },
        data: {},
      },
    ]);
  }

  function addParaleloNode() {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: "paralelo",
        position: {
          x: 400,
          y: 310,
        },
        data: {},
      },
    ]);
  }
  function addCylinderNode() {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: "cylinder",
        position: {
          x: 650,
          y: 280,
        },
        data: {},
      },
    ]);
  }

  function handleColorChange(color: string) {
    setSelectedColor(color);
  }

  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkIsTablet = () => {
        setIsTablet(window.innerWidth < 1020);
      };
      checkIsTablet();
      window.addEventListener("resize", checkIsTablet);
      return () => {
        window.removeEventListener("resize", checkIsTablet);
      };
    }
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 860);
      };
      checkIsMobile();
      window.addEventListener("resize", checkIsMobile);
      return () => {
        window.removeEventListener("resize", checkIsMobile);
      };
    }
  }, []);

  const [isTiny, setIsTiny] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkIsTiny = () => {
        setIsTiny(window.innerWidth < 504);
      };
      checkIsTiny();
      window.addEventListener("resize", checkIsTiny);
      return () => {
        window.removeEventListener("resize", checkIsTiny);
      };
    }
  }, []);

  return (
    <div className="w-screen h-screen">
      <div
        style={{ background: selectedColor }}
        className="absolute w-full h-full transition-colors duration-300"
      >
        <ReactFlow
          nodeTypes={NODE_TYPES}
          edgeTypes={EDGE_TYPES}
          nodes={nodes}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onNodesChange={onNodesChange}
          onConnect={onConnect}
          connectionMode={ConnectionMode.Loose}
          defaultEdgeOptions={{ type: "default" }}
        >
          <Background gap={12} size={2} color={zinc[400]} />
          <Controls className="bg-orange-50" />
          <Panel position="top-right">
            <img src="/assets/ColorFlow.png" width="300" />
          </Panel>

          <DownloadButton />
        </ReactFlow>
      </div>
      <div className="absolute top-4 left-4">
        <div
          onClick={() =>
            handleColorChange(
              "linear-gradient(90deg, rgb(190, 197, 250) 0%, rgb(124, 180, 200) 100%)"
            )
          }
          style={{ backgroundColor: "#3b82f6" }}
          className="w-6 h-6 rounded-full cursor-pointer mx-2"
        ></div>
        <div
          onClick={() =>
            handleColorChange(
              "linear-gradient(90deg, rgb(198, 255, 184)0%, rgb(176, 255, 124) 100%)"
            )
          }
          style={{ backgroundColor: "#22c55e" }}
          className="w-6 h-6 rounded-full cursor-pointer mx-2"
        ></div>
        <div
          onClick={() =>
            handleColorChange(
              "linear-gradient(90deg, rgb(250, 250, 168)0%, rgb(246, 248, 105) 100%)"
            )
          }
          style={{ backgroundColor: "#FFD552" }}
          className="w-6 h-6 rounded-full cursor-pointer mx-2"
        ></div>
        <div
          onClick={() =>
            handleColorChange(
              "linear-gradient(90deg, rgb(247, 153, 153)0%, rgb(250, 123, 123) 100%)"
            )
          }
          style={{ backgroundColor: "#E14B3F" }}
          className="w-6 h-6 rounded-full cursor-pointer mx-2"
        ></div>
        <div
          onClick={() =>
            handleColorChange(
              "linear-gradient(90deg, rgb(250, 168, 232)0%, rgb(243, 105, 248)100%)"
            )
          }
          style={{ backgroundColor: "#E251C8" }}
          className="w-6 h-6 rounded-full cursor-pointer mx-2"
        ></div>
        <div
          onClick={() =>
            handleColorChange(
              "linear-gradient(90deg, rgb(168, 250, 246)0%, rgb(105, 243, 248)100%)"
            )
          }
          style={{ backgroundColor: "#51CAE2" }}
          className="w-6 h-6 rounded-full cursor-pointer mx-2"
        ></div>
        <div
          onClick={() =>
            handleColorChange(
              "linear-gradient(90deg, rgb(255, 204, 138)0%, rgb(248, 193, 91)100%)"
            )
          }
          style={{ backgroundColor: "#FF985A" }}
          className="w-6 h-6 rounded-full cursor-pointer mx-2"
        ></div>
      </div>
      <Toolbar.Root
        style={{ width: "80%" }}
        className={
          isTablet
            ? isMobile
              ? isTiny
                ? "fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-3 h-8 overflow-hidden flex justify-center ml-4"
                : "fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-4 h-10 overflow-hidden flex justify-center"
              : "fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-6 h-16 overflow-hidden flex justify-center"
            : "fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 overflow-hidden flex justify-center"
        }
      >
        <Toolbar.Button onClick={addRectangleNode}>
          <RectangleHorizontal
            className={
              isTablet
                ? isMobile
                  ? isTiny
                    ? "text-blue-500 h-8 w-6  mr-1"
                    : "text-blue-500 h-10 w-8  mr-8"
                  : "text-blue-500 h-16 w-12 ml-6"
                : "text-blue-500 h-16 w-16 ml-8"
            }
          />
        </Toolbar.Button>

        <Toolbar.Button onClick={addSphereNode}>
          <Circle
            className={
              isTablet
                ? isMobile
                  ? isTiny
                    ? "text-green-500 h-5 w-10 mr-1"
                    : "text-green-500 h-7 w-21 mr-8"
                  : "text-green-500 h-10 w-28"
                : "text-green-500 h-14 w-32"
            }
          />
        </Toolbar.Button>

        <Toolbar.Button onClick={addDiamondNode}>
          <img
            src="/assets/diamond.png"
            width={isTablet ? (isMobile ? (isTiny ? "20" : "25") : "40") : "60"}
            style={{ marginRight: "30px" }}
          />
        </Toolbar.Button>

        <Toolbar.Button onClick={addRoundRectangleNode}>
          <img
            src="/assets/roundRectangle.png"
            width={isTablet ? (isMobile ? (isTiny ? "30" : "40") : "70") : "90"}
            style={{ marginRight: "30px" }}
          />
        </Toolbar.Button>

        <Toolbar.Button onClick={addTrapezoidNode}>
          <img
            src="/assets/trapzoid.png"
            width={isTablet ? (isMobile ? (isTiny ? "30" : "40") : "70") : "90"}
            style={{ marginRight: "30px" }}
          />
        </Toolbar.Button>

        <Toolbar.Button onClick={addParaleloNode}>
          <img
            src="/assets/parallelogram.png"
            width={isTablet ? (isMobile ? (isTiny ? "25" : "30") : "50") : "70"}
          />
        </Toolbar.Button>

        <Toolbar.Button onClick={addCylinderNode}>
          <Database
            className={
              isTablet
                ? isMobile
                  ? isTiny
                    ? "text-orange-300 h-5  mr-0 ml-2"
                    : "text-orange-300 h-6  mr-0 ml-8"
                  : "text-orange-300 h-10 w-28 mr-0"
                : "text-orange-300 h-14 w-32 mr-0"
            }
          />
        </Toolbar.Button>
      </Toolbar.Root>
    </div>
  );
}

export default App;
