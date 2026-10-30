import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";
import { Outlet } from "react-router";
import "./app.css";
import { StyleProvider } from "./components/ui/provider";

const queryClient = new QueryClient();

export const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <StyleProvider>
      <Outlet />
    </StyleProvider>
  </QueryClientProvider>
);
