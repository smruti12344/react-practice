import { Formik,Field,ErrorMessage,useFormik,Form } from "formik";
import * as yup from 'yup';
export function FormikComponent(){
    return(
        <div className="container-fluid">
            <h1>Formik form component</h1>
            <div className="row">
                <Formik initialValues={
                    {
                        name:'',
                        email:'',
                        age:0,
                        city:''
                    } }
                    validationSchema={
                       yup.object(
                        {
                            name:yup.string().required("user name required").min(4,"name too short").max(10,"name too long"),
                            email:yup.string().required("email address required").email("invalid email"),
                            age:yup.number().required("Age required"),
                            city:yup.string()

                        }
                       )
                    }
                    onSubmit={
                        (values)=>{
                          alert(JSON.stringify(values));
                        }
                    }
                 >
                  <Form>
                       {
                       <div>
                         <dl>
                            <dt>userName</dt>
                            <dd>
                                <Field type="text" name="name"></Field>
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="name"></ErrorMessage>
                            </dd>
                            
                            <dt>Email</dt>
                            <dd>
                                <Field type="email" name="email"></Field>
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="email"></ErrorMessage>
                            </dd>
                            
                            <dt>age</dt>
                            <dd>
                                <Field type="number" name="age"></Field>
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="age"></ErrorMessage>
                            </dd>
                            
                            <dt>city</dt>
                            <dd>
                                <Field as="select" name="city">
                                    <option>hyd</option>
                                    <option>odi</option>
                                    <option>mub</option>
                                </Field>
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="city"></ErrorMessage>
                            </dd>
                        </dl>
                        <button>submit</button>
                       </div>
                       }                   
                  </Form>
                </Formik>
            </div>
        </div>
    )
}