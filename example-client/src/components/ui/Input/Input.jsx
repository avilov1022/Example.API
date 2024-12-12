import React from 'react';
import style from './Input.module.css';


const Input = ({ type, name, label, placeholder }) => {
    return (
        <div className={style.input}>
            <label className={style.input_label} htmlFor={name}>{label}</label>
            <input 
                className={style.input_field} 
                type={type} 
                name={name} 
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;