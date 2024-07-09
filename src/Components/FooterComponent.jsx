import styles from './Footer.module.css'

export function FooterComponent() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={`${styles.container} container`}>
                    <div className={styles.logoF}>  
                            <img src="public/images/home/logo.svg" alt="" />
                            SAFQ
                    </div>      
                    <p>+7(987) 654-32-10 <br />
                    <span>hello@safq.ru</span></p>
                    <p className={styles.copyright}>2024. Все права защищены</p>
                </div>
            </footer>
        </>
    )
}