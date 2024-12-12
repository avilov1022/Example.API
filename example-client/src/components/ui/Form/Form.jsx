import React from 'react';
import style from './Form.module.css';
import Input from '../Input/Input';
import ConfirmButton from '../ConfirmButton/ConfirmButton';


const Form = ({}) => {
    return (
        <form className={style.form}>
            <div className={style.inputs}>
                <Input 
                    type={"text"} 
                    name={"id"} 
                    label={"id:"} 
                    placeholder={"Введите id"}
                />

                <Input 
                    type={"text"} 
                    name={"tableNumber"} 
                    label={"Номер стола:"} 
                    placeholder={"Введите номер стола"}
                />

                <Input 
                    type={"text"} 
                    name={"amount"} 
                    label={"Сумма:"} 
                    placeholder={"Введите сумму"}
                />
            </div>

            <ConfirmButton>Создать</ConfirmButton>
        </form>
    );
};

export default Form;