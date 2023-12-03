"use client";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import type { PropsWithChildren } from "react";
import { theme } from "@/styles/theme";
import { cssVariablesResolver } from "@/styles/variables";
import { ContextProvider } from "@/context/context-provider";
import { ErrorBoundary } from "react-error-boundary";

export const Providers = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <ErrorBoundary fallback={<p>Something went wrong.</p>}>
      <ContextProvider>
        <MantineProvider
          cssVariablesResolver={cssVariablesResolver}
          theme={theme}
        >
          {children}
          <Notifications />
        </MantineProvider>
      </ContextProvider>
    </ErrorBoundary>
  );
};
