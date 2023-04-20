import { FC } from "react";

import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";

import styles from "./Footer.module.css";

export const Footer: FC = () => {
  return (
    <div className={styles.block}>
      <div className={styles.topLine}></div>
      <div className={styles.infoBlock}>
        <div className={styles.topInfoBlock}>
          <div className={styles.mainInfoBlock}>
            <Typography Variant="h4">Санкт-Петербург</Typography>
            <Typography Variant="p" size="L">
              Большой Проспект П. С., 5, 55
            </Typography>
          </div>
          <div className={styles.mainInfoBlock}>
            <Typography Variant="h4">mail@yandex.ru</Typography>
            <Typography Variant="p" size="L">
              +7 (981) 131-64-98
            </Typography>
          </div>
          <div className={styles.buttonBlock}>
            <div className={styles.button}>
              <Button
                text="Написать нам"
                color="invert"
                width="Full"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.bottomInfoBlock}>
          <div className={styles.bottomMenu}>
            <Typography Variant="a" href="#info_block" size="L" bold>
              Текстовые блоки
            </Typography>
            <Typography Variant="a" href="#gallery" size="L" bold>
              Галерея
            </Typography>
            <Typography Variant="a" href="#form_section" size="L" bold>
              Форма
            </Typography>
          </div>
          <div className={styles.yearInfo}>
            <Typography Variant="p" size="S">
              © 2009-2020 Vasya.inc
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.bottomLine}></div>
    </div>
  );
};
