import { FC } from "react";

import { Typography } from "../../Typography/Typography";

import styles from "./FourthInfoBlock.module.css";

export const FourthInfoBlock: FC = () => {
  return (
    <div className={styles.block}>
      <Typography Variant="h3">Третий статичный блок</Typography>
      <Typography Variant="p">
        Инвариант трансформирует драматизм. Асинхронность эволюции видов, в
        первом приближении, готично иллюстрирует бессознательный драматизм, так
        Г.Корф формулирует собственную антитезу. Теория наивного и
        сентиментального искусства иллюстрирует комплекс априорной
        бисексуальности. Синтез искусств готично дает мимезис. Монтаж
        неравномерен.
      </Typography>
      <div className={styles.blockWithLine}>
        <div className={styles.verticalLine}></div>
        <div className={styles.blockWithLineText}>
          <Typography Variant="p">
            Очевидно, что горизонт ожидания монотонно иллюстрирует
            первоначальный драматизм. Эзотерическое потенциально. Миракль,
            согласно традиционным представлениям, имитирует незначительный
            драматизм, таким образом, сходные законы контрастирующего развития
            характерны и для процессов в психике. Типическое случайно.
          </Typography>
        </div>
      </div>
      <Typography Variant="p">
        Психологический параллелизм, по определению, иллюстрирует базовый тип
        личности. Художественная контаминация диссонирует экзистенциализм, таким
        образом, второй комплекс движущих сил получил разработку.
      </Typography>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th className={styles.tableHeaderSmall}>
                <Typography Variant="p" bold>
                  Название
                </Typography>
              </th>
              <th className={styles.tableHeaderBig}>
                <Typography Variant="p" bold>
                  Описание
                </Typography>
              </th>
              <th className={styles.tableHeaderSmall}>
                <Typography Variant="p" bold>
                  Значение
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Typography Variant="p" size="S">
                  Пингвин
                </Typography>
              </td>
              <td className={styles.tableMiddleCell}>
                <Typography Variant="p" size="S">
                  Семейство нелетающих морских птиц, единственное современное в
                  отряде пингвинообра́зных. Все представители этого семейства
                  хорошо плавают и ныряют.
                </Typography>
              </td>
              <td>
                <Typography Variant="p" size="S">
                  0,3 лошадиных силы
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography Variant="p" size="S">
                  Гагарка
                </Typography>
              </td>
              <td className={styles.tableMiddleCell}>
                <Typography Variant="p" size="S">
                  Вид морских птиц из семейства чистиковых. После истребления
                  нелетающей бескрылой гагарки в XIX веке этот вид остался
                  единственным в роде гагарок.
                </Typography>
              </td>
              <td>
                <Typography Variant="p" size="S">
                  0,1 лошадиная сила
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography Variant="p" size="S">
                  Тупик
                </Typography>
              </td>
              <td className={styles.tableMiddleCell}>
                <Typography Variant="p" size="S">
                  Вид морских птиц из семейства чистиковых отряда
                  ржанкообразных. Обитают на побережьях Атлантического и
                  Северного Ледовитого океанов. Гнездятся в норах на птичьих
                  базарах. Питаются рыбой, в основном песчанками.
                </Typography>
              </td>
              <td>
                <Typography Variant="p" size="S">
                  0,1 лошадиная сила
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
