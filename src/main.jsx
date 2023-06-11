import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { EditAppProvider } from "./appContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <EditAppProvider>
    <App />
  </EditAppProvider>
);
