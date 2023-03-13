import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Layout } from 'components/layout'
import { Card } from 'components/card'
import { Input } from 'components/input'
import { Button } from 'components/button'

import styles from './login.module.scss'

export default () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLoginButtonClick = () => {}

    return (
        <Layout>
            <Card>
                <h1 className={styles.title}>Welcome back</h1>
                <h2 className={styles.subTitle}>Log In to continue.</h2>
                <div className={styles.email}>
                    <Input
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div className={styles.password}>
                    <Input
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
