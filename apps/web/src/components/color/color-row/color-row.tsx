import cn from "./color-row.module.css";

type ColorRowProps = {
  color: string;
}

export const ColorRow = ({ color }: ColorRowProps) => {
  return (
    <div className={cn.row__wrapper} style={{ backgroundColor: color }}>
      <p>{color}</p>
    </div>
  );
};
