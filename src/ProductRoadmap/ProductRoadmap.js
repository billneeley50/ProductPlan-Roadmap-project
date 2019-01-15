import React, { Component, Redux } from 'react';
import '../App.css';
import './ProductRoadmap.css'
import ProductHeader from './ProductHeader'
import ProductRoadmapHeader from './ProductRoadmapHeader';
import ProductRoadmapBody from './ProductRoadmapBody';



class ProductRoadmap extends Component {

    state = {

        roadmapPhase: 1,
        popupMessage: "Lanes represent high level categories, such as teams, product lines, or strategic initiatives." +
            "Add a color and description to your lane to communicate valuable details to stakeholders.",
        popupHeader: "We'll start with a lane",
        popupFooter: "Drag and drop a lane to get started",
        inPanel: false,
        lanecounter: 0,
        lanebodycounter: 0,
        lanebarcounter: 0,

    };



    onDropLane = (data) => {

        if (data.lane) {
            let roadmaplanes;

            if (this.state.roadmaplanes) {
                roadmaplanes = this.state.roadmaplanes.slice();
            } else {
                roadmaplanes = [];
            }

            let lanecounter = this.state.lanecounter + 1;
            let lanebodycounter = this.state.lanebodycounter + 1;

            roadmaplanes.push(
                { id: 'lane' + lanecounter,
                    name: 'lane' + lanecounter,
                    color: 'green',
                    lanebodies: [
                        { id: 'lanebody' + lanebodycounter,
                            lanebars: [
                            ]
                        }
                    ],
                }
            );

            this.setState({roadmaplanes: roadmaplanes});
            this.setState({lanecounter: lanecounter});
            this.setState({lanebodycounter: lanebodycounter})

            let roadmapPhase = this.state.roadmapPhase;
            if (lanecounter === 1 && roadmapPhase === 1 ) {
                roadmapPhase += 1;
                this.setState({roadmapPhase: roadmapPhase})
                this.setState({
                    popupMessage: "Bars are your specific initative.  Use them to represent your epics, projects, or tasks, and provide an at a glance view of priority, relationships and progress."
                });
                this.setState({
                    popupHeader: "Awesome!  Now let's add a few bars."
                });
                this.setState({
                    popupFooter: "Drag and drop a bar to get started."
                })
            }

        } else if (data.bar) {
            console.log("adding a bar")
        }

    };

    onMouseEnter = (data) => {
        this.setState({inPanel: true});
    };

    onMouseLeave = () => {
        this.setState({inPanel: false});
    };

    onDropBar = (data) => {

        if (data.bar) {
            const roadmaplanes = this.state.roadmaplanes.slice();
            console.log("state.roadmaplanes: " + JSON.stringify(this.state.roadmaplanes));
            const roadmaplane = roadmaplanes[0];

            let lanebodycounter = this.state.lanebodycounter;
            let lanebarcounter = this.state.lanebarcounter + 1;

            if (lanebarcounter === 1) {
                roadmaplane.lanebodies[0].lanebars = [
                    { id: 'lanebar' + lanebarcounter, number: lanebarcounter, position: '100'},
                ]
            } else if (lanebarcounter === 2) {
                lanebodycounter += 1;
                roadmaplane.lanebodies.push(
                    { id: 'lanebody' + lanebodycounter,
                        lanebars: [
                            { id: 'lanebar' + lanebarcounter, number: lanebarcounter, position: '200'},
                        ]
                    }
                )
            } else /*if (lanebarcounter === 3)*/ {
                roadmaplane.lanebodies[0].lanebars.push(
                    { id: 'lanebar' + lanebarcounter, number: lanebarcounter, position: '20'},
                )
                console.log("state.roadmaplanes: " + JSON.stringify(this.state.roadmaplanes));
            }

            this.setState({lanebarcounter: lanebarcounter});

            let roadmapPhase = this.state.roadmapPhase;
            if (lanebarcounter === 1 && roadmapPhase === 2 ) {
                roadmapPhase += 1;
                this.setState({roadmapPhase: roadmapPhase})
                this.setState({
                    popupMessage: "Once they're added, you can share out your roadmap with your team."
                });
                this.setState({
                    popupHeader: "Alright let's set up a couple more."
                });
                this.setState({
                    popupFooter: ""
                })
            } else {
                roadmapPhase += 1;
                this.setState({roadmapPhase: roadmapPhase})
                this.setState({
                    popupMessage: ""
                });
                this.setState({
                    popupHeader: ""
                });
                this.setState({
                    popupFooter: ""
                })
            }



        } else {
            console.log("adding? " + JSON.stringify(data));
        }

    };

    render() {

        return (
            <div className="ProductRoadmap">

                <ProductHeader/>
                <ProductRoadmapHeader/>
                <ProductRoadmapBody
                    roadmaplanes={this.state.roadmaplanes}
                    popupmessage={this.state.popupMessage}
                    popupheader={this.state.popupHeader}
                    popupfooter={this.state.popupFooter}
                    ondroplane={this.onDropLane}
                    ondropbar={this.onDropBar}
                    onmouseenter={this.onMouseEnter}
                    onmouseleave={this.onMouseLeave}
                />
            </div>
            )
    };

}




export default ProductRoadmap;