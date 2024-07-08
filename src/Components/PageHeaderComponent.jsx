import styles from "./PageHeader.module.css"

export function PageHeaderComponent({ title, subtitle }) {
    return (
        <>
            <div className={styles.header}>
                <h1>{ title }</h1>
                <p>{ subtitle }</p>
            </div>
        </>
    )
}