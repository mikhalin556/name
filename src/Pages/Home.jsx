import { PageHeaderComponent } from "../Components/PageHeaderComponent"
import styles from "./Home.module.css"

export function Home() {
    return (
        <>
            <div className={styles.home}>
                <PageHeaderComponent title="Покупайте дешевле с нами!" subtitle="Продажа товаров. Скидка 30% на первую покупку!"/>
                <div className={styles.banner}>
                    <img src="/images/home/banner.jpg" alt="Картинка" />
                </div>
            </div>
        </>
    )
}