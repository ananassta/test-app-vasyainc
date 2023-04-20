import { FC } from "react";

import { Typography } from "../Typography/Typography";

import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <div className={styles.block}>
      <Typography Variant="h3" mobile>
        Vasya.inc
      </Typography>
      <div className={styles.mainMenu}>
        <Typography Variant="a" href="#info_block" bold>
          Текстовые блоки
        </Typography>
        <Typography Variant="a" href="#gallery" bold>
          Галерея
        </Typography>
      </div>
      <Typography Variant="a" href="#form_section" bold>
        👋 Форма с приветами
      </Typography>
    </div>
  );
};
