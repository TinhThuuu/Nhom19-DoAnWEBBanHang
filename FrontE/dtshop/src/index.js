import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterCustom from "./router";
import "./styles/style.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <RouterCustom />
    </BrowserRouter>
  </QueryClientProvider>
);