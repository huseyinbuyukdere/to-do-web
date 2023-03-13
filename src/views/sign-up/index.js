import { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import { Layout } from 'components/layout'
import { Card } from 'components/card'
import { Input } from 'components/input'
import { Button } from 'components/button'

import styles from './sign-up.module.scss'
import { AppContext } from 'core/context'
import { STORAGE_JWT_KEY } from 'core/constants'

export default () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { RegisterUser } = useContext(AppContext)

    const onSignUpButtonClick = () => {
        RegisterUser(name, email, password)
    }

    if (localStorage.getItem(STORAGE_JWT_KEY)) {
        return <Navigate to="/todo" replace />
    }

    return (
        <Layout>
            <Card title="Welcome">
                <h2 className={styles.subTitle}>
                    Sign up to start using Simpledo today.
                </h2>
                <div className={styles.name}>
                    <Input
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                    />
                </div>
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
                    <Link className={styles.link} to={'/login'}>
                        Do have an account? Sign in.
                    </Link>
                </div>
                <div className={styles.button}>
                    <Button onClick={onSignUpButtonClick}>Sign Up</Button>
                </div>
            </Card>
        </Layout>
    )
}
