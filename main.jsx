import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/app";

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <App />
    </div>
  </>
);
