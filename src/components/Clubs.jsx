import '../styles/Clubs.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import right2 from '../assets/right2.svg'
import club1 from '../assets/club1.svg'
import club2 from '../assets/club2.svg'
import club3 from '../assets/club3.svg'
import club4 from '../assets/club4.svg'
import club5 from '../assets/club5.svg'
import cm1 from '../assets/cm1.svg'
import cm2 from '../assets/cm2.svg'
import cm3 from '../assets/cm3.svg'
import cm4 from '../assets/cm4.svg'
import cm5 from '../assets/cm5.svg'
import { useRef, useState } from 'react';
function Clubs() {
    const clubswrapper = [
        {
            img: club1,
            white: "Become a",
            green: "TECH EXPERT",
            name: "Tech"
        },
        {
            img: club2,
            white: "Become a",
            green: "Leetcode EXPERT",
            name: "DSA"
        },
        {
            img: club3,
            white: "Master your ",
            green: "SPEAKING SKILLS",
            name: "Speakup"
        },
        {
            img: club4,
            white: "Turn your ideas into",
            green: "DESIGNS",
            name: "Design"
        },
        {
            img: club5,
            white: "Start Your ",
            green: "OWN BUSINESS",
            name: "Startup"
        },
    ]
    const swiper = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <section className="section">
                <div className="clubs">
                    <h2 className="text-center clubs-heading">Join Our Clubs: Learn, Connect, and Grow</h2>
                    <div className="clubs-tabs">
                        {
                            clubswrapper.map((item, idx) => <p className={`clubs-tab ${currentIndex == idx && "clubs-tab-active"}`} onClick={() => swiper.current.swiper.slideTo(idx)} key={idx}>{item.name}</p>)
                        }

                    </div>
                    <div className="club-main-outer">

                        <Swiper
                            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                            slidesPerView={1}
                            spaceBetween={20}
                            className="club-swiper"
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            ref={swiper}
                        >
                            {
                                clubswrapper.map((item, idx) =>
                                    <SwiperSlide className="clubs-main"
                                        key={idx}
                                    >

                                        <div className="clubs-main-left">
                                            <img src={item.img} alt={item.green} />
                                        </div>
                                        <div className="clubs-main-right">
                                            <div className="club-slide-heading">
                                                <div className="club-text-gray">{item.white}</div>
                                                <div className="club-text-green">{item.green}</div>
                                            </div>
                                            <div className="club-slide-bottom">
                                                <div className="club-slide-bottom-div">
                                                    <img src={right2} alt="Tick" />
                                                    <p className="">Study more accurately</p>
                                                </div>
                                                <div className="club-slide-bottom-div">
                                                    <img src={right2} alt="Tick" />
                                                    <p className="">Collab with DSA Experts</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>)
                            }
                        </Swiper>
                    </div>

                </div>
                <div className="clubs-mobile">
                    <h2 className="text-left text-yellow">Join Clubs: Learn & Network</h2>
                    <div className="clubs-mobile-cards">
                        <div className="clubs-mobile-card">
                            <img src={cm1} alt="Tech Club" />
                            <div className="clubs-mobile-card-bottom">
                                <p className="clubs-mobile-card-head">Tech Club</p>
                                <p className="clubs-mobile-card-para">Build cool projects and work on latest technologies.</p>
                            </div>
                        </div>
                        <div className="clubs-mobile-card">
                            <img src={cm2} alt="DSA Club" />
                            <div className="clubs-mobile-card-bottom">
                                <p className="clubs-mobile-card-head">DSA Club</p>
                                <p className="clubs-mobile-card-para">Hone your DSA skills and solve Leetcode together with peers.</p>
                            </div>
                        </div>
                        <div className="clubs-mobile-card">
                            <img src={cm3} alt="Speakup Club" />
                            <div className="clubs-mobile-card-bottom">
                                <p className="clubs-mobile-card-head">Speakup Club</p>
                                <p className="clubs-mobile-card-para">Improve personality & communication skills.</p>
                            </div>
                        </div>
                        <div className="clubs-mobile-card">
                            <img src={cm4} alt="Design Club" />
                            <div className="clubs-mobile-card-bottom">
                                <p className="clubs-mobile-card-head">Design Club</p>
                                <p className="clubs-mobile-card-para">Work on building cool designs.</p>
                            </div>
                        </div>
                        <div className="clubs-mobile-card">
                            <img src={cm5} alt="Startup Club" />
                            <div className="clubs-mobile-card-bottom">
                                <p className="clubs-mobile-card-head">Startup Club</p>
                                <p className="clubs-mobile-card-para">Learn how startup works and network with other co-founders.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Clubs;