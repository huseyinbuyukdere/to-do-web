import { STORAGE_JWT_KEY } from 'core/constants'
import styles from './layout.module.scss'

export const Layout = ({ children }) => {
    const isLoggedIn = localStorage.getItem(STORAGE_JWT_KEY)
    const onLogoutClick = () => {
        localStorage.removeItem(STORAGE_JWT_KEY)
        window.location.href = '/'
    }
    return (
        <div className={styles.container}>
            {isLoggedIn && (
                <button onClick={onLogoutClick} className={styles.logout}>
                    Logout
                </button>
            )}
            {children}
        </div>
    )
}
