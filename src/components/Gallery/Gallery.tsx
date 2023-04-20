import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Modal } from "../Modal/Modal";
import { Typography } from "../Typography/Typography";
import { Link } from "../Link/Link";

import styles from "./Gallery.module.css";

export const Gallery: FC = () => {
  const [images, setImages] = useState([]);
  const [imageOnScreen, setImageOnScreen] = useState(0);
  const [numberOnScreen, setNumberOnScreen] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const [isModal, setModal] = useState(false);
  const [currImage, setCurrImage] = useState("");

  const fetchUserData = () => {
    fetch("https://dog.ceo/api/breed/hound/images")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImages(data.message.slice(0, 10));
        return images.length;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const findImagesAmount = () => {
    const amountOfImages = isMobile
      ? Math.floor((window.innerWidth - 40) / 172)
      : Math.floor((window.innerWidth - 120) / 224);
    setImageOnScreen(
      amountOfImages > images.length ? images.length : amountOfImages
    );
    setNumberOnScreen(
      amountOfImages > images.length ? 0 : images.length - amountOfImages
    );
  };

  useEffect(() => {
    findImagesAmount();

    const handleWindowResize = () => {
      findImagesAmount();
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [images]);

  return (
    <div id="gallery" className={styles.block}>
      <div className={styles.topInfoBlock}>
        <Typography Variant="h2">Галерея с изображениями</Typography>
        <Typography Variant="p" size="L">
          Все просто. Выводится столько фотографий сколько влезит на экран. Те
          что не влезли рассчитываются и выводится их количество над последней
          фотографией. По клику на эту подпись так же открывается увеличенное
          версия того изображения, над которым выводится подпись.
        </Typography>
      </div>
      <div className={styles.gallery}>
        {images.length > 0 &&
          images.slice(0, imageOnScreen).map((image, index) => (
            <div key={index}>
              <img
                src={image}
                className={styles.image}
                onClick={() => {
                  setModal(true);
                  setCurrImage(image);
                }}
              />
              {numberOnScreen > 0 && index === imageOnScreen - 1 && (
                <div
                  className={styles.imageCover}
                  onClick={() => {
                    setModal(true);
                    setCurrImage(image);
                  }}
                >
                  <Typography Variant="p" size="L" bold color="invert">
                    ещё {numberOnScreen} фото
                  </Typography>
                </div>
              )}
            </div>
          ))}
      </div>
      <div className={styles.bottomInfoBlock}>
        <Typography Variant="p">
          Для того, чтобы на странице мы выводили изображение фактического
          нужного размера, а не просто уменьшали заведомо большее изображения,
          есть такая возможность:
        </Typography>
        <Link href="https://test.vasya.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center" />
        <Typography Variant="p" size="S">
          В параметре geometry можно задать размеры для изображения, а в crop
          выбрать тип кадрирования (center, top, bottom) или вообще его не
          указывать и тогда изображение пропорционально будет «вписано» в
          указнные размеры.
        </Typography>
      </div>
      <Modal
        isVisible={isModal}
        content={<img src={currImage} />}
        onClose={() => setModal(false)}
      />
    </div>
  );
};
