import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Comp from "./test/test";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Comp />
  </StrictMode>
);
