import React from 'react';
import './LaneBar.css';

const LaneBar = (props) => {

    const style = {
        marginLeft: props.position + 'px'
    };

    return (
        <div className="LaneBar" style={style}>
            Roadmap item {props.number}
        </div>
    )

};


export default LaneBar;