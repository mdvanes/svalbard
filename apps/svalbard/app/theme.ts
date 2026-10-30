import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

// NOTE: when this changes, run `pnpx @chakra-ui/cli typegen ./theme.ts` to update the theme

const customConfig = defineConfig({
  strictTokens: true,
  theme: {
    tokens: {
      colors: {
        brand: {
          400: { value: "#400080" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
