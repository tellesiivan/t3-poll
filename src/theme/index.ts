// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { Button } from "./component-configs/button";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    // brand: {
    //   100: "#f7fafc",
    //   // ...
    //   900: "#1a202c",
    // },
    components: {
      Button,
    },
  },
});
