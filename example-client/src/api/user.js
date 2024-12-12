import { useState } from 'react';

export function useGetAll(){
    const [ users, setUsers ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

    async function getUsers() {
        setIsLoading(true)

        try{
            var response = await fetch(
                'https://localhost:7075/User',
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
        users, 
        isLoading, 
        getUsers
    }
}

export function useGetById(){
    const [ user, setUser ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

    const getUser = async (id) =>{
        setIsLoading(true)
        var response = await fetch(
            `https://localhost:5001/User/${id}`,
            {
                method: 'get'
            }
        )

        try{
            var responsejson = await response.json();
            setUser(responsejson)
            setIsLoading(false)
        }catch(ex){
            console.log(ex)
        }
    }

    return {user, isLoading, getUser}
}