import type { Route } from "./+types/home";
import { EmployeePage } from "../pages/employee-page/employee-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <EmployeePage />;
}
