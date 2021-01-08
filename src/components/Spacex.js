import React, { Component } from 'react';
import * as Actions from './actions/spacexActions';
import { connect  } from 'react-redux';
import './Spacex.css';

class Spacex extends Component {
    constructor(props){
        super()
        this.state={
            mission_name:'',
            mission_id:'',
            launch_year:'',
            launch_success:'',
            land_success:''
        }
    }

    componentDidMount(){
        this.props.fetchmissionData();
    }
    

    render() {
        const {missionData} = this.props
        console.log(missionData);
        return (
            <div className="container">
                <h2>SpaceX Launch Programms</h2>
                <div className="missions">
                    {missionData.mission.map((eachMission, index) => {
                        return(
                            <div key={index} className="eachmission">
                                <div>
                                    <img className="missionimg" src={eachMission.links.mission_patch_small} />
                                </div>
                                <div className="missiondesc">
                                    <div className="eachdesc">
                                        <div className="datacnt"><span className="title">{`${eachMission.mission_name}#`}</span></div>
                                        <div className="datacnt" style={{textAlign:"center"}}><span className="subtitle">{eachMission.flight_number}</span></div>
                                    </div>
                                    <div className="eachdesc">
                                        <div> <span>{'Mission Ids'}</span></div>
                                    </div>
                                    <div className="eachdesc">
                                        <div className="datacnt"> <span className="subtitle">{'Lanch year'}</span></div>
                                        <div className="datacnt" style={{textAlign:"center"}}> <span className="subtitle">{eachMission.launch_year}</span></div>
                                    </div>
                                    <div className="eachdesc">
                                        <div className="datacnt"> <span className="subtitle">{'Successfull launch'}</span></div>
                                        <div className="datacnt" style={{textAlign:"center"}}> <span className="subtitle">{eachMission.launch_success?'true':'false'}</span></div>
                                    </div>
                                    <div className="eachdesc">
                                        <div className="datacnt"> <span className="subtitle">{'Successful landing'}</span></div>
                                        <div className="datacnt" style={{textAlign:"center"}}> <span className="subtitle">{eachMission.launch_success?'true':'false'}</span></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        missionData: state.mission
    }
}

export default connect(mapStateToProps, Actions)(Spacex);