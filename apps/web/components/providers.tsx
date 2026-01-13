"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ConnectProvider from "@/components/connect/connect-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <ConnectProvider>{children}</ConnectProvider>
    </NextThemesProvider>
  );
}
