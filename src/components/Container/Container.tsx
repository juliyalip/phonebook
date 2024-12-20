import { ReactNode } from "react";
import styles from "./Container.module.css";

interface IProp {
  children: ReactNode;
}

export default function Container({ children }: IProp) {
;  return <div className={styles.baseStyle }>{children}</div>;
}
