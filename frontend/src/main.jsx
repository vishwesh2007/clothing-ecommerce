import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/Products.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductsProvider>
      <App />
      <SpeedInsights />
    </ProductsProvider>
  </BrowserRouter>
);