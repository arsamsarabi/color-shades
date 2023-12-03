"use client";

import { notifications } from "@mantine/notifications";
import { Space } from "@mantine/core";
import { isLight } from "@arsams/color-shades";
import cn from "./color-card.module.css";
import { useEffect, useState } from "react";

const { card__wrapper } = cn;

type ColorCardProps = {
  color: string;
};

export const ColorCard = ({ color }: ColorCardProps) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  if (isServer) return null;

  const isLightColor = isLight(color);
  const textColor = isLightColor
    ? "var(--mantine-color-black)"
    : "var(--mantine-color-white)";

  const handleClick = () => {
    navigator.clipboard.writeText(color);

    notifications.show({
      title: "🌈",
      message: "Color value copied to clipboard.",
      color,
      withBorder: true,
    });
  };

  return (
    <div
      className={card__wrapper}
      style={{ backgroundColor: color }}
      onClick={handleClick}
      role="button"
      aria-label="Copy color value to clipboard"
    >
      <p style={{ color: textColor }}>{color}</p>
      <Space w="xs" />
    </div>
  );
};
