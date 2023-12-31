import logo from './logo.svg';
import './App.css';

import { UseState } from './useState';
//import { ClassState } from './ClassState';
import { UseReducer } from './useReducer';


function App() {
  return (
    <div className="App">
      <UseState name="UseState" /> 
      <UseReducer name="UseReducer" />
      {/* <ClassState name="ClassState" /> */}
    </div>
  );
}

export default App;


/**
 * 
 *       <header className="App-header">
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
      </header>

 */