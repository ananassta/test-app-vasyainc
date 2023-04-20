import { FC, ReactNode } from "react";
import cx from "classnames";

import styles from "./Typography.module.css";

type VariantType = "h1" | "h2" | "h3" | "h4" | "a" | "p";

export type ColorVariants =
  | "default"
  | "secondary"
  | "elementPrimary"
  | "invert"
  | "error";

type Props = {
  Variant: VariantType;
  bold?: boolean;
  cursive?: boolean;
  size?: "S" | "M" | "L";
  caps?: boolean;
  color?: ColorVariants;
  href?: string | undefined;
  style?: object;
  mobile?: boolean;
};

export const Typography: FC<Props & { children?: ReactNode }> = ({
  Variant,
  bold = false,
  cursive = false,
  size = "M",
  caps = false,
  color = "default",
  href = undefined,
  mobile = false,
  style = {},
  children,
}) => {
  let variantStyle;
  if (Variant === "a" || Variant === "p") {
    variantStyle = cx(
      styles.block,
      styles[Variant],
      bold ? styles.bold : null,
      cursive && styles.cursive,
      caps && styles.caps,
      styles[`size${size}`],
      styles[`${color}Color`]
    );
  } else {
    variantStyle = cx(
      styles.block,
      styles[`${color}Color`],
      mobile ? styles[`${Variant}Mobile`] : styles[Variant]
    );
  }
  return Variant === "a" ? (
    <Variant href={href} className={variantStyle} style={style}>
      {children}
    </Variant>
  ) : (
    <Variant className={variantStyle} style={style}>
      {children}
    </Variant>
  );
};
