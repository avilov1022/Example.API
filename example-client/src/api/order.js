import { useState } from 'react';

export function useGetAllOrders(){
    const [ orders, setUsers ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

    async function getOrders(){
        setIsLoading(true)
        try{
            var response = await fetch(
                'https://localhost:7075/Order',
                {
                    method: 'get'
                }
            )

            var responsejson = await response.json();
            setUsers(responsejson)
            setIsLoading(false)
        }catch(ex){
            console.log(ex)
        }
    }

    return {
        orders, 
        isLoading, 
        getOrders
    }
}