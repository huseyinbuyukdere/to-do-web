import { Logo } from 'components/logo'
import { AppContext } from 'core/context'
import { useContext } from 'react'
import ReactLoading from 'react-loading'
import styles from './card.module.scss'

export const Card = ({ children, title }) => {
    const { isLoading, error } = useContext(AppContext)

    return (
        <div
            className={`${styles.container} ${isLoading ? styles.overlay : ''}`}
        >
            {error && error !== '' && (
                <div className={styles.error}>{JSON.stringify(error)}</div>
            )}
            {isLoading && (
                <div className={styles.loading}>
                    <ReactLoading type="cylon" color="#4a77e5" />
                </div>
            )}

            <div className={styles.logo}>
                <Logo />
            </div>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </div>
    )
}
