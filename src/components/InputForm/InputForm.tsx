import React from "react";
import styles from './InputForm.module.css'

interface Iprops {
  label: string;
  value: string;
  htmlFor: string;
  name: string;
  type?: 'text'| "password" |"email"
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e:React.ChangeEvent<HTMLInputElement>)=> void
}

export default function InputForm({ htmlFor,  label, name, value, onChange, type="text", onBlur }: Iprops) {
  return (
    <div className={styles.section}>
      <label htmlFor={htmlFor} className={styles.label}>{label}</label>
      <input type={type} id={htmlFor} name={name} value={value} onChange={onChange} onBlur={onBlur} className={styles.input} required/>
    </div>
  );
}
