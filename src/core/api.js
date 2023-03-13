import axios from 'axios'
import { STORAGE_JWT_KEY } from './constants'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem(STORAGE_JWT_KEY)
    config.headers.Authorization = 'bearer ' + token

    return config
})

export const Login = (data) => {
    return axios.post('/auth/login', data)
}

export const Register = (data) => {
    return axios.post('/auth/register', data)
}

export const GetAllTodos = () => {
    return axios.get('/todo')
}

export const CreateTodo = (data) => {
    return axios.post('/todo', data)
}

export const UpdateTodo = (id, data) => {
    return axios.patch('/todo/' + id, data)
}

export const DeleteTodo = (id) => {
    return axios.delete('/todo/' + id)
}
