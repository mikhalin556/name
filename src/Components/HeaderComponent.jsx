import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../content/AppContext";
import { Cart } from "./Cart";
import styles from "./Header.module.css"

export function HeaderComponent() {
    const[Modal, setModal] = useContext(AppContext);

    return (
        <>
            
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.row}>
                        <Link to={'/'} className={styles.logo}>
                            <img src="public/images/home/logo.svg" alt="" />
                            SAFQ
                            <p>Большоой выборо товаров<br /> для дома и дачи</p>
                        </Link>
                        
                        <ul className={styles.menu}>
                            <li><Link to={'/'}>Главная</Link></li>
                            <li><Link to={'/catalog'}>Каталог</Link></li>
                            <li><button onClick={()=>setModal(true)}>Корзина</button></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}