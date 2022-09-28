import React from 'react';
import './SingleGym.css';

const SingleGym = ({ gym }) => {
    const { image, name, duration } = gym;
    return (
        <div className='gym'>
            <img src={image} alt="" />
            <div className="gym-info">
                <h4>{name}</h4>
                <p>Time required: {duration}s</p>
            </div>
            <button className='btn-gym'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default SingleGym;