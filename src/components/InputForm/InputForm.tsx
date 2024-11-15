import React from "react";
import styles from './InputForm.module.css'

interface Iprops {
  label: string;
  value: string;
  htmlFor: string;
  name: string;
  type?: 'text'| "password"
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputForm({ htmlFor,  label, name, value, onChange, type="text" }: Iprops) {
  return (
    <div className={styles.section}>
      <label htmlFor={htmlFor} className={styles.label}>{label}</label>
      <input type={type} id={htmlFor} name={name} value={value} onChange={onChange} className={styles.input}/>
    </div>
  );
}
