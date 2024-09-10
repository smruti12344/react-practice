import React, { useState } from 'react'

export default function FormValidation() {
    const[userDetails, setUserDetails] = useState({userid:'',password:'',city:''});
    const[userMsg,setUserMsg] = useState('');
    const[userValid,setUserValid] = useState(true);
    const [pswMsg,setPswMsg] = useState('');
    const[pswValid,setPswValid] = useState(true);
    const[capStatus,setCapStatus] = useState(false);
    const [cityMsg,setCityMsg] = useState('');
    // user-data validation
    function verifyUser(e){
      if(e.target.value==''){
        setUserMsg("user is not valid");
        setUserValid(false);
      }else{
        setUserMsg('');
      }
     
    }
    function verifyPassword(e){
      for(let i in e){
        console.log(i);
      }
      if(e.target.value.match(/(?=.*[A-Z]\w{4,10})/)){
        setPswMsg("Strong Password");
        setPswValid(true);
        
   }else{
       if(e.target.value.length<4){
        setPswMsg("poor password");
        setPswValid(false);
       }else{
        setPswMsg("week password");
        setPswValid(true);
       }

    }
  }
  function verifyCaps(e){
    // alert(e.getModifierState('CapsLock'));
    setCapStatus(e.getModifierState('capsLock'));
  }
  function verifyCity(e){
    alert(e.target.value);
    if(e.target.value=='notify'){
      setCityMsg('please select one');
    }else{
      setCityMsg('');
    }
  }

    function userIdHandle(e){
       setUserDetails({
        ...userDetails,
        userid:e.target.value

       })
    }
    function userPasswordHandle(e){
        setUserDetails({
            ...userDetails,
            password:e.target.value
        })
    }
    function userCityHandle(e){
      setUserDetails({
        ...userDetails,
        city:e.target.value
      })

    }
    function RegisterClick(){
      alert(JSON.stringify(userDetails))
    }
  return (
    <div className="container-fluid">
    <h2>Register User</h2>
    <dl>
       <dt>User Id</dt>
       <dd><input type="text" onBlur={userIdHandle} onChange={verifyUser}></input></dd>
       <dd className={(userValid)?'text-success':'text-danger'}>{userMsg}</dd>
       <dt>PassWord</dt>
       <dd><input type="password" onBlur={userPasswordHandle} onChange={verifyPassword} onKeyUp={verifyCaps} ></input></dd>
        <dd className={(pswValid)?'text-success':'text-danger'} >{pswMsg}</dd>
        <dd className={(capStatus==true)?'d-block':'d-none'}>Caps on</dd>
       <dt>Your City</dt>
       <dd><select onBlur={userCityHandle} onChange={verifyCity} >
        <option value="notify">Select Your City</option>
        <option value="Delhi">Delhi</option>
        <option value="Odisha">Odisha</option>
        </select></dd> 
        <dd className={(cityMsg)?'text-danger':'text-white'}>{cityMsg}</dd>
    </dl>
    <button onClick={RegisterClick} >Register</button>
</div>
  )
}
