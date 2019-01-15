import React from 'react';
import { connect } from 'react-redux';
import './ProductRoadmapPanel.css';
import Lane from '../Lane/Lane'

const ProductRoadmapPanel = (props) => {

    let roadmaplanes;
    if (props.roadmaplanes) {
        roadmaplanes = (
            <div>
                {props.roadmaplanes.map((alane, index) => {
                    return <Lane
                        mouseEnter={props.onmouseenter}
                        name={alane.name}
                        age={alane.color}
                        key={alane.id}
                        ondrop={props.ondrop}
                        lanebodies={alane.lanebodies}
                    />
                })}
            </div>
        );
    }




    return (

        <div className="ProductRoadmapPanel" onMouseEnter={props.onmouseenter} onMouseLeave={props.onmouseleave}>

            <table>
                <tbody>
                <tr>
                    <th>2018</th>
                    <th></th>
                    <th></th>
                    <th>Q1 2019</th>
                    <th></th>
                    <th></th>
                    <th>Q2</th>
                    <th></th>
                    <th></th>
                    <th>Q3</th>
                    <th></th>
                    <th></th>
                    <th>Q4</th>
                </tr>
                <tr>
                    <td><strong>.</strong></td>
                    <td><strong>.</strong></td>
                    <td><strong>.</strong></td>
                    <td><strong>.</strong></td>
                    <td><strong>.</strong></td>
                    <td><strong>.</strong></td>
                    <td><strong>.</strong></td>
                    <td><strong>.</strong></td>
                    <td><strong>.</strong></td>
                    <td><strong>.</strong></td>
                    <td><strong>.</strong></td>
                    <td><strong>.</strong></td>
                    <td><strong>.</strong></td>

                </tr>
                </tbody>
            </table>

            {roadmaplanes}

        </div>
    )

};


export default ProductRoadmapPanel;