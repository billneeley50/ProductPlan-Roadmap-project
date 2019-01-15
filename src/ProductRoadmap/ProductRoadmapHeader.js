import React from 'react';
import './ProductRoadmapHeader.css';
import './RoadmapHeaderButton.css'


const productroadmapheader = (props) => {

    const leftdiv = {
        float: 'left',
    };
    const rightdiv = {
        float: 'right',
        lineHeight: '26px',
        margin: '28px'
    };


    return (

        <div className="ProductRoadmapHeader">


            <div style={leftdiv}>
                Product roadmap
            </div>
            <div style={rightdiv}>
                <button className="RoadmapHeaderButton">Roadmap</button>
                <button className="RoadmapHeaderButton">Planning board</button>
                <button className="RoadmapHeaderButton">Parking lot</button>
            </div>


        </div>
    )

};


export default productroadmapheader;