import { useEffect, useState } from "react"
import { PageHeaderComponent } from "../Components/PageHeaderComponent"
import styles from "./Catalog.module.css"
import { LoadingComponent } from "../Components/LoadingComponent"

export function Catalog() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if(!loading) return
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(json => {
            setProducts(json.products)
            setLoading(false)
        })
    }, [loading])
    return (
        <>
            {/* Подключение компонента загрузки */}
            <LoadingComponent loading={loading}/>
            <div className={styles.products}>
                <PageHeaderComponent title="Каталог товаров" subtitle="Лучшие товары только у нас!"/>
                <div className={styles.products__list}>
                    {
                        products.map((product) => {
                            return (
                                <div key={product.id} className={styles.products__item}>
                                    <div className={styles.products__item__header}>
                                        <h2>{product.title}</h2>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className={styles.products__item__footer}>
                                        <p className={styles.products__item__price}>{product.price} $</p>
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