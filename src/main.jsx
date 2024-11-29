import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//Styles
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../src/assets/css/index.css";

//Components
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
