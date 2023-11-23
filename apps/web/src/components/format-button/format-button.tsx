import type { PropsWithChildren } from "react";
import cn from "./styles.module.css";
import type { ShadesOutput } from "@/context/shades-context";

type FormatButtonProps = {
  id: string;
  value: ShadesOutput;
  checked: boolean;
  onChange: (value: ShadesOutput) => void;
}

export const FormatButton = ({
  id,
  children,
  value,
  checked,
  onChange,
}: PropsWithChildren<FormatButtonProps>) => {
  return (
    <div className={cn.radio__wrapper}>
      <label htmlFor={id} className={cn.radio__label}>
        <input
          type="radio"
          name="color-format"
          className={cn.radio__input}
          id={id}
          value={value}
          checked={checked}
          onChange={(e) => onChange(e.target.value as ShadesOutput)}
        />
        {children}
      </label>
    </div>
  );
};
