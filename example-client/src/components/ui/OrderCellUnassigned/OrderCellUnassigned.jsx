import React from 'react';
import './OrderCellUnassigned.css';
import AddOrder from '../../../images/addOrder.svg'
import ConfirmButton from '../ConfirmButton/ConfirmButton';


export default function OrderCellUnassigned(){
    return (
        <div className='order-cell-unassigned'>
            <img className='order-cell__add' src={AddOrder} alt="plus" />
        </div>
    );
};