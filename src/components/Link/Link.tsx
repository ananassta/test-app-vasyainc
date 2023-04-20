import { FC, useCallback } from "react";
import { useClipboard } from "use-clipboard-copy";

import { Typography } from "../Typography/Typography";

import { ReactComponent as CopyImage } from "./copy.svg";
import styles from "./Link.module.css";

type Props = {
  href: string;
};

export const Link: FC<Props> = ({ href = "" }) => {
  const clipboard = useClipboard({
    onSuccess() {
      alert("Ссылка скопирована в буфер обмена.");
    },
    onError() {
      console.log("Ошибка копирования.");
    },
  });

  const handleClick = useCallback(() => {
    clipboard.copy(href);
  }, [clipboard.copy, href]);

  return (
    <div className={styles.block} onClick={handleClick}>
      <Typography
        Variant="a"
        bold
        // href={href}
        style={{ color: "var(--default-text-color)" }}
      >
        {href}
      </Typography>
      <div className={styles.image}>
        <CopyImage />
      </div>
    </div>
  );
};
