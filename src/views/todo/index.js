import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Layout } from 'components/layout'
import { Card } from 'components/card'
import { Input } from 'components/input'
import { Button } from 'components/button'

import styles from './todo.module.scss'

export default () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignUpButtonClick = () => {}

    return (
        <Layout>
            <Card>
                <h1 className={styles.title}>Welcome</h1>
                <h2 className={styles.subTitle}>
                    Sign up to start using Simpledo today.
                </h2>
                <div className={styles.fullName}>
                    <Input
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                    />
                </div>
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
