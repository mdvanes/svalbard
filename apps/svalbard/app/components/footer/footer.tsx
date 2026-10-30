import { Text, Box, Container } from "@chakra-ui/react";

export const Footer = () => (
  <Box as="footer" bg="bg.emphasized" px={6} py={4} minH={200}>
    <Container maxW="7xl">
      <Text fontSize="sm" color="fg.muted">
        cc-by-4.0 Svalbard mdworld.nl
      </Text>
    </Container>
  </Box>
);
