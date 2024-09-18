import React, { useState } from 'react'
import SuccessComponent from './SuccessComponent';
import ErrorComponent from './ErrorComponent';

export default function FunctionHookComponent() {
    const[msg , setMsg] = useState('');
    function handleSuccess(){
        setMsg(<SuccessComponent/>);
    }
    function handleCancel(){
        setMsg(<ErrorComponent/>);
    }
  return (
    <div>
      <button className='btn btn-success' onClick={handleSuccess}>Success</button>
      <button className='btn btn-danger' onClick={handleCancel}>Cancle</button>
      <h1>{msg}</h1>
    </div>
  )
}
