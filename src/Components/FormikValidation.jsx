import React from 'react'
import {Formik, useFormik} from 'formik'
import YupValidation from './YupValidation'
import { FormikComponent } from './FormikComponent'
export default function FormikValidation() {
  const formik = useFormik({
    initialValues:{
      userName:'',
      Password:'',
      city:''
    },
    onSubmit: (values)=>{
      alert(JSON.stringify(values))
    },
    validate:userDetailsVerify
  })
  function userDetailsVerify(userDetails){
    const errors={};
    if(userDetails.userName==''){
      errors.userName="username required";
    }
    if (!/^[a-zA-Z][a-zA-Z0-9!@#$%^&*()_+]*$/.test(userDetails.userName)) {
      errors.userName ="user name is invalid"
    }
    if (!userDetails.Password) {
      errors.Password = 'Password is required';
    } else if (userDetails.Password.length < 8) {
      errors.Password = 'Password must be at least 8 characters long';
    } else if (!/[A-Z]/.test(userDetails.Password)) {
      errors.Password = 'Password must contain at least one uppercase letter';
    } else if (!/[a-z]/.test(userDetails.Password)) {
      errors.Password = 'Password must contain at least one lowercase letter';
    } else if (!/[0-9]/.test(userDetails.Password)) {
      errors.Password = 'Password must contain at least one number';
    } else if (!/[!@#$%^&*()_+]/.test(userDetails.Password)) {
      errors.Password = 'Password must contain at least one special character';
    }
    if(userDetails.city==''){
      errors.city="please select one"
    }
    return errors;
  }
  return (
    <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
            <h2>Formik Form</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" name="userName" onChange={formik.handleChange} value={formik.values.userName}  />
                </dd>
                <dd className='text-bg-danger'>{formik.errors.userName}</dd>
                <dt>Password</dt>
                <dd><input type="password" name="Password" onChange={formik.handleChange} value={formik.values.Password} />
                </dd>
                <dd className='text-bg-danger'>{formik.errors.Password}</dd>
                <dt>Select City</dt>
                <dd><select name='city' onChange={formik.handleChange} value={formik.values.city}>
                    <option value="any">Choose..</option>
                    <option value="odisha">Odi</option>
                    <option value="hydrabad">Hyd</option>
                    </select></dd>
                    <dd className='text-bg-danger'>{formik.errors.city}</dd>
            </dl>
            <button>submit</button>
        </form>
        <YupValidation/>
        <FormikComponent/>
    </div>
  )
}
