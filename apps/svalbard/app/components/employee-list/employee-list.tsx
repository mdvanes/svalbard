import { useQuery } from "@tanstack/react-query";
import { Button } from "@svalbard/ui-components";
import { useGetEmployees } from "../../api/generated/employee-api";

export default function EmployeeList() {
  const {
    data: response,
    refetch,
    isLoading,
    isFetching,
    error,
  } = useGetEmployees();

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
      <Button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refresh employees"}
      </Button>
    </>
  );
}
