import React, { useEffect } from 'react';
import style from './UsersList.module.css';
import userRepository, { useGetAll, useGetById } from '../../api/user';
import ConfirmButton from '../ui/ConfirmButton/ConfirmButton';
import Input from '../ui/Input/Input';
import Form from '../ui/Form/Form';


export default function UsersList(){
    const {users, getUsers, isLoading} = useGetAll()
    const user = useGetById()
    
    useEffect(() =>{
        getUsers()
    }, [])

    return (
        <div className={style.users_list}>
            <h2 className={style.users_list__title}>Общая выручка: <br/> 200.000</h2>

            <div className={style.test}>
                {/* <Input 
                    type={"text"} 
                    name={"id"} 
                    label={"id:"}
                    placeholder={"Введите id"}/>
                    
                <Input 
                    type={"text"} 
                    name={"tableNumber"} 
                    label={"Номер стола:"}
                    placeholder={"Введите номер стола"}/>

                <Input 
                    type={"text"} 
                    name={"amount"} 
                    label={"Сумма:"}
                    placeholder={"Введите сумму"}/>

                <ConfirmButton>Создать</ConfirmButton> */}

                <Form/>
            </div>
            
            <ul className={style.users_list__list}>
                {users.length > 0 && users.map((user) => 
                    <li key={user.id} className={style.users_list__list__item}>
                        {user.name} {user.role}
                    </li>
                )}
            </ul>
        </div>
    );
};