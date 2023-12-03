"use client";

import {
  createContext,
  type PropsWithChildren,
  useState,
  useContext,
} from "react";
import type { GetShadesInput } from "@arsams/color-shades";
import {getColor} from "@/config/colors"

export type Mode = "all" | "both" | "lighten" | "darken";
export type ShadesOutput = "hex" | "rgb" | "hsl";

type ShadesContextStateType = Omit<GetShadesInput, "mode"> & {
  mode: Mode;
};

const initialState: ShadesContextStateType = {
  amount: 0.1,
  color: getColor() ?? "#547980",
  count: 10,
  mode: "both",
  output: "hex",
};

export type ShadesContextType = ShadesContextStateType & {
  setAmount: (amount: number) => void;
  setColor: (color: string) => void;
  setCount: (count: number) => void;
  setMode: (mode: Mode) => void;
  setOutput: (output: ShadesOutput) => void;
};

export const ShadesContext = createContext<ShadesContextType>({
  ...initialState,
  setAmount: () => {},
  setColor: () => {},
  setCount: () => {},
  setMode: () => {},
  setOutput: () => {},
});

type ShadesProviderProps = PropsWithChildren<unknown>;

export const ShadesProvider = ({ children }: ShadesProviderProps) => {
  const [state, setState] = useState<ShadesContextStateType>(initialState);

  return (
    <ShadesContext.Provider
      value={{
        ...state,
        setAmount: (amount: number) => setState({ ...state, amount }),
        setColor: (color: string) => setState({ ...state, color }),
        setCount: (count: number) => setState({ ...state, count }),
        setMode: (mode: Mode) => setState({ ...state, mode }),
        setOutput: (output: GetShadesInput["output"]) =>
          setState({ ...state, output }),
      }}
    >
      {children}
    </ShadesContext.Provider>
  );
};

export const useShadesContext = (): ShadesContextType =>
  useContext(ShadesContext);
