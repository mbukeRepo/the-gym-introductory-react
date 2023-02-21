import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const helloWorldElement = <div className="container">Hello World!</div>;

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement as Element);

root.render(helloWorldElement);
