import { useCallback, useContext, useEffect, useState } from 'react'

import { Layout } from 'components/layout'
import { Card } from 'components/card'
import { Input } from 'components/input'
import { List } from 'components/list'

import styles from './todo.module.scss'
import { AppContext } from 'core/context'

export default () => {
    const [todo, setTodo] = useState('')

    const {
        todos,
        CreateNewTodo,
        GetAllTodo,
        UpdateTodoStatus,
        DeleteTodo
    } = useContext(AppContext)

    const onKeyDownTodo = (e) => {
        if (e.key === 'Enter') {
            CreateNewTodo(todo)
            setTodo('')
        }
    }

    const onCheckClick = useCallback((id, isChecked) => {
        UpdateTodoStatus(id, isChecked)
    }, [])

    const onDeleteClick = useCallback((id) => {
        DeleteTodo(id)
    }, [])

    useEffect(() => {
        GetAllTodo()
    }, [])

    return (
        <Layout>
            <Card title="Todo List">
                <div className={styles.todo}>
                    <Input
                        value={todo}
                        onKeyDown={onKeyDownTodo}
                        onChange={(e) => setTodo(e.target.value)}
                        placeholder="Add a new todo than Enter"
                    />
                </div>
                <List
                    items={todos}
                    onCheckClick={onCheckClick}
                    onDeleteClick={onDeleteClick}
                />
            </Card>
        </Layout>
    )
}
