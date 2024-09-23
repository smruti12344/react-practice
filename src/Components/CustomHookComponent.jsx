import { useEffect, useState } from "react";

export function useUpperCase(name){

    const [data,setData] = useState('');
    const [error,setError] = useState('');

    useEffect(()=>{
       if(name == ''){
        setError("please enter user name for Cap");
       }else{
        setData(name.toUpperCase())
        setError('');
       }
    },[name])

    return{data,error}
};