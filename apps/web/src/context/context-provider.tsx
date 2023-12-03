"use client";

import { type PropsWithChildren } from "react";
import { ShadesProvider } from "./shades-context";

export const ContextProvider = ({ children }: PropsWithChildren<unknown>) => (
  <ShadesProvider>{children}</ShadesProvider>
);
