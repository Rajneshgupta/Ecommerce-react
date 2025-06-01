import React from 'react'
import * as yup from 'yup'
import {Formik, Field, Form} from "Formik"
import { LoginFunction } from './AxiosService/Api'

const LoginSchema = yup.object().shape({
  email:yup.string().email("Invaild Email").required(' Email is required'),
  password:yup.string().required('Password is required')
})

const ModalCopy = ({showModal}) => {
  const handleClick = () => {
    showModal(false)
  }
  const handleBody = (e) => {
    if (e.target.className === 'modal-content') {
      showModal(false)
    }
  }

  const handleLogin= async (values)=>{
    // const {email, password}=values;
   const response= await LoginFunction(values);
     console.log(response)
     if(response.data.statusCode===200){
      showModal(false)
     }
      
   }

  return (
    <div className="modal-content" onClick={handleBody}>
      <div className="Modal">
        <div className="heading">
          <h1>Modal </h1>

          <h1 onClick={handleClick} className="Crossbtn">
            ❌
          </h1>
        </div>
        <Formik initialValues={{
          email:'',
          password:''
        }}
          validationSchema={LoginSchema}
          onSubmit={(values, actions)=>{
            handleLogin(values, actions);
             actions.resetForm()
             
          }}
          enableReinitialise

        >
       {
        ({errors, touched})=>(

        <Form className="Form__feild">
          <label> Name </label>
          <Field type="email" name="email" />
          {errors.email && touched.email?(<div className='text-danger'>
            {errors.email}
          </div>):('')}
          <label> Password </label>
          <Field type="Password" name="password" />
           <button className="button" type='submit'> Login </button>
        </Form>
        )

        }
       


        </Formik>
      </div>
    </div>
  )
}

export default ModalCopy;
