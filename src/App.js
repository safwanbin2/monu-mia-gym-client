import { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import QnA from './components/QnA/QnA';
import SideBar from './components/SideBar/SideBar';

function App() {
  const [duration, setDuration] = useState([]);
  const handleAddToList = (d) => {
    setDuration([...duration, d])
  }
  const total = duration.reduce((a, b) => a + b, 0)
  return (
    <div className="App">
      <div className='top'>
        <Main handleAddToList={handleAddToList}></Main>
        <SideBar total={total}></SideBar>
      </div>
      <QnA></QnA>
    </div>
  );
}

export default App;
