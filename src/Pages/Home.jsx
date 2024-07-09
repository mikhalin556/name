import { PageHeaderComponent } from "../Components/PageHeaderComponent"
import styles from "./Home.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export function Home() {
    return (
        <>
            <div className={styles.home}>
                <div className={styles.mainText}>
                    <h1>Порядок в доме –<br /> порядок в душе</h1>
                    <p>Товары для дома со скидкой до 50%</p>
                    <button onClick={()=>setModal(true)}>Каталог</button>
                </div>
                <div className={styles.swiper}>
                    <Swiper 
                        loop = {true}
                        className = {styles.slider}
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className={styles.banner}>
                            
                            <img src="public/images/home/1.png" alt="Картинка" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.banner}>
                            
                            <img src="public/images/home/2.png" alt="Картинка" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.banner}>
                    
                            <img src="public/images/home/3.png" alt="Картинка" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.banner}>
                    
                            <img src="public/images/home/4.png" alt="Картинка" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                
            </div>
        </>
    )
}