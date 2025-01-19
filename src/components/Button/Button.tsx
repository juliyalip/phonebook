import React from 'react'
import styles from './Button.module.css'

interface IProps {
    children: React.ReactNode;
    type?: 'submit' | 'button',
    onClick?: () => void,
  
}

export default function Button({ children, type = 'submit', onClick }: IProps) {
   
    return (
        <button type={type} onClick={onClick} className={styles.base}>{children}</button>
    )
}