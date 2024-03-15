import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "src/app/App";
import "@vkontakte/vkui/dist/vkui.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
