import React, { useState } from 'react'
import {Button, Container, Input} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setUserSlice } from '../slice/User'
import { addUserSlice, editUserSlice } from '../slice/Users'
import { nanoid } from '@reduxjs/toolkit'
import {CREATE_USER, UPDATE_USER_BY_ID} from '../redux/types/index'

function MyForm() {

    // const [user, setUser] = useState({
    // id: 0,
    // name: "",
    // email: "",
    // password: ""
    // })

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleChange =(prop) => (event) => {
        dispatch(setUserSlice({...user, [prop]:event.target.value}))
    }
    
    const handleSubmit = () => {
        user.id === 0 ? dispatch({type: CREATE_USER, user : {...user, id : nanoid(8)}}): dispatch({type: UPDATE_USER_BY_ID, user})
        dispatch(setUserSlice({
            id: 0,
            name: "",
            email: "",
            password: ""
        }))
    }

  return (
    <>
      <Container >
        <Input fullWidth disabled value={user.id}/>
        <Input placeholder='Enter name' value={user.name} fullWidth onChange={handleChange("name")} />
        <Input placeholder='Enter Email' value={user.email} fullWidth onChange={handleChange("email")} />
        <Input placeholder='Enter Password' value={user.password} fullWidth onChange={  handleChange("password")}/>
        <Button onClick={()=> handleSubmit()} fullWidth variant='contained'>Submit</Button>
      </Container>
    </>
  )
}

export default MyForm
