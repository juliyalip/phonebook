import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./Container.module.css";

interface IProp {
  children: ReactNode;
  size: "medium" | "large";
}

export default function Container({ children, size }: IProp) {
  const style = classNames(styles.baseStyle, {
    [styles.medium]: size === "medium",
    [styles.large]: size === "large",
  });
  return <div className={style}>{children}</div>;
}
