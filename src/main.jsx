import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { routes } from "./routes/Router.jsx";
import "aos/dist/aos.css";
import Aos from "aos";
Aos.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="w-11/12 mx-auto">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  </StrictMode>,
);
