import styles from './Footer.module.css'

export function FooterComponent() {
    return (
        <>
            <footer className={styles.footer}>
                <div className="container">
                    2024. Все права защищены
                </div>
            </footer>
        </>
    )
}