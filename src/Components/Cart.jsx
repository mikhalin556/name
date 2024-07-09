import styles from './Cart.module.css'

export function Cart() {
    return (
        <>
            <div className={`${styles.Cart} cartModal`} onClick={(event) => {
                if(event.target.classList[1] === 'cartModal') {
                    setCartModal(false)
                }
            }}>
                <div className={`${styles.cartModal}`} >
                    <h2>Корзина</h2> 
                    <div className={styles.cartModalList}>
                        <div className={styles.cartModalItem}>
                            <div className={styles.cartModalItemContent}>
                                <h3>Название товара</h3>
                                <p>Цена: <span>50%</span></p>
                            </div>
                            <button>X</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}