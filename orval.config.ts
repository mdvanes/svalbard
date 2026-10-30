import { defineConfig } from "orval";

export default defineConfig({
  employeeApi: {
    input: {
      target: "./contracts/employee-api/openapi.yaml",
    },
    output: {
      target: "./apps/svalbard/app/api/generated/employee-api.ts",
      schemas: "./apps/svalbard/app/api/generated/models",
      client: "react-query",
      httpClient: "fetch",
      clean: true,
      baseUrl: "/api/fake",

      override: {
        mutator: {
          path: "./apps/svalbard/app/api/fetcher.ts",
          name: "customFetch",
        },
      },
    },
  },
});
