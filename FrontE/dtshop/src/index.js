import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterCustom from "./router";
import "./styles/style.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactSession } from "react-client-session";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();
ReactSession.setStoreType("sessionStorage");

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <RouterCustom />
    </BrowserRouter>
  </QueryClientProvider>
);