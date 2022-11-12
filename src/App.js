import "./styles.css";
import { useEffect, useState } from "react";
import { external } from "./External";

function Left() {
  let [left, setLeftInternalState] = useState();

  return (
    <span>
      <input
        value={left}
        onChange={(e) => {
          setLeftInternalState(e.target.value);
          external.left = e.target.value;
          external.doFinalCall();
        }}
      />
    </span>
  );
}

function Right() {
  let [right, setRightInternalState] = useState();

  return (
    <span>
      <input
        value={right}
        onChange={(e) => {
          setRightInternalState(e.target.value);
          external.right = e.target.value;
          external.doFinalCall();
        }}
      />
    </span>
  );
}

export default function App() {
  let [total, setTotal] = useState(0);

  useEffect(() => {
    external.registerFinalCall(setTotal);
  }, [total]);

  return (
    <div className="App">
      <h1>Totals</h1>
      <Left />
      <Right />
      total is {total}
    </div>
  );
}
