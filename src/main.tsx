import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Styles/fonts.css";
import { UserApp } from "./UserApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserApp />
    </BrowserRouter>
  </React.StrictMode>
);
