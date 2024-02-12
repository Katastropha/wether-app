import React from "react";
import { FC, ReactElement, useRef, useState } from "react";

export const Square: FC<{ children: ReactElement }> = ({
  children,
}): ReactElement => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const movableDivRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const topPos = position.y - (movableDivRef.current?.clientHeight ?? 0) / 2;
  const leftPos = position.x - (movableDivRef.current?.clientWidth ?? 0) / 2;

  return (
    <div className="container" onMouseMove={handleMove}>
      <div
        ref={movableDivRef}
        className="square"
        style={{
          transform: `translate(${leftPos}px, ${topPos}px)`,
          //   top: topPos,
          //   left: leftPos,
          transition: "all 1s cubic-bezier(0.1, 2, 0.5, 0.9)",
        }}
      ></div>
      {children}
    </div>
  );
};

// export default Square;
