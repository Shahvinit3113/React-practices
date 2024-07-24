import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

export const getUsersApi = async () => await axios.get('/users')

export const getUserByIdApi = async (id) => axios.get(`/users/${id}`)

export const createUserApi = async (user) => axios.post('/users', user)

export const updateUserApi = async (user) => axios.post(`/user/${user.id}`, user)

export const deleteUserApi = async (id) => axios.delete(`/users/${id}`)