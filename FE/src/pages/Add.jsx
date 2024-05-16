import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 

function Add() {
  return (
   <>
   <Formik
       initialValues={{ name: '', price: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .required('Required'),
         price: Yup.string()
           .required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {

        async function getPostProduct() {
          const res = await fetch("http://localhost:3000/myapp/",{
            method:"post",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(values)
          })
          const data = await res.json()
        }
        getPostProduct()

         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="name"> Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">price</label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
 
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
   </>
  )
}

export default Add