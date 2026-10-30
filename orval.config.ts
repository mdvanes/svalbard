import { defineConfig } from 'orval';

export default defineConfig({
  employeeApi: {
    input: {
      target: './contracts/employee-api/openapi.yaml',
    },
    output: {
      target: './apps/svalbard/app/api/employee-api.ts',
      schemas: './apps/svalbard/app/api/models',
      client: 'react-query',
      httpClient: 'fetch',
      clean: true,
      baseUrl: '/api/fake'
    },
  },
});