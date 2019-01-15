import React from 'react';
import './ProductRoadmapSidebar.css';
import './ProductRoadmapSidebarPopup.css';
import ProductRoadmapSidebarItem from "./ProductRoadmapSidebarItem";
import Popup from "reactjs-popup";


const ProductRoadmapSidebar = (props) => {

    let popupDisabled = false;
    if (props.popupmessage === "") {
        popupDisabled = true;
    }

    let popupStyle = {
        padding: '0px',
        border: 'none',
        width: '300px',
        display: 'flex',
        'flex-direction': 'column',
    };


    return (

        <div className="ProductRoadmapSidebar">

            <ul>

                <div>
                    <Popup
                        trigger={<div><ProductRoadmapSidebarItem name="Add lane" type="lane"/></div>}
                        position="left center"
                        on="hover"
                        closeOnDocumentClick={true}
                        mouseLeaveDelay={300}
                        mouseEnterDelay={0}
                        contentStyle={popupStyle}
                        arrow={true}
                        disabled={popupDisabled}
                    >
                        <div className="ProductRoadmapSidebarPopup">
                            <div style={{float: 'left'}}>
                                <h4>{props.popupheader}</h4><br/>
                                {props.popupmessage}<br/><br/>
                                {props.popupfooter}
                            </div>
                        </div>


                    </Popup>
                </div>


                <ProductRoadmapSidebarItem name="Add bar" type="bar"/>

            </ul>

        </div>

    )


};


export default ProductRoadmapSidebar;