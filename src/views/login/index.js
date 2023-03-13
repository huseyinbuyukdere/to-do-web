import { useState, useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'

import { Layout } from 'components/layout'
import { Card } from 'components/card'
import { Input } from 'components/input'
import { Button } from 'components/button'

import styles from './login.module.scss'
import { AppContext } from 'core/context'
import { STORAGE_JWT_KEY } from 'core/constants'

export default () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { LoginUser } = useContext(AppContext)

    if (localStorage.getItem(STORAGE_JWT_KEY)) {
        return <Navigate to="/todo" replace />
    }

    const onLoginButtonClick = () => {
        LoginUser(email, password)
    }

    return (
        <Layout>
            <Card title="Welcome back">
                <h2 className={styles.subTitle}>Log In to continue.</h2>
                <div className={styles.email}>
                    <Input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div className={styles.password}>
                    <Input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <div className={styles.linkContainer}>
                    <Link className={styles.link} to={'/register'}>
                        Don’t have an account? Sign up.
                    </Link>
                </div>
                <div className={styles.button}>
                    <Button onClick={onLoginButtonClick}>Log In</Button>
                </div>
            </Card>
        </Layout>
    )
}
