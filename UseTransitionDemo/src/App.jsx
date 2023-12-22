import { useState, useTransition } from "react";
import "./App.css";

function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState();
  const [list, setList] = useState([]);

  const ITEMS = 2000;

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const list = [];
      for (let index = 0; index < ITEMS; index++) {
        list[index] = e.target.value;
      }
      setList(list);
    });
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending?"Loading......." :list.map((l, index) => {
        return <div key={index}>{l}</div>;
      })}
    </>
  );
}

export default App;
