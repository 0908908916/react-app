import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // 把App.js 的輸出導入進來

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);

// http://localhost:3000/ 網址為
