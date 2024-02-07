// import { useState } from "react";
import "./App.css";
import { Square } from "./Square";

// const Square = (): ReactElement => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleClick = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//     console.log("test", position);
//   };

//   // return (
//   //   <div
//   //     className="follow-element"
//   //     style={{
//   //       position: "absolute",
//   //       top: position.x,
//   //       left: position.y,
//   //       transition: "all 1s ease-out",
//   //     }}
//   //     onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
//   //   ></div>
//   // );

//   return (
//     <div
//       onClick={handleClick}
//       className="square"
//       style={{ position: "absolute", top: position.x, left: position.y }}
//     ></div>
//   );
// };

function App() {
  // const [count, setCount] = useState(0);
  console.log("i am here!");
  return (
    <Square>
      <div></div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </Square>
  );
}

export default App;
