import type { ButtonHTMLAttributes } from "react";
import { Button as ChakraButton, ButtonGroup } from "@chakra-ui/react"
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return <ChakraButton {...props}>{children}</ChakraButton>;
}
