import { FC } from "react";

import { Typography } from "../../Typography/Typography";

import styles from "./ThirdInfoBlock.module.css";

export const ThirdInfoBlock: FC = () => {
  const firstList = [
    "Маркетинг довольно хорошо сбалансирован",
    "Поисковая реклама индуцирует повседневный потребительский рынок",
    "Рекламная заставка программирует нишевый проект",
    "Согласно предыдущему, стратегическое планирование синхронизирует сублимированный выставочный стенд. Рекламная заставка программирует нишевый проект. Рекламное сообщество тормозит ролевой пресс-клиппинг, невзирая на действия конкурентов.",
    "Искусство медиапланирования масштабирует инвестиционный продукт",
  ];
  return (
    <div className={styles.block}>
      <div className={styles.leftBlock}>
        <Typography Variant="h3">Второй статичный блок</Typography>
        <div>
          <Typography Variant="p">
            Продукт, на первый взгляд, индуцирует конструктивный традиционный
            канал. Наряду с этим, начальная стадия проведения исследования
            изоморфна времени. Макет по-прежнему устойчив к изменениям спроса.
          </Typography>
          <ul>
            {firstList.map((elem, index) => {
              return (
                <li className={styles.customUlLi} key={index}>
                  <Typography Variant="p">{elem}</Typography>
                </li>
              );
            })}
          </ul>
          <Typography Variant="p">
            Еще может быть нумерованный список:
          </Typography>
          <ol>
            {firstList.slice(0, 3).map((elem, index) => {
              return (
                <li className={styles.customOlLi} key={index}>
                  <Typography Variant="p">{elem}</Typography>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <Typography Variant="p" color="secondary">
        Рекламный макет, согласно Ф.Котлеру, развивает связанный процесс
        стратегического планирования. Воздействие на потребителя, пренебрегая
        деталями, настроено позитивно. Медийная связь тормозит BTL.
      </Typography>
    </div>
  );
};
