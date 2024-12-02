import '../styles/GoodCollege.css'
import gc1 from '../assets/gc1.svg'
import gc2 from '../assets/gc2.svg'
import gc3 from '../assets/gc3.svg'
import gc4 from '../assets/gc4.svg'
import gc5 from '../assets/gc5.svg'
import gc6 from '../assets/gc6.svg'
function GoodCollege() {
    return (
        <section className="section">
            <h2 className="text-center good-college-heading">Not from a good college?</h2>
            <div className="good-college-cards">
                <div className="good-college-card-outer">
                    <div className="good-college-card gc-odd">
                        <img className="good-college-card-img" src={gc1} alt="May You lack exposure" />
                        <p className="good-college-card-text">May You lack exposure</p>
                    </div>
                </div>
                <div className="good-college-card-outer">
                    <div className="good-college-card gc-even">
                        <img className="good-college-card-img" src={gc2} alt="Struggle with placements" />
                        <p className="good-college-card-text">Struggle with placements</p>
                    </div>
                </div>
                <div className="good-college-card-outer">
                    <div className="good-college-card gc-odd">
                        <img className="good-college-card-img" src={gc3} alt="Deal with unreasonable Professors. " />
                        <p className="good-college-card-text">Deal with unreasonable Professors. </p>
                    </div>
                </div>
                <div className="good-college-card-outer">
                    <div className="good-college-card gc-even">
                        <img className="good-college-card-img" src={gc4} alt="Hangout with ambitionless peers" />
                        <p className="good-college-card-text">Hangout with ambitionless peers</p>
                    </div>
                </div>
                <div className="good-college-card-outer">
                    <div className="good-college-card gc-odd">
                        <img className="good-college-card-img" src={gc5} alt="Got Stuck with uncool seniors" />
                        <p className="good-college-card-text">Got Stuck with uncool seniors</p>
                    </div>
                </div>
                <div className="good-college-card-outer">
                    <div className="good-college-card gc-even">
                        <img className="good-college-card-img" src={gc6} alt="Or Worse... all of the above" />
                        <p className="good-college-card-text">Or Worse... all of the above</p>
                    </div>
                </div>
            </div>
            <div className="good-college-bottom-outer">
                <div className="good-college-bottom">
                    <div className="gcb-itsokay">It’s okay.</div>
                    <p>You are not alone. Whatever excites you.... Whether it,s Building an app, creating a startup, or learning DSA....
                        <span className="text-green">we’ve got your back.</span></p>
                </div>
            </div>
        </section>
    );
}

export default GoodCollege;