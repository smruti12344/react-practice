import React, { useEffect } from 'react'

export default function ErrorComponent() {
    useEffect(()=>{
        alert("component WillMount");

        alert("component willUpdate");

        return(()=>{
            alert("component WillUnMount");
        })
    })
  return (
    <div>
      <h1>Login Error</h1>
    </div>
  )
}


