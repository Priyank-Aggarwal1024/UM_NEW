import '../styles/VirtualCollege.css'
import dashboardDetail from '../assets/dashboardDetail.svg'
import plus from '../assets/plus.svg'
import minus from '../assets/minus.svg'
import React, { useState } from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function VirtualCollege() {

    const [scale, setScale] = useState(1);
    return (
        <section className="section ">
            <h2 className="text-yellow">Our Virtual College👇</h2>
            <div className="virtual-college-main">
                <TransformWrapper
                    initialScale={1}
                    initialPositionX={200}
                    initialPositionY={100}
                >
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
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