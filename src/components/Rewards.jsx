import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import '../styles/Rewards.css'
import hat from '../assets/hat.svg'
import amazon from '../assets/amazon.svg'
import cup from '../assets/cup.svg'
import { useEffect, useRef, useState } from 'react';

function Rewards() {
    const [current, setCurrent] = useState(1);
    const swiper = useRef(null);
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
    })
    useEffect(() => {
        swiper.current.swiper.slideTo(current);
    }, [current])
    return (
        <div className="section reward">
            <h2 className="reward-heading text-yellow ">Get rewards and goodies</h2>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
                slidesPerView={1}
                className="mySwiper"
                spaceBetween={500}
                ref={swiper}
                centeredSlides={true}
                cardsEffect={{
                    perSlideOffset: width > 600 ? 30 : 15,
                    perSlideRotate: width > 600 ? 10 : 6
                }}
            >


                <SwiperSlide className="reward-slide">
                    <img src={cup} alt="cup" className="reward-slide-1-img" />
                    <div className="reward-slide-para">Mug</div>

                </SwiperSlide>

                <SwiperSlide className="reward-slide">
                    <img src={amazon} alt="Amazon" className="reward-slide-2-img" />
                    <div className="reward-slide-para">Amazon Gift Voucher</div>
                </SwiperSlide>

                <SwiperSlide className="reward-slide">
                    <img src={hat} alt="hat" className="reward-slide-3-img" />
                    <div className="reward-slide-para">Custom Cap</div>

                </SwiperSlide>
            </Swiper>
            <div className="reward-bottom">
                <div className={`reward-bottom-disc ${current == 0 && "reward-bottom-disc-active"}`}
                    onClick={() => setCurrent(0)}
                ></div>
                <div className={`reward-bottom-disc ${current == 1 && "reward-bottom-disc-active"}`}
                    onClick={() => setCurrent(1)}
                ></div>
                <div className={`reward-bottom-disc ${current == 2 && "reward-bottom-disc-active"}`}
                    onClick={() => setCurrent(2)}
                ></div>
            </div>
        </div >
    );
}

export default Rewards;