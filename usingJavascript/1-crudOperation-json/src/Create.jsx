import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Create() {

  const[values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3500/users', values)
    .then(res => {
      console.log(res)
      navigate('/')
  })
  }

  return (
    <div  className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>  
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor='name'>Name :</label>
            <input 
              type='text' name='name' className='form-conrol' placeholder='Enter Name'
              onChange={(e) => setValues({...values, name: e.target.value})}
              />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email :</label>
            <input 
              type='email' name='email' className='form-conrol' placeholder='Enter Email'
              onChange={(e) => setValues({...values, email: e.target.value})}
              />
          </div>
          <div className='mb-2'>
            <label htmlFor='phone'>Phone :</label>
            <input 
              type='text' name='phone' className='form-conrol' placeholder='Enter Phone'
              onChange={(e) => setValues({...values, phone: e.target.value})}
              />
          </div>
          <button className='btn btn-success'>Submit</button>
          <Link to='/' className='btn btn-primary mx-3'>Back</Link> 
        </form>
      </div>
    </div>
  )
}

export default Create
