import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import contextProvider from "./context/context.jsx";

createRoot(document.getElementById("root")).render(
  <contextProvider>
    <App />
  </contextProvider>
);
