import React from 'react'
import classNames from 'classnames';
import styles from './Button.module.css'

interface IProps{
    children: React.ReactNode;
    type?: 'submit' | 'button',
    onClick?: ()=> void,
    style?: string
}

export default function Button({children, type = 'submit', onClick, style}: IProps){
    const styleBtn = classNames(styles.base, {
[styles.primary]: style=== "primery"
    })
    return (
        <button type={type} onClick={onClick} className={styleBtn}>{children}</button>
    )
}