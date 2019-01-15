import React from 'react';
import { Draggable } from 'react-drag-and-drop'
import './ProductRoadmapSidebarItem.css';

const ProductRoadmapSidebarItem = (props) => {
    return (
        <div className="ProductRoadmapSidebarItem">
            <Draggable type={props.type} data={props.type}>{props.name}</Draggable>
        </div>
    )
};

export default ProductRoadmapSidebarItem;