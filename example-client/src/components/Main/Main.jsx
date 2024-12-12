import React from 'react';
import style from './Main.module.css';
import UsersList from '../UsersList/UsersList';
import OrdersList from '../OrdersList/OrdersList';
import ConfirmButton from '../ui/ConfirmButton/ConfirmButton';


export default function Main(){
    return (
        <main className={style.main}>
            <OrdersList/>
            <UsersList/>
        </main>
    );
};