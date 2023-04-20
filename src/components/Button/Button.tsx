import cx from "classnames";
import { FC } from "react";

import { Typography, ColorVariants } from "../Typography/Typography";

import { ReactComponent as LoaderImage } from "./loader.svg";
import styles from "./Button.module.css";

type Props = {
  text?: string;
  color?: "primary" | "invert" | undefined;
  size?: "M" | "L";
  width?: "Normal" | "Full";
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
};

export const Button: FC<Props> = ({
  text = "Button",
  color = "primary",
  size = "M",
  width = "Normal",
  type = "button",
  disabled = false,
  onClick,
  isLoading = false,
}) => {
  const textColor: ColorVariants =
    color === "primary" ? "invert" : "elementPrimary";
  return (
    <button
      className={cx(
        styles.block,
        styles[color],
        styles[`size${size}`],
        styles[`width${width}`],
        disabled ? styles["disabled"] : null
      )}
      type={type}
      disabled={isLoading ? true : disabled}
      onClick={onClick}
    >
      {isLoading ? (
        <LoaderImage />
      ) : (
        <Typography
          Variant="p"
          size="L"
          bold
          color={textColor}
          style={{ textAlign: "center" }}
        >
          {text}
        </Typography>
      )}
    </button>
  );
};
