import axios from 'axios'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Login() {

    const [formData, setFormData] = useState({
        email : '',
        password : ''
    })

    const navigate = useNavigate()

    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        let isValid = true
        let ValidErrors = {}

        if (formData.email === '' || formData.email === null){
            isValid = false
            ValidErrors.email = "Email Required"
        }else if(!/\S+@\S+\.\S+/.test(formData.email)){
            isValid = false
            ValidErrors.email = "Email is not valid"
        }

        if (formData.password === '' || formData.password === null){
            isValid = false
            ValidErrors.password = "Password Required"
        } else if(formData.password.length < 6 ){
            isValid = false
            ValidErrors.password = "Password length atleast 6 char"
        }

        axios.get('http://localhost:3500/users')
        .then(res => {
            res.data.map((user) => {
                if(user.email === formData.email){
                    if(user.password === formData.password){
                        navigate('/crud')
                    } else{
                        isValid = false
                        ValidErrors.password = 'Wrong Password'
                    } 
                } else if (formData.email !== ""){
                    isValid = false;
                    ValidErrors.email = "wrong password"
                }
            })
            setErrors(ValidErrors)
        setValid(isValid)
        }).catch(err => console.log(err))
    }


  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Log in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
           
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e)=>setFormData({...formData,email: e.target.value})}
                    />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    // autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e)=>setFormData({...formData,password: e.target.value})}
                    />
                </div>
              </div>
              <span className='text-red-500'>{errors.email} {errors.password}</span>

  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <strong className='text-blue-500'>
             <Link to='/Registration'>SignIn</Link>
             </strong>
            </p>
          </div>
        </div>
      </>
  )
}

export default Login