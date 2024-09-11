import React from 'react'
import {Formik, useFormik} from 'formik'
export default function FormikValidation() {
  const formik = useFormik({
    initialValues:{
      userName:'',
      Password:'',
      city:''
    },
    onSubmit: (values)=>{
      alert(JSON.stringify(values))
    }
  })
  return (
    <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
            <h2>Formik Form</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" name="userName" onChange={formik.handleChange} value={formik.values.userName}  />
                </dd>
                <dt>Password</dt>
                <dd><input type="password" name="Password" onChange={formik.handleChange} value={formik.values.Password} />
                </dd>
                <dt>Select City</dt>
                <dd><select name='city' onChange={formik.handleChange} value={formik.values.city}>
                    <option value="any">Choose..</option>
                    <option value="odisha">Odi</option>
                    <option value="hydrabad">Hyd</option>
                    </select></dd>
            </dl>
            <button>submit</button>
        </form>
    </div>
  )
}
