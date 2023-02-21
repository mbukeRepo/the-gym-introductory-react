import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const btn = (
  <button
    onClick={(event) => {
      alert("capturing user clicks");
    }}
  >
    Click Me
  </button>
);

const rootEl = document.getElementById("root");

const root = ReactDOM.createRoot(rootEl as Element);

root.render(btn);
