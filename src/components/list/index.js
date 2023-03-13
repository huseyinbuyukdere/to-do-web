import styles from './list.module.scss'

export const List = (props) => {
    return (
        <ul className={styles.list}>
            {props.items?.map((item) => (
                <li className={styles.listItem}>
                    <input
                        onChange={(e) =>
                            props.onCheckClick(item.id, e.target.checked)
                        }
                        className={styles.check}
                        type="checkbox"
                        checked={item.isChecked}
                    />
                    <span>{item.content}</span>
                    <button
                        onClick={() => props.onDeleteClick(item.id)}
                        className={styles.delete}
                    >
                        X
                    </button>
                </li>
            ))}
        </ul>
    )
}
