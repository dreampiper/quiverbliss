import CanvasStore from "../state/CanvasStore";
import { inBounds } from "./math-utils";
import * as React from "react";

export interface CanvasPosition {
  top: number;
  left: number;
  width: number;
  height: number;
  children?: React.ReactNode;
}

export const Position = ({
  left,
  top,
  width,
  height,
  children,
}: CanvasPosition) => {
  const screen = CanvasStore.screen;
  if (
    inBounds(
      { left, top, height, width },
      {
        left: screen.x,
        top: screen.y,
        width: screen.width,
        height: screen.height,
      }
    )
  ) {
    return (
      <div
        draggable={false}
        className="absolute inline-block"
        style={{
          left: `${left - screen.x}px`,
          top: `${top - screen.y}px`,
        }}
      >
        {children}
      </div>
    );
  } else return null;
};
