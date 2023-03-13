import React, { useCallback, useState } from 'react'
import {
    Login,
    Register,
    GetAllTodos,
    CreateTodo,
    UpdateTodo,
    DeleteTodo as DeleteTodoApi
} from './api'
import { STORAGE_JWT_KEY } from './constants'

const defaultValue = {}

export const AppContext = React.createContext(defaultValue)

export const AppContextHook = () => {
    const [isLoading, setIsLoading] = useState()
    const [error, setError] = useState()
    const [todos, setTodos] = useState([])

    const LoginUser = useCallback((email, password) => {
        setIsLoading(true)
        setError('')
        Login({ email, password })
            .then((result) => {
                localStorage.setItem(
                    STORAGE_JWT_KEY,
                    result.data.tokens.access.token
                )
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
                setError(error.response.data.message)
            })
    }, [])

    const RegisterUser = useCallback((name, email, password) => {
        setIsLoading(true)
        setError('')
        Register({ name, email, password })
            .then((result) => {
                localStorage.setItem(
                    STORAGE_JWT_KEY,
                    result.data.tokens.access.token
                )
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error.response.data.message)
            })
    }, [])

    const GetAllTodo = useCallback(() => {
        setIsLoading(true)
        setError('')
        GetAllTodos()
            .then((result) => {
                setIsLoading(false)
                setTodos(result.data)
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error.response.data.message)
            })
    }, [])

    const CreateNewTodo = useCallback((content) => {
        setIsLoading(true)
        setError('')
        CreateTodo({ content })
            .then((result) => {
                setIsLoading(false)
                GetAllTodo()
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error.response.data.message)
            })
    }, [])

    const UpdateTodoStatus = useCallback((id, isChecked) => {
        setIsLoading(true)
        setError('')
        UpdateTodo(id, { isChecked })
            .then((result) => {
                setIsLoading(false)
                GetAllTodo()
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error.response.data.message)
            })
    }, [])

    const DeleteTodo = useCallback((id) => {
        setIsLoading(true)
        setError('')
        DeleteTodoApi(id)
            .then((result) => {
                setIsLoading(false)
                GetAllTodo()
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error.response.data.message)
            })
    }, [])

    return {
        isLoading,
        error,
        todos,
        LoginUser,
        RegisterUser,
        GetAllTodo,
        CreateNewTodo,
        UpdateTodoStatus,
        DeleteTodo
    }
}
