import { ThemeToggle } from "@/components/theme-toggle";
import { GetShadesForm } from "@/components/get-shades-form";
import cn from "./styles.module.css";

export const Toolbar = () => {
  return (
    <div className={cn.toolbar}>
      <GetShadesForm />
      {/* <ThemeToggle /> */}
    </div>
  );
};
