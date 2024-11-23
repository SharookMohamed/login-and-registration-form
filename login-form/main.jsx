import React from "react";
import ReactDOM from "react-dom/client";

// ---------------------------

import LoginSection from "./components/LoginSection.jsx";
// --------------------------

ReactDOM.createRoot(document.querySelector(".login--section")).render(
  <React.StrictMode>
    <LoginSection />
  </React.StrictMode>
);
