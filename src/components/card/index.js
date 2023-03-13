import { Logo } from 'components/logo'
import styles from './card.module.scss'

export const Card = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Logo />
            </div>
            {children}
        </div>
    )
}
