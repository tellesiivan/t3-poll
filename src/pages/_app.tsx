import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { api } from "t3-poll/utils/api";

import "t3-poll/styles/globals.css";
import { theme } from "t3-poll/theme/theme";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: theme.className,
        }}
      >
        <NextUIProvider theme={theme}>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
