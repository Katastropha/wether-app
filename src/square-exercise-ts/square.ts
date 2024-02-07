import "square.css";

const square = document.createElement("div");
square.classList.add("square");
document.body.appendChild(square);

document.body.addEventListener("mousemove", (e) => {
  const x: number = e.clientX - 25;
  const y: number = e.clientY - 25;
  square.style.transform = `translate(${x}px, ${y}px)`;
});
