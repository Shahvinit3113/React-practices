import React, { useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

function Register() {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        Cpassword: '',
        role: ''
    })

    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)


    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        let ValidErrors = {}
        if (formData.fname === '' || formData.fname === null){
            isValid = false
            ValidErrors.fname = "First Name Required"
        }
        if (formData.lname === '' || formData.lname === null){
            isValid = false
            ValidErrors.lname = "Last Name Required"
        }
        
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

        if (formData.Cpassword !==  formData.password ){
            isValid = false
            ValidErrors.password = "Confirm Password not match"
        }

        
        setErrors(ValidErrors)
        setValid(isValid)

        if(Object.keys(ValidErrors).length === 0){
            axios.post('http://localhost:3500/users', formData)
            .then(res => {
                alert("Registered")
                navigate('/Login')
            })
            .catch(err => console.log(err))
        }
    }

    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST"  onSubmit={handleSubmit}>
            {
                    valid ? <></> : 
                    <span className='text-red-500'>
                        {errors.fname} {errors.lname} {errors.email} {errors.password} {errors.Cpassword} 
                        </span>
                  }
            <div className='flex'>
            <div className='flex-auto w-0.5'>
                <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="fname"
                    name="fname"
                    type="text"
                    // autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setFormData({...formData, fname: e.target.value})}
                  />
                  
                </div>
              </div>
              <div className='flex-auto w-0.5'>
                <label htmlFor="lname" className="block text-sm font-medium leading-6 text-gray-900">
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="lname"
                    name="lname"
                    type="text"
                    // autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setFormData({...formData, lname: e.target.value})}
                  />
                </div>
              </div>
            </div>
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
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="Cpassword" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="Cpassword"
                    name="Cpassword"
                    type="password"
                    // autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setFormData({...formData, Cpassword: e.target.value})}
                    />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Already member?{' '}
              <strong className='text-blue-500'>
             <Link to='/Login'>LogIn</Link>
             </strong>
            </p>
          </div>
        </div>
      </>
    )
  }
  


export default Register
