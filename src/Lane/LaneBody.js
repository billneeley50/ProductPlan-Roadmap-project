import React from 'react';
import './LaneBody.css'
import LaneBar from "./LaneBar";

const LaneBody = (props) => {

    let thelanebars;
    if ( props.lanebars ) {
        thelanebars = (
            <div>
                {props.lanebars.map((alanebar, index) => {
                    return (
                        <LaneBar key={alanebar.id} number={alanebar.number} position={alanebar.position} />
                    )
                })}
            </div>
        );
    }

    return (
        <div className="LaneBody">
            {thelanebars}
        </div>
    )

};


export default LaneBody;