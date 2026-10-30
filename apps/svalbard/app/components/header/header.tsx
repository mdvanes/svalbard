import { Box, Container, Heading } from "@chakra-ui/react";

export const Header = () => (
  <Box as="header" bg="brand.400" color="white" px={6} py={4}>
    <Container maxW="7xl">
      <Heading size="lg">Svalbard Employee Management</Heading>
    </Container>
  </Box>
);
