import React, { useState } from 'react';
import './SideBar.css';
import me from '../../me.jpg';

const SideBar = ({total}) => {
    const [breakDuration, setBreakDuration] = useState("");
    const handleBreak = e => {
        if(e.length <= 3){
            setBreakDuration(e);
        }
    }
    return (
        <div className='side-bar'>
            {/* user info */}
            <div className="user-info">
                <img src={me} alt="" />
                <h5>Monu Mia</h5>
            </div>
            {/* body info */}
            <div className="body-info">
                <div className="weight">
                    <h3>80Kg</h3>
                    <h4>Weight</h4>
                </div>
                <div className="height">
                    <h3>5.6feet</h3>
                    <h4>height</h4>
                </div>
                <div className="age">
                    <h3>23Years</h3>
                    <h4>Age</h4>
                </div>
            </div>
            {/* Add a break section */}
            <div className="break">
                <h3>Add a break</h3>
                <div className="options" onClick={(e) => handleBreak(e.target.innerText)}>
                    <div>10</div>
                    <div>20</div>
                    <div>30</div>
                    <div>40</div>
                    <div>50</div>
                </div>
            </div>
            {/* byam details */}
            <div className="display">
                <h3>Workout Details</h3>
                <div className='workout-display'>
                    <h4>Workout Time: {total ? total : '00'} seconds</h4>
                </div>
                <div className='break-display'>
                    <h4>Break Time: {breakDuration ? breakDuration : '00'} seconds</h4>
                </div>
            </div>
            {/* button completed toast */}
            <button className='btn-complete'>
                Activity Completed
            </button>
        </div>
    );
};

export default SideBar;