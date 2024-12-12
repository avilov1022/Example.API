import React from 'react';
import style from './Header.module.css';
import Lock from '../../images/lock.png'

export default function Header(){
    return (
        <header className={style.header}>
            <div className={style.header_container}>
                <div className={style.logo}>|logo|</div>
                <img className={style.lock} src={Lock} alt="lock" />
            </div>
        </header>
    );
};