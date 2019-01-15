import React from 'react';
import './ProductRoadmap.css'
import './ProductHeader.css'



const ProductHeader = () => {

    return (
        <div className="ProductHeader">
            <div style={{float: 'left',
                width: '120px',
                borderRight: '1px solid lightgray',
            }}><strong>ProductPlan</strong></div>
            <div style={{float: 'left',
                margin: '0 10px 0 10px',
                fontSize: '12px',
                lineHeight: '26px'
            }}>Candidate Roadmap</div>
        </div>
    )
};


export default ProductHeader
