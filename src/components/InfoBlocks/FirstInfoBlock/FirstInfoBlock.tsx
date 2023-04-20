import { FC } from "react";

import { Link } from "../../Link/Link";
import { Typography } from "../../Typography/Typography";

import styles from "./FirstInfoBlock.module.css";

export const FirstInfoBlock: FC = () => {
  return (
    <div id="info_block" className={styles.block}>
      <Typography Variant="h1">Тестовое задание</Typography>
      <div className={styles.mainInfoBlock}>
        <Typography Variant="p" size="L">
          Это простое задание, в котором нужно сверстать несколько тестовых
          блоков и галерею. Ожидаем что все получится аккуратно, особое внимание
          уделим организации кода чтобы потом можно было максимально легко
          переиспользовать и расширять эти простые компоненты.
        </Typography>
        <Typography Variant="p" color="secondary">
          Этот блок с описанием тоже нужно сверстать. Специально использовали
          разные стили и текстовые блоки, даже если они порой неуместны ;)
        </Typography>
      </div>
      <div className={styles.linkBlock}>
        <Typography Variant="p" size="L" caps>
          текстовые блоки и изображения для галереи
        </Typography>
        <Link href="https://test.vasya.ru/api/pages/index/" />
      </div>
    </div>
  );
};
