import React from 'react';
import style from './ConfirmButton.module.css';


const ConfirmButton = ({ children }) => {
    return (
        <button className={style.confirm_button}>
           {children}
        </button>
    );
};

export default ConfirmButton;