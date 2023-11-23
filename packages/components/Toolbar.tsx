import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Toolbar = ({ children }: Props) => {
  return (
    <div>
      <h1>toolbar</h1>
      {children}
    </div>
  );
};
