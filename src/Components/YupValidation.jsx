import React from 'react'
import {Formik, useFormik} from 'formik'
import * as yup from 'yup';
export default function FormikValidation() {
  const formik = useFormik({
    initialValues:{
      userName:'',
      Password:'',
      city:''
    },
    validationSchema: yup.object({
       userName : yup.string().required("user name is required").matches(/^[a-zA-Z][a-zA-Z0-9!@#$%^&*()_+]*/),
       Password : yup.string().required("password required").min(8,'most be 8 character').matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{8,}$/),
       city: yup.string().required('please select one')
    })
    ,
    onSubmit: (values)=>{
      alert(JSON.stringify(values))
    },
    
  })
  return (
    <div className="container-fluid">
        <h1>Yup library validation</h1>
        <form onSubmit={formik.handleSubmit}>
            <h2>Formik Form</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text"{...formik.getFieldProps('userName')}  onChange={formik.handleChange} value={formik.values.userName}  />
                </dd>
                <dd className='text-bg-danger'>{formik.errors.userName}</dd>
                <dt>Password</dt>
                <dd><input type="password" {...formik.getFieldProps('Password')} onChange={formik.handleChange} value={formik.values.Password} />
                </dd>
                <dd className='text-bg-danger'>{formik.errors.Password}</dd>
                <dt>Select City</dt>
                <dd><select {...formik.getFieldProps('city')} onChange={formik.handleChange} value={formik.values.city}>
                    <option value="any">Choose..</option>
                    <option value="odisha">Odi</option>
                    <option value="hydrabad">Hyd</option>
                    </select></dd>
                    <dd className='text-bg-danger'>{formik.errors.city}</dd>
            </dl>
            <button>submit</button>
        </form>
    </div>
  )
}
