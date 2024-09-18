import React, { useEffect } from 'react'

export default function SuccessComponent() {
    useEffect(()=>{
        alert("component WillMount");

        alert("component willUpdate");

        return(()=>{
            alert("component WillUnMount");
        })
    })
  return (
    <div>
      <h1>Login Success</h1>
    </div>
  )
}
