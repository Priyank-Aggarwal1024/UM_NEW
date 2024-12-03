import '../styles/VirtualCollege.css'
import dashboardDetail from '../assets/dashboardDetail.svg'
import plus from '../assets/plus.svg'
import minus from '../assets/minus.svg'
import React from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function VirtualCollege() {
    return (
        <section className="section ">
            <h2 className="text-yellow">Your Virtual College👇</h2>
            <div className="virtual-college-main">
                <TransformWrapper
                    initialScale={1}
                    minScale={0.2}
                    maxScale={10}
                    limitToBounds={false} // Keep limiting bounds
                >
                    {({ zoomIn, zoomOut }) => (
                        <React.Fragment>
                            <div className="virtual-college-zoom-controls">
                                <div className="virtual-college-minus" onClick={() => zoomOut()}>
                                    <img src={minus} alt="Minus" />
                                </div>
                                <div className="virtual-college-plus" onClick={() => zoomIn()}>
                                    <img src={plus} alt="Plus" />
                                </div>
                            </div>
                            <TransformComponent>
                                <img src={dashboardDetail} alt="Dashboard Detail" />
                            </TransformComponent>
                        </React.Fragment>
                    )}
                </TransformWrapper>

            </div>
            <div className="virtual-college-bottom">Zoom in to see Details</div>
        </section>
    );
}

export default VirtualCollege;