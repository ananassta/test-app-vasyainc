import { FC, ReactNode, useEffect } from "react";

import styles from "./Modal.module.css";

type Props = {
  isVisible: boolean;
  content: ReactNode;
  onClose: () => void;
};

export const Modal: FC<Props> = ({ isVisible = false, content, onClose }) => {
  const keydownHandler = ({ key }: { key: string }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  return !isVisible ? null : (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalDialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <span className={styles.modalClose} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalContent}>{content}</div>
        </div>
      </div>
    </div>
  );
};
