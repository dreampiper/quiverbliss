import * as React from "react";
import useSize from "@react-hook/size";
import { PointerEvent, useEffect, useRef, WheelEvent } from "react";
import useRenderLoop from "../core/RenderLoop";
import CanvasStore from "../state/CanvasStore";
import InfiniteCanvas from "./InfiniteCanvas";

const wheelListener = (e: WheelEvent) => {
  const friction = 1;
  const event = e as WheelEvent;
  const deltaX = event.deltaX * friction;
  const deltaY = event.deltaY * friction;

  if (event.ctrlKey || event.metaKey) {
    CanvasStore.zoomCamera(deltaX, deltaY);
  } else {
    CanvasStore.moveCamera(deltaX, deltaY);
  }
};

const pointerListener = (event: PointerEvent) => {
  CanvasStore.movePointer(event.clientX, event.clientY);
};

const CanvasRoot = () => {
  const canvas = useRef<HTMLDivElement>(null);
  const [width, height] = useSize(canvas);
  // console.log(width, height);
  useEffect(() => {
    if (width === 0 || height === 0) return;
    CanvasStore.initialize(width, height);
  }, [width, height]);
  const frame = useRenderLoop(60);
  return (
    <div className="w-full h-full bg-[#13121D] bg-[url(/grid--dark.svg)]">
      <div
        className="w-full h-full relative overflow-hidden overscroll-none"
        ref={canvas}
        onWheel={wheelListener}
        onPointerMove={pointerListener}
      >
        <InfiniteCanvas frame={frame}></InfiniteCanvas>
      </div>
    </div>
  );
};

export default CanvasRoot;
