import '../styles/IitNit.css'
import logo from '../assets/logo.svg'
function IitNit() {
    return (
        <section className="section iit-nit">
            <div className="iitnit-left">
                <p className="iitnitl-left">You</p>
                <p className="iitnitl-middle">+</p>
                <img src={logo} alt='UM Logo' className="iitnitl-right" />
            </div>
            <div className="iitnit-middle">&gt;&gt;</div>
            <div className="iitnit-right">IITian / NITian</div>
        </section>
    );
}

export default IitNit;