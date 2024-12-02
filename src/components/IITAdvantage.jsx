import '../styles/IITAdvantage.css'
import iit1 from '../assets/iit1.svg'
import iit2 from '../assets/iit2.svg'
import iit3 from '../assets/iit3.svg'
import iit4 from '../assets/iit4.svg'
import iit5 from '../assets/iit5.svg'
function IITAdvantage() {
    return (
        <section className="section iit-advantage">
            <div className="iit-advantage-top">
                <h2 className="text-yellow">Why IITians have unfair advantage?</h2>
                <div className="iit-advantage-subheading">Student from top universities like IITs, NITs, have access to:</div>
            </div>
            <div className="iit-advantage-cards">
                <div className="iit-advantage-card">
                    <img src={iit1} alt="iit1" className="iit-advantage-img" />
                    <p>Alumni Network</p>
                </div>
                <div className="iit-advantage-card">
                    <img src={iit2} alt="hackathons & competitions" className="iit-advantage-img" />
                    <p>hackathons & competitions</p>
                </div>
                <div className="iit-advantage-card">
                    <img src={iit3} alt="Smart peers" className="iit-advantage-img" />
                    <p>Smart peers</p>
                </div>
                <div className="iit-advantage-card">
                    <img src={iit4} alt="Various clubs" className="iit-advantage-img" />
                    <p>Various clubs</p>
                </div>
                <div className="iit-advantage-card">
                    <img src={iit5} alt="Good Career opportunities" className="iit-advantage-img" />
                    <p>Good Career opportunities</p>
                </div>
            </div>
        </section>
    );
}

export default IITAdvantage;