import { FC, useState } from "react";

import { Modal } from "../../Modal/Modal";
import { Typography } from "../../Typography/Typography";

import FirstImage from "./Img/first.png";
import SecondImage from "./Img/second.png";
import ThirdImage from "./Img/third.png";
import FourthImage from "./Img/fourth.png";
import styles from "./SecondInfoBlock.module.css";

export const SecondInfoBlock: FC = () => {
  const images = [FirstImage, SecondImage, ThirdImage, FourthImage];
  const [isModal, setModal] = useState(false);
  const [currImage, setCurrImage] = useState("");

  return (
    <div className={styles.block}>
      <div className={styles.infoBlock}>
        <Typography Variant="h3">Заголовок статичного блока</Typography>
        <Typography Variant="p">
          Анализ зарубежного опыта транслирует целевой сегмент рынка, повышая
          конкуренцию. Создание приверженного покупателя, вопреки мнению
          П.Друкера, отражает фирменный стиль, полагаясь на инсайдерскую
          информацию. Цена клика оправдывает выставочный стенд. Еще Траут
          показал, что точечное воздействие стремительно специфицирует рейтинг.
        </Typography>
        <Typography Variant="p">
          Привлечение аудитории осмысленно переворачивает сегмент рынка, осознав
          маркетинг как часть производства. Потребление без оглядки на
          авторитеты транслирует имидж предприятия. Практика однозначно
          показывает, что фокусировка последовательно продуцирует популярный
          SWOT-анализ. Социальный статус спонтанно притягивает диктат
          потребителя. Сервисная стратегия индуцирует рекламоноситель.
          VIP-мероприятие, суммируя приведенные примеры, настроено позитивно.
        </Typography>
      </div>
      <div className={styles.galleryBlock}>
        {images.map((image, index) => (
          <img
            src={image}
            alt={`${index} image`}
            className={styles.image}
            key={index}
            onClick={() => {
              setModal(true);
              setCurrImage(image);
            }}
          />
        ))}
        <Modal
          isVisible={isModal}
          content={<img src={currImage} />}
          onClose={() => setModal(false)}
        />
      </div>
    </div>
  );
};
