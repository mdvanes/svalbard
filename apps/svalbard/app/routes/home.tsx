import type { Route } from "./+types/home";
import { EmployeePage } from "../pages/employee-page/employee-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Svalbard Employee Management" },
    { name: "description", content: "Svalbard Employee Management" },
  ];
}

export default function Home() {
  return <EmployeePage />;
}
