import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 pc-2">
        <div className="flex flex-wrap shadow-xl bg-white gap-3 px-3 py-2 rounded-xl">
          <button
            className=" outline-none px-4 py-1 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className=" outline-none px-4 py-1 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className=" outline-none px-4 py-1 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "violet" }}
            onClick={() => {
              setColor("violet");
            }}
          >
            Violet
          </button>
          <button
            className=" outline-none px-4 py-1 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "aqua" }}
            onClick={() => {
              setColor("aqua");
            }}
          >
            Aqua
          </button>
          <button
            className=" outline-none px-4 py-1 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>

          <button
            className=" outline-none px-4 py-1 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "purple" }}
            onClick={() => {
              setColor("purple");
            }}
          >
            Purple
          </button>
          <button
            className=" outline-none px-4 py-1 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "gray" }}
            onClick={() => {
              setColor("gray");
            }}
          >
            Gray
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
