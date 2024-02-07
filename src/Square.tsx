import { ReactElement, useState } from "react";

export const Square = ({ children }): ReactElement => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    console.log(position.x, position.y);
  };

  return (
    <div className="container" onClick={handleClick}>
      <div
        className="square"
        style={{
          position: "absolute",
          top: position.y - 50,
          left: position.x - 50,
          transition: "all 1s ease-out",
        }}
      ></div>
      {children}
    </div>
  );
};

// const Square = (): ReactElement => {
//     const [position, setPosition] = useState({ x: 0, y: 0 });

//     const handleClick = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//       console.log("test", position);
//     };

//     // return (
//     //   <div
//     //     className="follow-element"
//     //     style={{
//     //       position: "absolute",
//     //       top: position.x,
//     //       left: position.y,
//     //       transition: "all 1s ease-out",
//     //     }}
//     //     onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
//     //   ></div>
//     // );

//     return (
//       <div
//         onClick={handleClick}
//         className="square"
//         style={{ position: "absolute", top: position.x, left: position.y }}
//       ></div>
//     );
//   };
