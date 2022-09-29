import React from 'react';
import './QnA.css';

const QnA = () => {
    return (
        <div>
            <h1>Hot Questions and Answers</h1>
            <div className='qna'>
                <h3>Q.1: How does react work?</h3>
                <p>A.1: React Js is JavaScript Library. in react whole code divides into multiple independent pieces of codes which we call components. those can be classbased or functional component. in components we write JSX which is a syntactic sugar.react work on a virtual dom</p>
            </div>
            <div className="qna">
                <h3>Q.2: Differences between props and states?</h3>
                <p>A.2: Props are the params that has been passed to child components as paraments. it is defined by components data. While state is used for component inside data changes. this works on interl component</p>
            </div>
            <div className="qna">

            </div>
        </div>
    );
};

export default QnA;