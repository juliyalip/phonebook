import React from "react";
import styles from './Form.module.css'

interface Iprop {
  children: React.ReactNode;
  onSubmit: (e:React.FormEvent<HTMLFormElement>) => void
}

export default function Form({ children , onSubmit}: Iprop) {
  return <form className={styles.container} onSubmit={onSubmit}>{children}</form>;
}
