import logo from './logo.svg';
import './App.css';
import { Project } from './activity/Project';
import { Task } from './activity/Task';
import { NavigationList } from './navigationList/NavigationList';
import { useEffect } from 'react';

function App() {
  // useEffect(() => {
  //   localStorage.setItem('projects', JSON.stringify([]))
  // }, [])
  
  return (
    <div className="App">
      <Project />
      <Task />
      <NavigationList />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
