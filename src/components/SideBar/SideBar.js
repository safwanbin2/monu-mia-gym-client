import React from 'react';
import './SideBar.css';
import me from '../../me.jpg';

const SideBar = () => {
    return (
        <div className='side-bar'>
            <div className="user-info">
                <img src={me} alt="" />
                <h5>Monu Mia</h5>
            </div>
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
        </div>
    );
};

export default SideBar;