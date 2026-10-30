import { Table, VStack } from "@chakra-ui/react";
import { Button } from "@svalbard/ui-components";
import { useGetEmployees } from "../../api/generated/employee-api";
import { formatDate } from "../../utils/formatDate";

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
    <VStack>
      <Table.Root>
        <Table.Caption />
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Start Date</Table.ColumnHeader>
            <Table.ColumnHeader>End Date</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {(response?.data ?? []).map((employee) => (
            <Table.Row key={employee.id}>
              <Table.Cell>{employee.lastName}</Table.Cell>
              <Table.Cell>{employee.firstName}</Table.Cell>
              <Table.Cell>
                {formatDate(employee.employmentStartDate)}
              </Table.Cell>
              <Table.Cell>{formatDate(employee.contractEndDate)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refresh employees"}
      </Button>
    </VStack>
  );
}
