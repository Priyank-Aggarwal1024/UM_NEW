import '../styles/Network.css'
import network from '../assets/network.svg'
import networkSmall from '../assets/network-small.svg'
function Network() {

    return (
        <>
            <section className="section network">
                <h2 className="network-heading text-center text-yellow">Get Access to Peers and Seniors Working in Top Companies</h2>
                <img src={network} alt="Network" className="network-image network-large" />
                <img src={networkSmall} alt="Network" className="network-image network-small" />
            </section>
        </>
    );
}

export default Network;