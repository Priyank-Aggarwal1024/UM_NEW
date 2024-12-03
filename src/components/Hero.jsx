import '../styles/Hero.css'
import VideoComp from './VideoComp';
import umdash from '../assets/umdash.svg'
import { useEffect, useState } from 'react';
const TEXTS = ['developer', 'designer', 'coder'];

function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000,
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <>
            <div className="hero">
                <div className="hero-top">
                    <div className="hero-top-line"></div>
                    <p className="">An <b>IIT Delhi</b> Alumni Initiative</p>
                    <div className="hero-top-line"></div>
                </div>
                <div className="hero-heading">
                    <h1 className="hero-heading-textchange"><span>Become a</span> <span >{TEXTS[index % TEXTS.length]}</span></h1>
                    <h3 className="hero-subheading">India’s first virtual college </h3>
                </div>
                <div className="hero-large-btn">
                    <button className="btn yellow-btn">Join Now at ₹499</button>
                </div>
                <div className="hero-video">
                    <VideoComp asset={umdash} />
                </div>
                <div className="hero-small-btn">
                    <button className="btn yellow-btn">Join Now at ₹499</button>
                </div>
            </div>
        </>
    );
}

export default Hero;