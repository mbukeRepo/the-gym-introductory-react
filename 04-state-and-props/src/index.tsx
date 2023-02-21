import React, { FC, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

interface ClickCounterProps {
  increment: number;
  initialCount: number;
}

const ClickCounter: FC<ClickCounterProps> = ({ increment, initialCount }) => {
  const [count, setCount] = useState<number>(initialCount);

  return (
    <>
      <p>Button has been clicked: {count} times</p>
      <button onClick={() => setCount(count + increment)}>Click Me</button>
    </>
  );
};

const element = <ClickCounter increment={1} initialCount={10}></ClickCounter>;

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(element);
