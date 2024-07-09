import { useEffect, useState } from "react"
import { PageHeaderComponent } from "../Components/PageHeaderComponent"
import styles from "./Catalog.module.css"
import { LoadingComponent } from "../Components/LoadingComponent"

export function Catalog() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if(!loading) return
        fetch('https://646bafb47d3c1cae4ce42749.mockapi.io/products')
        .then(response => response.json())
        .then(json => {
            setProducts(json)
            setLoading(false)
        })
    }, [loading])
    return (
        <>
            {/* Подключение компонента загрузки */}
            <LoadingComponent loading={loading}/>
            <div className={styles.products}>
                <PageHeaderComponent title="Каталог товаров" subtitle="Товары для дома на любой вкус!"/>
                <div className={styles.products__list}>
                    {
                        products.map((product) => {
                            return (
                                <div key={product.id} className={styles.products__item}>
                                    <div className={styles.products__item__header}>
                                        <h2>{product.name}</h2>
                                        <p>{product.description}</p>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className={styles.products__item__footer}>

                                        <button>Добавить в корзину</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}