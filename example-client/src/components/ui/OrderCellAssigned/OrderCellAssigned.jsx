import React from 'react';
import './OrderCellAssigned.css';



export default function OrderCellAssigned( { tableNumber, amount, time } ){

    return (
        <div className='order-cell-assigned'>
            <div className="order-cell-assigned__table-number">{tableNumber}</div>
            <div className="order-cell-assigned__order-info">
                <span>{amount} руб.</span>
                <span>{time}</span>
            </div>
        </div>
    );
};