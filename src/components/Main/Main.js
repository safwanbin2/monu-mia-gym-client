import React, { useEffect, useState } from 'react';
import SingleGym from '../SingleGym/SingleGym';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Main.css';

const Main = () => {
    const [gyms, setGyms] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setGyms(data))
    }, [])
    return (
        <main>
            <div className="title">
                <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                <h1>Monu Mia Gym Center</h1>
            </div>
            <h3>Select Prefered Workout</h3>
            <div className="gym-container">
                {
                    gyms.map(gym => <SingleGym
                        key={gym.id}
                        gym={gym}
                    ></SingleGym>)
                }
            </div>
        </main>
    );
};

export default Main;