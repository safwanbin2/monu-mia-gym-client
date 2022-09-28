import './App.css';
import Main from './components/Main/Main';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <div className='top'>
        <Main></Main>
        <SideBar></SideBar>
      </div>
      <h1>Answer and question</h1>
    </div>
  );
}

export default App;
