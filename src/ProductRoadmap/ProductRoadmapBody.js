import React from 'react';
import './ProductRoadmapBody.css';
import ProductRoadmapPanel from "./ProductRoadmapPanel";
import ProductRoadmapSidebar from "./ProductRoadmapSidebar";
import {Droppable} from "react-drag-and-drop";

const ProductRoadmapBody = (props) => {

    return (

        <div className="ProductRoadmapBody">

            <Droppable
                types={['lane']}
                onDrop={props.ondroplane}>
                <ProductRoadmapPanel
                    roadmaplanes={props.roadmaplanes}
                    ondrop={props.ondropbar}
                    onmouseenter={props.onmouseenter}
                    onmouseleave={props.onmouseleave}
                />
            </Droppable>

            <ProductRoadmapSidebar
                popupheader={props.popupheader}
                popupmessage={props.popupmessage}
                popupfooter={props.popupfooter}
            />

        </div>

    )


}


export default ProductRoadmapBody;