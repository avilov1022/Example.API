import React, { useEffect } from 'react';
import style from './OrdersList.module.css';
import OrderCellUnassigned from '../ui/OrderCellUnassigned/OrderCellUnassigned';
import OrderCellAssigned from '../ui/OrderCellAssigned/OrderCellAssigned';
import orderRepository, { useGetAllOrders } from '../../api/order';


export default function OrdersList(){
    
    const {orders, getOrders, isLoading} = useGetAllOrders()
    
    useEffect(() =>{
        getOrders()
    }, [])
    
    var ordersCount = 12 - orders.length;

    return (
        <div className={style.orders_list}>
            <div className={style.orders_list__cells}>
                {orders.length > 0 && orders.map((order) => 
                    <OrderCellAssigned
                        tableNumber={order.tableNumber}
                        amount={order.amount}
                        time={"4:20"}
                        key={order.id}
                    />
                )}
                

                {Array.from({length: ordersCount}, (_, index)=>(
                    <OrderCellUnassigned key={index}/>
                ))}
            </div>
        </div>
    );
};