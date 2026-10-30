import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { FC, PropsWithChildren } from "react";
import { system } from "../../theme";

export const StyleProvider: FC<PropsWithChildren> = ({ children }) => (
  <ChakraProvider value={system}>
    <ColorModeProvider>{children}</ColorModeProvider>
  </ChakraProvider>
);
