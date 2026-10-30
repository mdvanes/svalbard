import { useQuery } from "@tanstack/react-query";
import { Button } from "@svalbard/ui-components";
import { useGetEmployees } from "../../api/employee-api";

// import { getPokemon } from "../api/pokemon";

export default function EmployeeList() {
  const { data: response, isLoading, error } = useGetEmployees();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error || !response || !response.data.length) {
    return <p>Something went wrong.</p>;
  }

  return (
    <>
      <ul>
        {(response?.data ?? []).map((employee) => (
          <li key={employee.id}>
            {employee.firstName} {employee.lastName}
          </li>
        ))}
      </ul>
      <Button onClick={() => alert("NYI")}>Get employees</Button>
    </>
  );
}
