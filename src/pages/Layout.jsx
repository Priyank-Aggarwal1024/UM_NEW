import { useState } from 'react';
import Certificate from '../components/Certificate';
import Clubs from '../components/Clubs';
import Courses from '../components/Courses';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Hackathon from '../components/Hackathon';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Network from '../components/Network';
import Support from '../components/Support';
import Testimonials from '../components/Testimonials';
import content from '../content.json'
import '../styles/Layout.css'
import cross2 from '../assets/cross2.svg'
import GoodCollege from '../components/GoodCollege';
import IITAdvantage from '../components/IITAdvantage';
import IitNit from '../components/IitNit';
import Rewards from '../components/Rewards';
import VirtualCollege from '../components/VirtualCollege';
function Layout() {
    const [divbg, setDivbg] = useState(false);
    const [curriculum, setCurriculum] = useState("")

    return (
        <div className="layout">
            {divbg && <div className="layout-div-bg">
                {divbg &&
                    <div className="course-curriculum">
                        <div className="curriculum-close" onClick={() => setDivbg(false)} >
                            <img src={cross2} alt="Close" />
                        </div>
                        <div className="course-curriculum-heading">{content[curriculum]?.name}</div>
                        <div className="course-curriculum-main">
                            <h3 className="text-left">Curriculum</h3>
                            <div className="course-curriculum-list">
                                {
                                    content[curriculum]["topics1"].map((item, idx) => <div className="course-curriculum-item" key={idx}>{item?.section_name}</div>)
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
            }
            <div className="">
                <Navbar />
                <Hero />
                <VirtualCollege />
                <Courses setDivbg={setDivbg} setCurriculum={setCurriculum} />
                <GoodCollege />
                <IITAdvantage />
                <IitNit />
                <Clubs />
                <div className="network-large">
                    <Network />
                </div>
                <Hackathon />
                <Support />
                <div className="network-small">
                    <Network />
                </div>
                <Rewards />
                <Certificate />
                <Testimonials />
                <Faq />
                <Footer />
            </div>
        </div>
    );
}

export default Layout;