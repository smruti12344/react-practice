// import { Formik, Field, ErrorMessage, Form } from "formik";
// import React, { useState } from "react";
// import * as yup from 'yup';
// import CardComponent from "./CardComponent";
// import ApiClassComponent from "./ApiClassComponent";
// import Api from "./Api.module";

// // Capitalize context name
//  export var UserDetails = React.createContext(null);

// export function FormikComponent() {
//     const [userData, setUserData] = useState({
//         name: 'lipu',
//         email: '',
//         age: '',
//         city: ''
//     });

//     return (
//         <UserDetails.Provider value={userData}>
//             <div className="container-fluid">
//                 <h1>Formik form component</h1>
//                 <div className="row">
//                     <Formik
//                         initialValues={{
//                             name: '',
//                             email: '',
//                             age: '',
//                             city: ''
//                         }}
//                         validationSchema={yup.object({
//                             name: yup.string()
//                                 .required("User name required")
//                                 .min(4, "Name too short")
//                                 .max(10, "Name too long"),
//                             email: yup.string()
//                                 .required("Email address required")
//                                 .email("Invalid email"),
//                             age: yup.number()
//                                 .required("Age required")
//                                 .positive("Age must be a positive number")
//                                 .integer("Age must be a whole number"),
//                             city: yup.string()
//                                 .required("City is required")
//                         })}
//                         onSubmit={(values) => {
//                             setUserData(values);
//                             alert(JSON.stringify(values, null, 2));
//                         }}
//                     >
//                         {props => (
//                             <Form>
//                                 <div>
//                                     <dl>
//                                         <dt>User Name</dt>
//                                         <dd>
//                                             <Field type="text" name="name" />
//                                         </dd>
//                                         <dd className="text-danger">
//                                             <ErrorMessage name="name" />
//                                         </dd>

//                                         <dt>Email</dt>
//                                         <dd>
//                                             <Field type="email" name="email" />
//                                         </dd>
//                                         <dd className="text-danger">
//                                             <ErrorMessage name="email" />
//                                         </dd>

//                                         <dt>Age</dt>
//                                         <dd>
//                                             <Field type="number" name="age" />
//                                         </dd>
//                                         <dd className="text-danger">
//                                             <ErrorMessage name="age" />
//                                         </dd>

//                                         <dt>City</dt>
//                                         <dd>
//                                             <Field as="select" name="city">
//                                                 <option value="">Select City</option>
//                                                 <option value="hyd">Hyderabad</option>
//                                                 <option value="odi">Odisha</option>
//                                                 <option value="mub">Mumbai</option>
//                                             </Field>
//                                         </dd>
//                                         <dd className="text-danger">
//                                             <ErrorMessage name="city" />
//                                         </dd>
//                                     </dl>
//                                     <button type="submit" disabled={!props.isValid}>Submit</button>
//                                 </div>
//                             </Form>
//                         )}
//                     </Formik>
//                 </div>
              
//             </div>
//             <CardComponent/>
//             <ApiClassComponent/>
//             <Api/>
//          </UserDetails.Provider> 
//     );
// }

import { Formik, Field, ErrorMessage, Form } from "formik";
import React, { createContext, useState } from "react";
import * as yup from 'yup';
import CardComponent from "./CardComponent";
import ApiClassComponent from "./ApiClassComponent";
import Api from "./Api.module";

// Capitalize context name
// export var UserDetails = createContext(null);

export function FormikComponent() {
    const [userData, setUserData] = useState({
        name: 'lipu',
        email: '',
        age: '',
        city: ''
    });

    return (
        // <UserDetails.Provider value={userData}>
            <div className="container-fluid">
                <h1>Formik form component</h1>
                <div className="row">
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            age: '',
                            city: ''
                        }}
                        validationSchema={yup.object({
                            name: yup.string()
                                .required("User name required")
                                .min(4, "Name too short")
                                .max(10, "Name too long"),
                            email: yup.string()
                                .required("Email address required")
                                .email("Invalid email"),
                            age: yup.number()
                                .required("Age required")
                                .positive("Age must be a positive number")
                                .integer("Age must be a whole number"),
                            city: yup.string()
                                .required("City is required")
                        })}
                        onSubmit={(values) => {
                            setUserData(values);
                            alert(JSON.stringify(values, null, 2));
                            // Handle further API call or logic here
                        }}
                    >
                        {props => (
                            <Form>
                                <div>
                                    <dl>
                                        <dt>User Name</dt>
                                        <dd>
                                            <Field type="text" name="name" />
                                        </dd>
                                        <dd className="text-danger">
                                            <ErrorMessage name="name" />
                                        </dd>

                                        <dt>Email</dt>
                                        <dd>
                                            <Field type="email" name="email" />
                                        </dd>
                                        <dd className="text-danger">
                                            <ErrorMessage name="email" />
                                        </dd>

                                        <dt>Age</dt>
                                        <dd>
                                            <Field type="number" name="age" />
                                        </dd>
                                        <dd className="text-danger">
                                            <ErrorMessage name="age" />
                                        </dd>

                                        <dt>City</dt>
                                        <dd>
                                            <Field as="select" name="city">
                                                <option value="">Select City</option>
                                                <option value="hyd">Hyderabad</option>
                                                <option value="odi">Odisha</option>
                                                <option value="mub">Mumbai</option>
                                            </Field>
                                        </dd>
                                        <dd className="text-danger">
                                            <ErrorMessage name="city" />
                                        </dd>
                                    </dl>
                                    <button type="submit" disabled={!props.dirty || !props.isValid}>Submit</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>

            </div>
            /* <CardComponent />
            <ApiClassComponent />
           <Api/>
        </UserDetails.Provider> */
    );
}
