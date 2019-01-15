import React from 'react';
import {Droppable} from "react-drag-and-drop";
import './Lane.css';
import LandHeader from './LaneHeader';
import LaneBody from './LaneBody';

const lane = (props) => {

    let thelanebodies;

    if ( props.lanebodies ) {
        thelanebodies = (
            <div>
                {props.lanebodies.map((alanebody, index) => {
                    return (
                        <Droppable
                            key={alanebody.id}
                            types={['bar']}
                            onDrop={props.ondrop}>
                            <LaneBody lanebars={alanebody.lanebars} ondrop={props.ondrop}/>
                        </Droppable>

                    )
                })}
            </div>
        );
    }





    return (

        <div className="Lane">

            <LandHeader/>

            {thelanebodies}

        </div>

    )


};


export default lane;