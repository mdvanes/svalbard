# Svalbard

Example repo with pnpm workspaces, react-router, TypeScript, Chakra UI, and Tanstack Query.

Install dependencies from the root:

pnpm i

install globally:

pnpm add -Dw prettier

install to a project:

pnpm --filter svalbard add zod

or

pnpm --filter svalbard add -D vitest

run dev server:

pnpm --filter svalbard dev

Adding a library

Create the files under libs/my-lib/, e.g. package.json with a namespace in the name.

pnpm i

pnpm --filter svalbard add "@svalbard/ui-components@workspace:*"

