import { useEffect, useState } from "react";

export function useCapture(){
    const [capture , setCapture] = useState('');

    function getCode(){
        var a = Math.random()*10;
        var b = Math.random()*10;
        var c = Math.random()*10;
        var d = Math.random()*10;

        setCapture(`${Math.round(a)} ${Math.round(b)} ${Math.round(c)} ${Math.round(d)}`);
    }
    useEffect(()=>{
       getCode();
    },[])
    return {capture,getCode};
}